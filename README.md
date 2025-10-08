# 🗺️ Topical Authority Map Builder

**Automatyczne tworzenie strategicznych map tematycznych SEO w oparciu o analizę konkurencji**

Aplikacja webowa wykorzystująca Google Gemini 1.5 Pro do automatycznego generowania kompletnych map tematycznych, które pomogą Ci zbudować autorytet tematyczny Twojej strony internetowej.

---

## 🚀 Szybki Start

### Wymagania Wstępne

Przed rozpoczęciem upewnij się, że posiadasz:

1. **Node.js** (wersja 18 lub nowsza) - [Pobierz tutaj](https://nodejs.org/)
2. **Klucz API Google AI** - [Uzyskaj bezpłatnie tutaj](https://aistudio.google.com/app/apikey)
3. **Konto GitHub** - [Zarejestruj się tutaj](https://github.com/signup)
4. **Konto Netlify** - [Zarejestruj się tutaj](https://app.netlify.com/signup)

---

## 📦 Instalacja Lokalna

### Krok 1: Sklonuj Repozytorium

```bash
git clone <URL_TWOJEGO_REPOZYTORIUM>
cd topical-authority-map-builder-beta
```

### Krok 2: Zainstaluj Zależności

```bash
npm install
```

### Krok 3: Uruchom Aplikację Lokalnie

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: **http://localhost:3000**

---

## 🌐 Wdrożenie na Netlify

### Krok 1: Przygotuj Repozytorium GitHub

1. Utwórz nowe repozytorium na GitHub
2. Dodaj remote i wypchnij kod:

```bash
git remote add origin https://github.com/TWOJA_NAZWA/topical-authority-map-builder.git
git branch -M main
git push -u origin main
```

### Krok 2: Połącz z Netlify

1. Zaloguj się do [Netlify](https://app.netlify.com/)
2. Kliknij **"Add new site"** → **"Import an existing project"**
3. Wybierz **GitHub** i autoryzuj dostęp
4. Wybierz swoje repozytorium
5. Netlify automatycznie wykryje ustawienia z pliku `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`
6. Kliknij **"Deploy site"**

### Krok 3: Gotowe! 🎉

Po zakończeniu wdrożenia otrzymasz publiczny URL, np.:
```
https://your-site-name.netlify.app
```

---

## 🔑 Jak Uzyskać Klucz API Google AI

1. Przejdź do [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Zaloguj się kontem Google
3. Kliknij **"Create API Key"**
4. Skopiuj wygenerowany klucz - będziesz go używać w aplikacji

**⚠️ WAŻNE:**
- Twój klucz API **NIE jest przechowywany** przez aplikację
- Jest używany **tylko do pojedynczego zapytania**
- **NIE logujemy** ani nie zapisujemy Twojego klucza
- Przechowuj klucz w bezpiecznym miejscu

---

## 📖 Jak Używać Aplikacji

### 1. Otwórz Aplikację

Przejdź do swojego publicznego URL Netlify lub uruchom lokalnie.

### 2. Wypełnij Formularz

- **Główny Temat**: Wpisz temat, dla którego chcesz stworzyć mapę (np. "rowery elektryczne")
- **URL Konkurenta**: Wklej adres URL strony konkurenta, którą chcesz przeanalizować
- **Klucz API Google AI**: Wklej swój klucz API

### 3. Generuj Mapę

Kliknij przycisk **"Generuj Semantyczną Mapę"**. Aplikacja:
1. Przeanalizuje strukturę strony konkurenta
2. Wyekstrahuje filary i klastry tematyczne
3. Wygeneruje ulepszoną, kompletną mapę dla Twojego tematu

### 4. Eksportuj Wyniki

Po wygenerowaniu mapy możesz:
- Przeglądać hierarchiczną strukturę bezpośrednio w aplikacji
- Kliknąć **"Kopiuj Mapę"** aby skopiować do schowka w formacie Markdown
- Użyć skopiowanej mapy w swoich narzędziach (Notion, Google Docs, itp.)

---

## 🛡️ Bezpieczeństwo

Aplikacja została zaprojektowana z najwyższymi standardami bezpieczeństwa:

### Ochrona Klucza API
- ✅ Klucz API **nigdy nie jest zapisywany** w bazie danych
- ✅ Klucz API **nigdy nie jest logowany** na serwerze
- ✅ Klucz API istnieje **tylko w pamięci przeglądarki** podczas sesji
- ✅ Klucz API jest **automatycznie usuwany** po odświeżeniu strony
- ✅ Transmisja odbywa się przez **szyfrowane połączenie HTTPS**

### Zabezpieczenia HTTP
- ✅ X-Frame-Options: DENY (ochrona przed clickjacking)
- ✅ X-XSS-Protection: włączona
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Content Security Policy

### Walidacja Danych
- ✅ Walidacja URL po stronie klienta i serwera
- ✅ Sanityzacja wszystkich danych wejściowych
- ✅ Ochrona przed atakami injection
- ✅ Ograniczenia długości danych wejściowych

---

## 🛠️ Rozwój Aplikacji

### Struktura Projektu

```
topical-authority-map-builder-beta/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Nagłówek aplikacji
│   │   ├── TopicForm.jsx       # Formularz wejściowy
│   │   └── ResultsSection.jsx  # Sekcja wyników
│   ├── App.jsx                 # Główny komponent
│   ├── main.jsx                # Punkt wejścia
│   └── index.css               # Style globalne
├── netlify/
│   └── functions/
│       └── generateMap.js      # Funkcja serverless (API)
├── public/                     # Zasoby statyczne
├── index.html                  # HTML aplikacji
├── vite.config.js              # Konfiguracja Vite
├── tailwind.config.js          # Konfiguracja Tailwind CSS
├── netlify.toml                # Konfiguracja Netlify
└── package.json                # Zależności projektu
```

### Dostępne Komendy

```bash
# Uruchom serwer deweloperski
npm run dev

# Zbuduj aplikację produkcyjną
npm run build

# Podgląd buildu produkcyjnego
npm run preview
```

---

## 🧪 Testowanie Lokalne

### Test Frontend

1. Uruchom `npm run dev`
2. Otwórz http://localhost:3000
3. Sprawdź responsywność w DevTools (F12)
4. Przetestuj walidację formularza

### Test z Netlify Functions Lokalnie

Zainstaluj Netlify CLI:

```bash
npm install -g netlify-cli
```

Uruchom lokalnie z funkcjami:

```bash
netlify dev
```

---

## 🔄 Aktualizacje i Push na GitHub

Po wprowadzeniu zmian w kodzie:

```bash
# Dodaj zmiany
git add .

# Utwórz commit
git commit -m "Opis zmian"

# Wypchnij na GitHub
git push origin main
```

**Netlify automatycznie wykryje zmiany i wdroży nową wersję!** ✨

---

## 🐛 Rozwiązywanie Problemów

### Problem: "Błąd: Nieprawidłowy klucz API"

**Rozwiązanie:**
- Sprawdź, czy skopiowałeś cały klucz API (bez spacji)
- Upewnij się, że klucz jest aktywny w Google AI Studio
- Sprawdź, czy nie przekroczyłeś limitów darmowego planu

### Problem: "Nie udało się przeanalizować URL"

**Rozwiązanie:**
- Upewnij się, że URL jest publicznie dostępny (nie wymaga logowania)
- Sprawdź, czy URL zaczyna się od `http://` lub `https://`
- Spróbuj innego URL konkurenta

### Problem: Aplikacja nie działa lokalnie

**Rozwiązanie:**
```bash
# Usuń node_modules i zainstaluj ponownie
rm -rf node_modules package-lock.json
npm install

# Sprawdź wersję Node.js (powinna być >= 18)
node --version
```

---

## 📚 Dodatkowe Zasoby

- [Dokumentacja Google Gemini API](https://ai.google.dev/docs)
- [Dokumentacja Netlify](https://docs.netlify.com/)
- [Dokumentacja Vite](https://vitejs.dev/)
- [Dokumentacja React](https://react.dev/)
- [Dokumentacja Tailwind CSS](https://tailwindcss.com/docs)

---

## 🎯 Przyszłe Rozszerzenia (Roadmap)

Planowane funkcjonalności w przyszłych wersjach:

- [ ] Analiza wielu URL konkurentów jednocześnie
- [ ] Wizualizacja mapy w formie interaktywnego grafu
- [ ] Eksport do formatów: CSV, JSON, XMind
- [ ] Historia generowanych map (z logowaniem użytkowników)
- [ ] Integracja z Google Search Console
- [ ] Analiza luk w treści (content gap analysis)

---

## 📄 Licencja

Ten projekt jest własnością prywatną. Wszelkie prawa zastrzeżone.

---

## 🤝 Wsparcie

W przypadku pytań lub problemów:
1. Sprawdź sekcję "Rozwiązywanie Problemów" powyżej
2. Przejrzyj [Issues na GitHub](https://github.com/TWOJA_NAZWA/topical-authority-map-builder/issues)
3. Utwórz nowy Issue z opisem problemu

---

**Zbudowano z ❤️ przy użyciu React, Vite, Tailwind CSS i Google Gemini AI**

🤖 *Generated with [Claude Code](https://claude.com/claude-code)*
