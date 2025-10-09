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
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

    // ETAP 1: Dekonstrukcja konkurenta - prostszy prompt bez grounding
    const stage1Prompt = `Jesteś światowej klasy analitykiem SEO i content strategiem.

ZADANIE: Stwórz kompleksową mapę tematyczną dla tematu: "${sanitizedTopic}".

KONTEKST: Użytkownik analizuje konkurencję w tej niszy (przykładowa strona: ${sanitizedUrl}).
Na podstawie Twojej wiedzy o tej tematyce oraz najlepszych praktykach w tej branży, stwórz strategiczną mapę tematyczną.

WYMAGANIA:
1. Zidentyfikuj główne filary tematyczne (pillars) - 5-8 głównych obszarów tematycznych
2. Dla każdego filaru zdefiniuj klastry (clusters) - szczegółowe podtematy (3-6 na filar)
3. Struktura powinna być logiczna, hierarchiczna i wyczerpująca
4. Skup się na semantycznych relacjach między tematami

FORMAT WYJŚCIOWY (zagnieżdżona lista Markdown):
- Filar 1: [Nazwa głównego obszaru tematycznego]
  - Klaster 1.1: [Szczegółowy podtemat]
  - Klaster 1.2: [Szczegółowy podtemat]
  - Klaster 1.3: [Szczegółowy podtemat]
- Filar 2: [Nazwa głównego obszaru tematycznego]
  - Klaster 2.1: [Szczegółowy podtemat]
  - Klaster 2.2: [Szczegółowy podtemat]

WAŻNE: Zwróć TYLKO strukturę w formacie Markdown, bez dodatkowych komentarzy, wprowadzeń czy wyjaśnień.`;

    let stage1Result;
    try {
      const stage1Response = await model.generateContent(stage1Prompt);
      stage1Result = stage1Response.response.text();
    } catch (apiError) {
      console.error('Błąd Stage 1 API:', apiError.message);
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

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: `Błąd podczas generowania mapy: ${apiError.message}`
        }),
      };
    }

    // ETAP 2: Synteza i ulepszanie
    const stage2Prompt = `Jesteś strategiem contentu SEO. Otrzymałeś poniższą strukturę tematyczną, która została wyekstrahowana ze strony konkurenta:

${stage1Result}

Główny temat użytkownika to: "${sanitizedTopic}".

Twoje zadania:
1. Przeanalizuj otrzymaną strukturę i zidentyfikuj w niej ewentualne luki tematyczne lub obszary, które można znacząco rozbudować, aby stworzyć bardziej kompleksowe pokrycie tematu.
2. Wygeneruj nową, ulepszoną i kompletną mapę tematyczną w formacie zagnieżdżonej listy Markdown.
3. Przy najważniejszych filarach dodaj w nawiasie krótką sugestię dotyczącą kluczowych encji, które spajają dany temat.
4. Upewnij się, że struktura jest logiczna, hierarchiczna i kompletna.

Zwróć TYLKO strukturę w formacie Markdown, bez dodatkowych komentarzy czy wyjaśnień.`;

    let stage2Result;
    try {
      const stage2Response = await model.generateContent(stage2Prompt);
      stage2Result = stage2Response.response.text();
    } catch (apiError) {
      console.error('Błąd Stage 2 API:', apiError.message);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Błąd podczas generowania ulepszonej mapy tematycznej.'
        }),
      };
    }

    // Zwracanie wyników
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        map: stage2Result,
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
