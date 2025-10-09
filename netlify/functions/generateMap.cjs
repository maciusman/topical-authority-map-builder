const { GoogleGenerativeAI } = require('@google/generative-ai');

// Funkcja do sanityzacji danych wejściowych
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
};

// Funkcja do walidacji URL
const isValidUrl = (urlString) => {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (err) {
    return false;
  }
};

exports.handler = async (event, context) => {
  // Ustawienie nagłówków CORS i bezpieczeństwa
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  };

  // Obsługa preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Tylko metoda POST jest dozwolona
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Metoda niedozwolona' }),
    };
  }

  try {
    // Parsowanie i walidacja danych wejściowych
    const { mainTopic, competitorUrl, apiKey } = JSON.parse(event.body);

    // Walidacja obecności wszystkich wymaganych pól
    if (!mainTopic || !competitorUrl || !apiKey) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Brakuje wymaganych pól: mainTopic, competitorUrl lub apiKey'
        }),
      };
    }

    // Sanityzacja danych
    const sanitizedTopic = sanitizeInput(mainTopic);
    const sanitizedUrl = sanitizeInput(competitorUrl);
    const sanitizedApiKey = sanitizeInput(apiKey);

    // Walidacja URL
    if (!isValidUrl(sanitizedUrl)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Podany URL konkurenta jest nieprawidłowy'
        }),
      };
    }

    // Walidacja długości danych
    if (sanitizedTopic.length > 200 || sanitizedUrl.length > 500) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Dane wejściowe przekraczają dozwoloną długość'
        }),
      };
    }

    // Inicjalizacja Google Generative AI
    // UWAGA: Klucz API jest używany TYLKO do tego zapytania i NIE jest nigdzie zapisywany
    const genAI = new GoogleGenerativeAI(sanitizedApiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

    // Jednoetapowe generowanie mapy z URL Context (optymalizacja dla Netlify timeout)
    const prompt = `Jesteś światowej klasy analitykiem SEO i content strategiem.

ZADANIE: Przeanalizuj stronę ${sanitizedUrl} i stwórz kompleksową, strategiczną mapę tematyczną dla tematu "${sanitizedTopic}".

INSTRUKCJE:
1. Przeanalizuj zawartość i strukturę strony pod podanym URL
2. Wyekstrahuj główne filary tematyczne (pillars) i klastry (clusters)
3. Rozbuduj strukturę o dodatkowe obszary i podtematy, które mogą wzbogacić strategię contentową
4. Dodaj kluczowe encje przy najważniejszych filarach (w nawiasach)
5. Zapewnij logiczną hierarchię i kompletność

FORMAT (zagnieżdżona lista Markdown):
- Filar 1: [Nazwa] (encje: [...])
  - Klaster 1.1: [Podtemat]
  - Klaster 1.2: [Podtemat]
- Filar 2: [Nazwa] (encje: [...])
  - Klaster 2.1: [Podtemat]

Zwróć TYLKO strukturę Markdown, bez komentarzy.`;

    let result;
    try {
      const response = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        tools: [{ url_context: {} }],
      });

      result = response.response.text();
    } catch (apiError) {
      console.error('Błąd API:', apiError.message);
      console.error('Pełny błąd:', apiError);

      // Obsługa błędów autoryzacji
      if (apiError.message.includes('API key') || apiError.message.includes('401') || apiError.message.includes('API_KEY_INVALID')) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({
            error: 'Nieprawidłowy klucz API Google. Sprawdź swój klucz i spróbuj ponownie.'
          }),
        };
      }

      // Obsługa błędu modelu
      if (apiError.message.includes('not found') || apiError.message.includes('404')) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            error: 'Model Gemini 2.5 Pro nie jest dostępny. Sprawdź czy masz dostęp do tego modelu.'
          }),
        };
      }

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: `Błąd podczas generowania mapy: ${apiError.message}`
        }),
      };
    }

    // Zwracanie wyników
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        map: result,
        success: true
      }),
    };

  } catch (error) {
    console.error('Błąd serwera:', error.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Wystąpił nieoczekiwany błąd serwera. Spróbuj ponownie.'
      }),
    };
  }
};
