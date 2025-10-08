# 🚀 Instrukcja Wdrożenia na GitHub i Netlify

Ten dokument zawiera **krok po kroku** instrukcje dla laika, jak opublikować aplikację na GitHub i Netlify.

---

## 📋 Przed Rozpoczęciem

Upewnij się, że masz:
- ✅ Konto GitHub (jeśli nie, zarejestruj się na [github.com](https://github.com/signup))
- ✅ Konto Netlify (jeśli nie, zarejestruj się na [netlify.com](https://app.netlify.com/signup))
- ✅ Zainstalowany Git na komputerze

### Jak sprawdzić, czy masz Gita?

Otwórz terminal (wiersz poleceń) i wpisz:
```bash
git --version
```

Jeśli zobaczysz numer wersji (np. `git version 2.40.0`), masz Gita! ✅

Jeśli nie masz Gita, pobierz go tutaj: [git-scm.com/downloads](https://git-scm.com/downloads)

---

## 🌐 Część 1: Publikacja na GitHub

### Krok 1: Utwórz Nowe Repozytorium na GitHub

1. Zaloguj się na [github.com](https://github.com)
2. Kliknij **zielony przycisk "+New"** (w prawym górnym rogu) lub przejdź do [github.com/new](https://github.com/new)
3. Wypełnij formularz:
   - **Repository name:** `topical-authority-map-builder`
   - **Description:** "Narzędzie do automatycznego tworzenia strategicznych map tematycznych SEO"
   - **Visibility:** Wybierz **Private** (aby kod był prywatny)
   - **NIE ZAZNACZAJ** "Add a README file" (mamy już README)
   - **NIE ZAZNACZAJ** "Add .gitignore" (mamy już .gitignore)
4. Kliknij **"Create repository"**

### Krok 2: Skopiuj URL Swojego Repozytorium

Po utworzeniu repozytorium zobaczysz stronę z instrukcjami. Na górze strony znajdziesz URL repozytorium, np.:
```
https://github.com/TWOJA_NAZWA_UŻYTKOWNIKA/topical-authority-map-builder.git
```

**Skopiuj ten URL** - będzie Ci potrzebny w następnym kroku!

### Krok 3: Podłącz Lokalne Repozytorium do GitHub

Otwórz terminal (wiersz poleceń) w katalogu swojego projektu i wykonaj następujące komendy **KOLEJNO**:

#### 3.1. Dodaj Remote (połączenie z GitHub)

```bash
git remote add origin https://github.com/TWOJA_NAZWA_UŻYTKOWNIKA/topical-authority-map-builder.git
```

⚠️ **WAŻNE:** Zastąp `TWOJA_NAZWA_UŻYTKOWNIKA` swoją prawdziwą nazwą użytkownika GitHub!

#### 3.2. Zmień nazwę gałęzi na "main"

```bash
git branch -M main
```

#### 3.3. Wypchnij kod na GitHub

```bash
git push -u origin main
```

Możesz zostać poproszony o zalogowanie się na GitHub. Postępuj zgodnie z instrukcjami w terminalu.

### Krok 4: Sprawdź, Czy Kod Jest na GitHubie

Odśwież stronę swojego repozytorium na GitHub (tę, którą otworzyłeś w Kroku 1).

Powinieneś teraz zobaczyć wszystkie swoje pliki! 🎉

---

## ☁️ Część 2: Wdrożenie na Netlify

### Krok 1: Zaloguj Się do Netlify

1. Przejdź do [app.netlify.com](https://app.netlify.com)
2. Zaloguj się (najlepiej **przez GitHub** - ułatwi to integrację!)

### Krok 2: Dodaj Nową Stronę

1. Kliknij przycisk **"Add new site"** (lub "Import an existing project")
2. Wybierz **"Import an existing project"**
3. Wybierz **"GitHub"** jako źródło

### Krok 3: Autoryzuj Netlify

Netlify poprosi Cię o dostęp do Twoich repozytoriów GitHub:

1. Kliknij **"Authorize Netlify"**
2. Możesz wybrać:
   - **"All repositories"** - dostęp do wszystkich (łatwiejsze)
   - **"Only select repositories"** - wybierz tylko `topical-authority-map-builder`
3. Zatwierdź autoryzację

### Krok 4: Wybierz Repozytorium

Na liście repozytoriów GitHub znajdź i kliknij:
```
topical-authority-map-builder
```

### Krok 5: Konfiguracja Buildu

Netlify **automatycznie wykryje** ustawienia z pliku `netlify.toml`. Zobaczysz:

- **Branch to deploy:** `main` ✅
- **Build command:** `npm run build` ✅
- **Publish directory:** `dist` ✅
- **Functions directory:** `netlify/functions` ✅

**NIE ZMIENIAJ** tych ustawień - są poprawne!

### Krok 6: Wdróż Stronę

1. Kliknij **"Deploy site"** (lub "Deploy [nazwa-projektu]")
2. Poczekaj 1-3 minuty, aż Netlify:
   - Pobierze kod z GitHub
   - Zainstaluje zależności (`npm install`)
   - Zbuduje aplikację (`npm run build`)
   - Wdroży aplikację

Zobaczysz status "Building" → "Published" ✅

### Krok 7: Znajdź URL Swojej Aplikacji

Po zakończeniu wdrożenia zobaczysz URL aplikacji na górze strony, np.:
```
https://random-name-123456.netlify.app
```

**Kliknij w ten URL** - Twoja aplikacja jest LIVE! 🎉🚀

---

## 🎨 Część 3: Zmiana Nazwy Strony (Opcjonalne)

Domyślny URL Netlify jest losowy. Możesz go zmienić:

1. W panelu Netlify przejdź do **"Site settings"**
2. Kliknij **"Change site name"** w sekcji "Site information"
3. Wpisz nową nazwę, np.:
   ```
   my-topical-authority-map
   ```
4. Kliknij **"Save"**

Twój nowy URL to:
```
https://my-topical-authority-map.netlify.app
```

---

## 🔄 Część 4: Jak Aktualizować Aplikację

### Proces Automatyczny

Netlify automatycznie wdroży nową wersję aplikacji **za każdym razem**, gdy wypchniesz zmiany na GitHub!

### Jak To Działa?

1. Dokonujesz zmian w kodzie lokalnie
2. Wykonujesz commit:
   ```bash
   git add .
   git commit -m "Opis zmian"
   ```
3. Wypychasz na GitHub:
   ```bash
   git push origin main
   ```
4. **Netlify automatycznie wykrywa zmiany i wdraża nową wersję!** ✨

### Gdzie Sprawdzić Status Wdrożenia?

1. Przejdź do panelu Netlify
2. Kliknij na swoją stronę
3. Przejdź do zakładki **"Deploys"**
4. Zobaczysz listę wszystkich wdrożeń z ich statusami

---

## 🔍 Część 5: Testowanie Aplikacji

### Co Potrzebujesz Do Testowania?

1. **Klucz API Google AI** - [Uzyskaj tutaj](https://aistudio.google.com/app/apikey)
2. **URL konkurenta** - np. `https://wikipedia.org/wiki/Bicycle`
3. **Temat** - np. "rowery elektryczne"

### Jak Przetestować?

1. Otwórz URL swojej aplikacji na Netlify
2. Wypełnij formularz:
   - Główny Temat: `rowery elektryczne`
   - URL Konkurenta: `https://pl.wikipedia.org/wiki/Rower_elektryczny`
   - Klucz API: `[Twój klucz z Google AI Studio]`
3. Kliknij **"Generuj Semantyczną Mapę"**
4. Poczekaj 10-30 sekund
5. Powinieneś zobaczyć wygenerowaną mapę tematyczną! ✅

---

## 🐛 Rozwiązywanie Problemów

### Problem 1: "Build failed" na Netlify

**Rozwiązanie:**
1. Przejdź do zakładki **"Deploys"** w Netlify
2. Kliknij na nieudane wdrożenie
3. Przewiń w dół do sekcji **"Deploy log"**
4. Szukaj błędów (czerwony tekst)
5. Najczęstsze przyczyny:
   - Brak zależności: Upewnij się, że `package.json` zawiera wszystkie zależności
   - Błąd składni: Sprawdź, czy kod się kompiluje lokalnie (`npm run build`)

### Problem 2: "Cannot connect to GitHub"

**Rozwiązanie:**
1. Sprawdź, czy repozytorium jest publiczne lub czy Netlify ma dostęp
2. W Netlify przejdź do **"Site settings"** → **"Build & deploy"** → **"Link repository"**
3. Ponownie autoryzuj GitHub

### Problem 3: Funkcja nie działa (błąd 500)

**Rozwiązanie:**
1. W Netlify przejdź do **"Functions"**
2. Kliknij na funkcję `generateMap`
3. Sprawdź logi funkcji
4. Upewnij się, że plik `netlify/functions/generateMap.cjs` istnieje w repozytorium

### Problem 4: "API key invalid"

**Rozwiązanie:**
1. Sprawdź, czy Twój klucz API Google jest aktywny w [AI Studio](https://aistudio.google.com/app/apikey)
2. Upewnij się, że skopiowałeś **cały klucz** (bez spacji na końcu)
3. Sprawdź, czy nie przekroczyłeś limitów API

---

## 📞 Wsparcie

Jeśli masz problemy:

1. Sprawdź logi w Netlify (**Deploys** → wybierz deploy → **Deploy log**)
2. Sprawdź logi funkcji (**Functions** → **generateMap** → **Function log**)
3. Sprawdź sekcję "Rozwiązywanie Problemów" w głównym README.md
4. Utwórz Issue na GitHubie z opisem problemu

---

## ✅ Checklist Wdrożenia

Użyj tej listy, aby upewnić się, że wszystko jest gotowe:

- [ ] Kod jest na GitHubie (repozytorium utworzone i kod wypchnięty)
- [ ] Repozytorium połączone z Netlify
- [ ] Pierwsza wersja wdrożona na Netlify (status: Published)
- [ ] Otrzymałem publiczny URL aplikacji
- [ ] Przetestowałem aplikację z prawdziwym kluczem API
- [ ] Aplikacja generuje mapy tematyczne poprawnie
- [ ] (Opcjonalnie) Zmieniłem nazwę strony na Netlify

---

## 🎉 Gratulacje!

Jeśli dotarłeś tutaj i wszystko działa, to **BRAWO!** 🎊

Twoja aplikacja Topical Authority Map Builder jest teraz dostępna publicznie w internecie!

---

**🤖 Generated with [Claude Code](https://claude.com/claude-code)**
