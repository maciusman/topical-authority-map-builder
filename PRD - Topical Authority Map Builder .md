### **1. Wprowadzenie i Wizja Produktu**

#### **1.1. Nazwa Robocza: Topical Authority Map Builder**

Nazwa została wybrana, aby precyzyjnie komunikować dwie kluczowe wartości produktu:
*   **Semantic:** Aplikacja nie operuje na prostych słowach kluczowych, lecz na znaczeniu, kontekście i relacjach między pojęciami (encjami). Buduje mapę opartą na głębokim, semantycznym zrozumieniu tematu.
*   **Architect:** Narzędzie nie dostarcza chaotycznej listy pomysłów, ale tworzy ustrukturyzowany, hierarchiczny plan – architekturę treści, która służy jako fundament pod budowę autorytetu tematycznego domeny.

#### **1.2. Wizja Produktu**

Wizją jest stworzenie ultralekkiego, w 100% webowego narzędzia (Software as a Service), które rewolucjonizuje proces tworzenia strategii contentowej. "Semantic Architect" ma być narzędziem pierwszego wyboru dla każdego, kto potrzebuje w ciągu kilku minut zrozumieć krajobraz tematyczny i uzyskać strategiczny plan treści, który przewyższa to, co oferują liderzy rynku.

**Implementacja tej wizji opiera się na trzech filarach:**
1.  **Maksymalna Automatyzacja:** Użytkownik nie musi być ekspertem SEO ani analitykiem. Jego zadaniem jest jedynie wskazanie "pola bitwy" (temat) i "najsilniejszego przeciwnika" (URL konkurenta). Cały proces analizy, ekstrakcji, syntezy i tworzenia strategii jest w pełni zautomatyzowany.
2.  **Dostępność i Prostota:** Aplikacja ma być dostępna pod publicznym linkiem (wdrożona na Netlify), bez konieczności instalacji, skomplikowanej konfiguracji czy zakładania konta. Interfejs ma być tak intuicyjny, jak to tylko możliwe, ograniczając się do trzech pól wejściowych i jednego przycisku.
3.  **Wykorzystanie Technologii "State-of-the-Art":** Unikalną wartością (USP) produktu jest zastosowanie najnowszych możliwości modelu **Google Gemini 2.5 Pro**, a w szczególności jego zdolności do **"uziemiania" (grounding) odpowiedzi w czasie rzeczywistym na podstawie treści z podanego URL**. To gwarantuje, że wygenerowana mapa nie jest oparta na ogólnej "wiedzy" modelu, ale na twardych danych z analizy konkretnej, dobrze prosperującej strony internetowej tu link do dokumentacji https://ai.google.dev/gemini-api/docs/models?hl=pl#gemini-2.5-pro 

#### **1.3. Problem do Rozwiązania**

"Semantic Architect" adresuje następujące, kluczowe problemy (pain points) specjalistów SEO i content marketerów:

*   **Ogromna czasochłonność:** Ręczne tworzenie mapy tematycznej to proces wielogodzinny, a nawet wielodniowy. Wymaga on:
    *   Analizy wyników wyszukiwania (SERP) dla dziesiątek zapytań.
    *   Manualnego przeglądania i dekonstrukcji struktury stron konkurencji.
    *   Korzystania z wielu, często płatnych, narzędzi (np. Ahrefs, SEMrush, AnswerThePublic).
    *   Gromadzenia i organizowania danych w arkuszach kalkulacyjnych lub narzędziach do map myśli.
    **Nasze rozwiązanie:** Skraca ten proces do czasu potrzebnego na pojedyncze wywołanie API (kilkanaście sekund).

*   **Wysoki próg wejścia:** Efektywne tworzenie mapy tematycznej wymaga specjalistycznej wiedzy i doświadczenia w zakresie SEO, rozumienia intencji użytkownika i analizy semantycznej.
    **Nasze rozwiązanie:** Demokratyzuje dostęp do tej wiedzy, opakowując ekspertyzę w proste w użyciu narzędzie. AI pełni rolę wirtualnego stratega SEO.

*   **Ryzyko powierzchowności i pominięć:** Manualna analiza jest obarczona ryzykiem błędu ludzkiego. Łatwo jest pominąć kluczowe podtematy (klastry) lub błędnie zinterpretować hierarchię i powiązania między nimi, co prowadzi do tworzenia niekompletnej lub nielogicznej strategii.
    **Nasze rozwiązanie:** Zapewnia kompleksowe i obiektywne spojrzenie na strukturę tematyczną, identyfikując luki i proponując bardziej kompletną architekturę, niż ta, którą posiada analizowany konkurent.

#### **1.4. Kluczowa Technologia**

*   **Model Językowy:** **Google Gemini 1.5 Pro** (lub najnowszy dostępny w momencie kodowania model z serii Gemini, który oferuje poniższą funkcję).
*   **API:** Dostęp do modelu będzie realizowany poprzez **Google AI API** (dostępne np. przez Google AI Studio).
*   **Kluczowa Funkcjonalność API do Implementacji:** **Grounding (lub "Tool use" z funkcją pobierania URL)**. W kodzie, podczas wywoływania API, musi zostać użyta opcja pozwalająca na przekazanie modelowi adresu URL jako źródła kontekstu. Model musi otrzymać instrukcję, aby oprzeć swoją pierwotną analizę **wyłącznie** na informacjach zawartych pod tym adresem. Jest to krytyczny wymóg techniczny, odróżniający aplikację od standardowych generatorów treści. Implementacja musi zapewnić, że API jest wywoływane z odpowiednimi parametrami, które aktywują tę funkcję.

---
### **2. Grupa Docelowa**

#### **2.1. Główna Grupa: Specjaliści SEO i Content Managerowie**

*   **Kim są:** Profesjonaliści pracujący w agencjach lub w wewnętrznych działach marketingu (in-house), odpowiedzialni za strategię widoczności organicznej i planowanie treści. Ich codzienna praca polega na analizie rynku, konkurencji i słów kluczowych w celu tworzenia harmonogramów publikacji, które zwiększą ruch i autorytet domeny.
*   **Ich główny cel (Job to be Done):** "Potrzebuję szybko i efektywnie stworzyć kompleksowy plan contentowy dla mojej strony (lub strony klienta), który zapewni pełne pokrycie tematyczne, przewyższy konkurencję i będzie łatwy do przekazania zespołowi redakcyjnemu."
*   **Jak "Semantic Architect" rozwiązuje ich problem:**
    *   **Oszczędność Czasu:** Zamiast spędzać 4-8 godzin na manualnej analizie i budowaniu mapy w arkuszach, otrzymują gotową, strategiczną strukturę w mniej niż minutę.
    *   **Głębia Analizy:** Dostarcza im analizy semantycznej, która wykracza poza proste narzędzia do badania słów kluczowych, identyfikując kluczowe encje i relacje między nimi.
    *   **Benchmarking i Identyfikacja Luk:** Automatycznie dekonstruuje strategię czołowego konkurenta i wskazuje obszary, w których można go "zaatakować", tworząc lepsze i bardziej kompletne treści. Daje to konkretną przewagę konkurencyjną.

#### **2.2. Druga Grupa: Właściciele Stron i Blogerzy (Solopreneurs)**

*   **Kim są:** Indywidualni przedsiębiorcy, twórcy, właściciele małych firm lub pasjonaci, którzy samodzielnie zarządzają swoimi stronami internetowymi. Często posiadają wiedzę w swojej dziedzinie, ale brakuje im czasu lub zaawansowanych umiejętności SEO do tworzenia profesjonalnych strategii.
*   **Ich główny cel (Job to be Done):** "Wiem, o czym chcę pisać, ale nie wiem, jak to ustrukturyzować, aby Google mnie zauważyło. Potrzebuję prostego narzędzia, które powie mi, jakie tematy poruszyć, aby stać się autorytetem w mojej niszy."
*   **Jak "Semantic Architect" rozwiązuje ich problem:**
    *   **Demokratyzacja Wiedzy SEO:** Daje im dostęp do zaawansowanej strategii SEO bez konieczności posiadania specjalistycznej wiedzy. Narzędzie wykonuje pracę analityka za nich.
    *   **Struktura i Plan Działania:** Zamiast chaotycznie pisać artykuły na losowe tematy, otrzymują gotowy szkielet (filar-klaster), który porządkuje ich proces twórczy i buduje spójność tematyczną strony.
    *   **Niski Próg Wejścia:** Prostota interfejsu (dwa pola i przycisk) sprawia, że narzędzie jest dla nich w pełni zrozumiałe i użyteczne od pierwszego wejrzenia.

#### **2.3. Trzecia Grupa: Agencje Marketingowe i SEO**

*   **Kim są:** Firmy świadczące usługi dla wielu klientów. Działają pod presją czasu i potrzebują skalowalnych, powtarzalnych procesów, które zapewniają wysoką jakość i szybkie rezultaty.
*   **Ich główny cel (Job to be Done):** "Potrzebujemy zunifikowanego i wydajnego procesu do szybkiego tworzenia audytów contentu i strategii tematycznych na etapie onboardingu nowego klienta lub planowania kwartalnego."
*   **Jak "Semantic Architect" rozwiązuje ich problem:**
    *   **Skalowalność:** Pozwala na błyskawiczne generowanie fundamentów strategii dla wielu klientów z różnych branż bez angażowania na wiele godzin czołowych specjalistów.
    *   **Standaryzacja Wyników:** Zapewnia, że każda przygotowana mapa tematyczna ma spójną, wysoką jakość opartą na danych, co ułatwia wewnętrzne procesy i komunikację z klientem.
    *   **Wartość Dodana w Ofercie:** Może być używane jako narzędzie do szybkiego audytu i prezentacji potencjalnym klientom, pokazując im "na żywo" luki w ich obecnej strategii w porównaniu do lidera rynku, co stanowi potężny argument sprzedażowy.

    ### **3. Kluczowe Funkcjonalności (Features)**

#### **3.1. Interfejs Użytkownika (UI) - "Centrum Dowodzenia"**

Interfejs musi być zaprojektowany zgodnie z zasadą "mobile-first" i być w pełni responsywny. Całość powinna zamknąć się w jednej, prostej w obsłudze stronie (Single Page Application).

*   **Elementy Formularza:**
    1.  **Pole `Główny Temat`:**
        *   **Typ:** `input[type="text"]`
        *   **Etykieta:** "Główny Temat / Encja Centralna"
        *   **Placeholder:** "np. rowery elektryczne"
        *   **Walidacja:** Pole nie może być puste.
    2.  **Pole `URL Konkurenta`:**
        *   **Typ:** `input[type="url"]`
        *   **Etykieta:** "URL Konkurenta do Analizy"
        *   **Placeholder:** "np. https://konkurent.pl/kategoria/rowery"
        *   **Walidacja:** Pole nie może być puste i powinno być podstawowo walidowane jako URL przez przeglądarkę.
    3.  **Pole `Klucz API Google`:**
        *   **Typ:** `input[type="password"]` (aby znaki były maskowane podczas wpisywania).
        *   **Etykieta:** "Twój Klucz API Google AI"
        *   **Placeholder:** "Wklej swój klucz API uzyskany z Google AI Studio"
        *   **Walidacja:** Pole nie może być puste.
        *   **Nota Bezpieczeństwa:** Bezpośrednio pod polem musi znajdować się tekst informacyjny, np.: "ℹ️ *Twój klucz API jest używany wyłącznie do tego jednorazowego zapytania i nie jest przez nas nigdzie przechowywany ani logowany.*"

*   **Przycisk Akcji:**
    *   **Etykieta Domyślna:** "Generuj Semantyczną Mapę"
    *   **Stany:**
        *   **Nieaktywny (disabled):** Domyślnie, dopóki wszystkie trzy pola nie zostaną poprawnie wypełnione.
        *   **Aktywny:** Po wypełnieniu wszystkich pól.
        *   **Ładowanie (loading):** Po kliknięciu przycisku jego tekst powinien zmienić się na "Analizuję..." i powinna pojawić się obok niego ikona-spinner. Przycisk w tym stanie musi być nieaktywny, aby zapobiec wielokrotnemu wysyłaniu zapytania.

*   **Sekcja Wyników:**
    *   **Stan Domyślny:** Obszar jest pusty lub wyświetla zachęcający do działania tekst, np. "Twoja strategiczna mapa tematyczna pojawi się tutaj."
    *   **Stan Ładowania:** Można tu dodatkowo wyświetlić większą animację ładowania (spinner, szkielet treści), aby zasygnalizować użytkownikowi trwający proces.
    *   **Stan Błędu:** W przypadku problemu z API, w tym miejscu musi wyświetlić się czytelny komunikat o błędzie (np. "Wystąpił błąd: Sprawdź poprawność klucza API lub spróbuj ponownie później.").
    *   **Stan Sukcesu:** W tym obszarze renderowana jest finalna, hierarchiczna mapa tematyczna.

#### **3.2. Zarządzanie Kluczem API**

Ta funkcjonalność musi być zaimplementowana z najwyższym priorytetem bezpieczeństwa i prywatności użytkownika.

*   **Przechowywanie:** Klucz API **nigdy** nie jest zapisywany. Jest on przechowywany wyłącznie w stanie (state) aplikacji frontendowej w pamięci przeglądarki i jest usuwany po odświeżeniu strony.
*   **Transmisja:** Klucz jest przesyłany z frontendu do funkcji serwerowej (Netlify Function) w ramach ciała (body) zapytania POST protokołem HTTPS. Funkcja serwerowa używa go do autoryzacji zapytania do API Google, a następnie natychmiast go odrzuca. **Nie wolno go logować po stronie serwera.**
*   **Walidacja:** Implementacja musi zawierać prostą walidację po stronie klienta, która sprawdza jedynie, czy pole nie jest puste. Prawdziwa weryfikacja klucza odbędzie się po stronie API Google, a ewentualny błąd autoryzacji (kod 401/403) musi zostać obsłużony i przekazany jako czytelny komunikat do użytkownika.

#### **3.3. Rdzeń Przetwarzania (Logika w Netlify Function)**

Cała "magia" dzieje się w bezserwerowej funkcji, aby chronić logikę promptów. Funkcja ta będzie przyjmować dane z frontendu i realizować dwuetapowy proces.

*   **Etap 1: Deконструкcja Konkurenta (Pierwsze Wywołanie API)**
    *   **Cel:** Wyekstrahowanie surowej struktury semantycznej z podanego URL.
    *   **Implementacja:** Funkcja serwerowa wywołuje API Google Gemini 1.5 Pro z następującymi parametrami:
        *   **Prompt:** Starannie przygotowany prompt, np.:
            ```
            Jesteś światowej klasy analitykiem SEO. Twoim zadaniem jest przeanalizowanie treści z podanego adresu URL. Zidentyfikuj i przedstaw w formie zagnieżdżonej listy Markdown główne filary tematyczne (pillars) oraz powiązane z nimi klastry (clusters). Skup się wyłącznie na semantycznej strukturze treści.
            Przykład formatu wyjściowego:
            - Filar 1
              - Klaster 1.1
              - Klaster 1.2
            - Filar 2
              - Klaster 2.1
            ```
        *   **Narzędzie (Tool):** Aktywowana funkcja `GoogleSearchRetriever` lub odpowiednik do "uziemiania" (grounding), której jako jedyne źródło danych podany jest `URL Konkurenta`.

*   **Etap 2: Synteza i Ulepszanie (Drugie Wywołanie API)**
    *   **Cel:** Przekształcenie surowej struktury w strategiczną, kompletną mapę tematyczną dla użytkownika.
    *   **Implementacja:** Funkcja serwerowa pobiera odpowiedź z Etapu 1 i natychmiast dokonuje drugiego wywołania API Gemini, używając nowego promptu:
        *   **Prompt:**
            ```
            Jesteś strategiem contentu SEO. Otrzymałeś poniższą strukturę tematyczną, która została wyekstrahowana ze strony konkurenta:
            [TUTAJ WSTAWIONA ODPOWIEDŹ Z ETAPU 1]

            Twój główny temat to: '[TUTAJ WSTAWIONY GŁÓWNY TEMAT UŻYTKOWNIKA]'.

            Twoje zadania:
            1. Przeanalizuj otrzymaną strukturę i zidentyfikuj w niej ewentualne luki tematyczne lub obszary, które można znacząco rozbudować, aby stworzyć bardziej kompleksowe pokrycie tematu.
            2. Wygeneruj nową, ulepszoną i kompletną mapę tematyczną w formacie zagnieżdżonej listy Markdown.
            3. Przy najważniejszych filarach dodaj w nawiasie krótką sugestię dotyczącą kluczowych encji, które spajają dany temat.
            ```
    *   **Odpowiedź:** Finalna odpowiedź z tego etapu jest odsyłana do aplikacji frontendowej jako wynik operacji.

#### **3.4. Wizualizacja Wyników**

Prezentacja wyników musi być czytelna i użyteczna.

*   **Wyświetlanie Hierarchii:**
    *   Otrzymana z backendu odpowiedź w formacie Markdown musi zostać sparsowana i wyrenderowana jako semantyczna lista HTML (`<ul>` i `<li>`).
    *   Należy zastosować style CSS, aby wizualnie oddać hierarchię (np. poprzez wcięcia dla każdego poziomu zagnieżdżenia). Elementy nadrzędne (filary) powinny być wyraźnie odróżnione od podrzędnych (klastrów), np. poprzez pogrubienie (`font-weight: bold`).

*   **Funkcja "Kopiuj do Schowka":**
    *   Nad listą wyników musi znajdować się przycisk z ikoną, oznaczony jako "Kopiuj Mapę".
    *   Po kliknięciu, cała surowa odpowiedź tekstowa (w formacie Markdown z wcięciami) z Etapu 2 musi zostać skopiowana do schowka użytkownika.
    *   Należy zaimplementować wizualne potwierdzenie dla użytkownika, np. zmiana tekstu przycisku na "Skopiowano!" na 2-3 sekundy.

    ### **4. Przepływ Użytkownika (User Flow)**

Poniższy opis przedstawia krok po kroku ścieżkę, jaką użytkownik przechodzi w aplikacji, aby osiągnąć swój cel, uwzględniając zarówno idealny scenariusz ("happy path"), jak i potencjalne błędy.

#### **4.1. Scenariusz Idealny ("Happy Path")**

1.  **Wejście na Stronę (Landing):**
    *   **Akcja Użytkownika:** Użytkownik otwiera URL aplikacji wdrożonej na Netlify.
    *   **Odpowiedź Systemu:** Aplikacja natychmiast renderuje interfejs "Centrum Dowodzenia". Wszystkie pola formularza (`Główny Temat`, `URL Konkurenta`, `Klucz API`) są puste. Przycisk "Generuj Semantyczną Mapę" jest w stanie nieaktywnym (`disabled`). Sekcja wyników wyświetla tekst powitalny.

2.  **Wypełnianie Formularza:**
    *   **Akcja Użytkownika:** Użytkownik kolejno wypełnia wszystkie trzy pola formularza poprawnymi danymi.
    *   **Odpowiedź Systemu:** Po wpisaniu tekstu w ostatnie puste pole, aplikacja (poprzez walidację po stronie klienta) aktywuje przycisk "Generuj Semantyczną Mapę", czyniąc go klikalnym.

3.  **Inicjowanie Generowania Mapy:**
    *   **Akcja Użytkownika:** Użytkownik klika aktywowany przycisk "Generuj Semantyczną Mapę".
    *   **Odpowiedź Systemu:**
        *   Przycisk natychmiast zmienia swój stan na "ładowanie" (np. tekst zmienia się na "Analizuję...", pojawia się ikona-spinner) i staje się ponownie nieaktywny (`disabled`), aby zapobiec duplikowaniu zapytań.
        *   W sekcji wyników znika tekst powitalny, a na jego miejscu pojawia się animacja ładowania (np. pulsujący szkielet treści lub duży spinner), informując o trwającym procesie.
        *   Aplikacja frontendowa wysyła zapytanie typu `POST` do funkcji serwerowej (Netlify Function), przekazując w ciele zapytania (`body`) wartości z trzech pól formularza.

4.  **Oczekiwanie na Wynik:**
    *   **Akcja Użytkownika:** Użytkownik czeka.
    *   **Odpowiedź Systemu:** Aplikacja utrzymuje stan ładowania, oczekując na odpowiedź z backendu. Funkcja serwerowa w tym czasie wykonuje oba zapytania do API Google.

5.  **Wyświetlenie Wyników:**
    *   **Akcja Użytkownika:** Brak.
    *   **Odpowiedź Systemu:**
        *   Funkcja serwerowa zwraca pomyślną odpowiedź (kod `200 OK`) z wygenerowaną mapą tematyczną w formacie Markdown.
        *   Aplikacja frontendowa ukrywa animację ładowania.
        *   W sekcji wyników aplikacja parsuje odpowiedź w formacie Markdown i renderuje ją jako zagnieżdżoną listę HTML (`<ul>`/`<li>`) ze stylami ułatwiającymi czytanie hierarchii.
        *   Nad wynikami pojawia się przycisk "Kopiuj Mapę".
        *   Przycisk "Generuj Semantyczną Mapę" wraca do swojego pierwotnego, aktywnego stanu ("Generuj Semantyczną Mapę"), umożliwiając wykonanie kolejnego zapytania.

6.  **Skorzystanie z Wyników:**
    *   **Akcja Użytkownika:** Użytkownik klika przycisk "Kopiuj Mapę".
    *   **Odpowiedź Systemu:** Aplikacja kopiuje do schowka użytkownika surową, tekstową wersję mapy (Markdown). Przycisk na chwilę zmienia etykietę na "Skopiowano!", dając wizualne potwierdzenie wykonania akcji.

#### **4.2. Scenariusz Alternatywny (Obsługa Błędów)**

1.  **Inicjowanie Generowania z Błędnymi Danymi:**
    *   **Akcja Użytkownika:** Użytkownik klika przycisk "Generuj...", podawszy np. niepoprawny klucz API.
    *   **Odpowiedź Systemu (po stronie backendu):** Funkcja serwerowa otrzymuje od API Google odpowiedź z błędem (np. kod `401 Unauthorized` lub `403 Forbidden`). Zamiast finalnych danych, funkcja zwraca do frontendu odpowiedź z kodem błędu (np. `400 Bad Request` lub `500 Internal Server Error`) oraz zwięzłą informacją o naturze problemu.
    *   **Odpowiedź Systemu (po stronie frontendu):**
        *   Aplikacja ukrywa animację ładowania.
        *   W sekcji wyników, zamiast mapy, wyświetla się czytelny komunikat o błędzie, np. **"Wystąpił błąd. Sprawdź, czy Twój klucz API jest poprawny i aktywny."** lub **"Nie udało się przeanalizować podanego adresu URL. Sprawdź, czy jest on publicznie dostępny."**
        *   Przycisk "Generuj Semantyczną Mapę" wraca do swojego aktywnego stanu, pozwalając użytkownikowi na poprawienie danych i ponowną próbę.

        ### **5. Wymagania Niefunkcjonalne**

Są to kryteria, które definiują jakość działania systemu, a nie konkretne funkcje. Są one kluczowe dla zapewnienia dobrego doświadczenia użytkownika (UX), bezpieczeństwa i niezawodności aplikacji.

#### **5.1. Bezpieczeństwo**

*   **Ochrona Klucza API Użytkownika:**
    *   **Implementacja:** Jak zdefiniowano w punkcie 3.2, klucz API musi być traktowany jako dana wrażliwa. Nie wolno go przechowywać w `localStorage`, `sessionStorage`, `cookies` ani w żadnej bazie danych. Musi istnieć wyłącznie w stanie aplikacji po stronie klienta i być bezpiecznie przekazywany do funkcji serwerowej (Netlify Function) przez HTTPS. Po stronie funkcji serwerowej klucz **nigdy nie może być logowany** ani zapisywany – jest używany wyłącznie do autoryzacji pojedynczego żądania do zewnętrznego API Google, a następnie odrzucany.
    *   **Cel:** Zapewnienie użytkownika, że jego prywatny klucz API nie zostanie narażony na wyciek lub nadużycie. Jest to krytyczny warunek budowy zaufania do aplikacji.

*   **Zabezpieczenie Komunikacji:**
    *   **Implementacja:** Aplikacja musi być wdrożona na Netlify z włączonym i wymuszonym protokołem HTTPS (co jest standardem w Netlify). Cała komunikacja między przeglądarką użytkownika, serwerami Netlify a API Google musi być szyfrowana (SSL/TLS).
    *   **Cel:** Ochrona integralności i poufności przesyłanych danych (temat, URL, klucz API) przed atakami typu Man-in-the-middle.

*   **Walidacja Danych Wejściowych:**
    *   **Implementacja:** Należy zaimplementować podstawową walidację i sanityzację danych wejściowych (URL, temat) po stronie funkcji serwerowej, aby zapobiec potencjalnym atakom typu injection, nawet jeśli w tym przypadku ryzyko jest niskie.
    *   **Cel:** Dobra praktyka programistyczna zapewniająca odporność aplikacji na nieoczekiwane lub złośliwe dane wejściowe.

#### **5.2. Wydajność**

*   **Czas Ładowania Aplikacji (Frontend):**
    *   **Implementacja:** Aplikacja frontendowa musi być zbudowana jako zoptymalizowana paczka (build) z użyciem technik takich jak minifikacja kodu (JS/CSS), kompresja zasobów i, w miarę możliwości, code splitting. Framework (React/Vue/Svelte) powinien być skonfigurowany do generowania produkcyjnej, lekkiej wersji aplikacji.
    *   **Cel:** Czas do pierwszej interakcji (Time to Interactive) nie powinien przekraczać 2-3 sekund na przeciętnym połączeniu internetowym. Użytkownik musi móc natychmiast rozpocząć pracę z narzędziem.

*   **Czas Odpowiedzi Systemu (Backend):**
    *   **Implementacja:** Czas odpowiedzi jest w dużej mierze zależny od API Google. Aplikacja musi jednak być zaprojektowana tak, aby nie dodawać zbędnych opóźnień. Funkcja serwerowa (Netlify Function) powinna być zlokalizowana w regionie geograficznie bliskim serwerom API Google, jeśli jest taka możliwość konfiguracji.
    *   **Cel:** Choć całkowity czas oczekiwania może wynosić od kilku do kilkunastu sekund, kluczowe jest **komunikowanie stanu przetwarzania**. Aplikacja musi natychmiast po kliknięciu przycisku pokazać stan ładowania (feedback wizualny), aby użytkownik wiedział, że jego żądanie jest przetwarzane i nie opuścił strony z powodu braku reakcji.

#### **5.3. Dostępność (Accessibility, a11y)**

*   **Implementacja:** Aplikacja musi być zgodna z podstawowymi wytycznymi WCAG 2.1 na poziomie AA. Obejmuje to:
    *   **Semantyczny HTML:** Użycie odpowiednich tagów (`<main>`, `<form>`, `<label>`, `<button>`) do budowy struktury.
    *   **Dostępność z Klawiatury:** Wszystkie interaktywne elementy (pola formularza, przyciski) muszą być w pełni obsługiwane za pomocą klawiatury (nawigacja klawiszem `Tab`, aktywacja `Enter`/`Spacją`).
    *   **Kontrast Kolorów:** Tekst i elementy interfejsu muszą mieć odpowiedni kontrast w stosunku do tła, aby były czytelne dla osób słabowidzących.
    *   **Etykiety i Teksty Alternatywne:** Pola formularza muszą być poprawnie powiązane z etykietami (`<label for="...">`). Ikony (np. spinner, przycisk kopiowania) powinny mieć tekstowe odpowiedniki (np. atrybut `aria-label`).
*   **Cel:** Zapewnienie, że z aplikacji mogą korzystać wszyscy użytkownicy, w tym osoby z niepełnosprawnościami, używające technologii asystujących (np. czytników ekranu).

#### **5.4. Responsywność (Responsive Web Design, RWD)**

*   **Implementacja:** Interfejs musi być płynny i w pełni użyteczny na różnych rozmiarach ekranu, od małych smartfonów (np. 360px szerokości) po duże monitory desktopowe. Należy zastosować techniki takie jak `flexbox`, `grid` oraz `media queries` w CSS, aby layout automatycznie dostosowywał się do dostępnej przestrzeni.
*   **Cel:** Zapewnienie spójnego i komfortowego doświadczenia użytkownika niezależnie od urządzenia, z którego korzysta.

### **6. Architektura i Stos Technologiczny**

Wybór technologii musi wspierać główne założenia projektu: szybkość wdrożenia, skalowalność, prostotę obsługi oraz bezpieczeństwo. Architektura oparta o podejście Jamstack (JavaScript, APIs, Markup) z wykorzystaniem funkcji bezserwerowych (serverless) jest idealnym rozwiązaniem.

#### **6.1. Frontend**

*   **Framework JavaScript:** **React (z Vite)**
    *   **Uzasadnienie:** Vite oferuje błyskawiczne środowisko deweloperskie (Hot Module Replacement) i tworzy wysoce zoptymalizowane paczki produkcyjne. React jest najpopularniejszą biblioteką UI, z ogromnym ekosystemem i wsparciem społeczności, co ułatwia znalezienie rozwiązań i gotowych komponentów. Jest to doskonały wybór dla tworzenia dynamicznych, interaktywnych jednostronicowych aplikacji (SPA).
    *   **Alternatywy:**
        *   **Next.js (React):** Mógłby być rozważony, ale jego główne zalety (Server-Side Rendering, Static Site Generation) nie są kluczowe dla tej konkretnej aplikacji, która opiera się na interakcji po stronie klienta. Vite będzie prostszym i lżejszym rozwiązaniem.
        *   **Svelte (ze SvelteKit):** Doskonały wybór pod kątem wydajności i prostoty kodu, ale z nieco mniejszym ekosystemem niż React.

*   **Styling:** **Tailwind CSS**
    *   **Uzasadnienie:** Umożliwia ekstremalnie szybkie prototypowanie i budowanie interfejsu bezpośrednio w kodzie HTML/JSX bez opuszczania edytora. Idealnie nadaje się do tworzenia responsywnych, customowych layoutów. Jego podejście "utility-first" eliminuje potrzebę pisania osobnych plików CSS, co przyspiesza development.
    *   **Alternatywy:** Styled Components, CSS Modules.

*   **Zarządzanie Stanem:** **Zustand** lub **React Context API**
    *   **Uzasadnienie:** Aplikacja ma prosty, globalny stan (dane z formularzy, stan ładowania, wyniki, błąd). Zustand to minimalistyczna biblioteka, która jest znacznie prostsza w implementacji niż Redux, a jednocześnie bardziej zoptymalizowana niż podstawowy Context API, co zapobiega niepotrzebnym re-renderom. W ostateczności, dla tak małej aplikacji, wbudowany `React.useState` i `useContext` również będą wystarczające.

#### **6.2. Backend (Funkcje Bezserwerowe)**

*   **Platforma:** **Netlify Functions**
    *   **Uzasadnienie:** Jest to natywne rozwiązanie platformy Netlify, na której będzie hostowana aplikacja. Zapewnia to idealną integrację z procesem CI/CD. Funkcje są pisane w JavaScript/TypeScript (Node.js), co pozwala na utrzymanie jednego języka programowania w całym projekcie (full-stack JavaScript). Netlify automatycznie zarządza skalowaniem, więc nie trzeba martwić się o infrastrukturę serwerową.
    *   **Implementacja:** W repozytorium projektu zostanie utworzony folder `netlify/functions`. W nim znajdzie się plik (np. `generateMap.js`), który będzie zawierał logikę komunikacji z API Google. Frontend będzie wysyłał zapytania na endpoint `/.netlify/functions/generateMap`.

#### **6.3. API Zewnętrzne**

*   **Dostawca AI:** **Google AI (przez Vertex AI lub AI Studio)**
    *   **Uzasadnienie:** Jest to jedyny dostawca, który oferuje model **Gemini 1.5 Pro** z unikalną funkcją "groundingu" na podstawie URL, co jest kluczowym wymaganiem tego projektu.
    *   **SDK:** Komunikacja z API Google z poziomu funkcji serwerowej (Node.js) będzie realizowana za pomocą oficjalnej biblioteki klienckiej **`@google/generative-ai`**. Upraszcza to proces uwierzytelniania i konstruowania zapytań w porównaniu do ręcznego tworzenia żądań HTTP.

#### **6.4. Schemat Architektury**

```
+------------------+      (HTTPS Request)     +---------------------+      (API Call)      +--------------------+
|                  | ------------------------> |                     | -------------------> |                    |
|   Przeglądarka   |                           |  Netlify Function   |                      |  Google AI (Gemini)  |
|   Użytkownika    |      (POST /.netlify/    |   (Node.js)         |                      |                    |
|   (React App)    |      functions/generateMap) |                     | <------------------- |                    |
|                  | <------------------------ |                     |      (API Response)    +--------------------+
+------------------+      (HTTPS Response)    +---------------------+
       |                                          ^
       | (Wdrożenie z Git)                        | (Logika promptów)
       v                                          |
+------------------+                              |
|                  | -----------------------------+
|     GitHub       |
|   Repozytorium   |
|                  |
+------------------+
```

1.  **Użytkownik** wchodzi w interakcję z aplikacją React w swojej przeglądarce.
2.  Po wypełnieniu formularza i kliknięciu przycisku, aplikacja frontendowa wysyła zapytanie `POST` na endpoint Netlify Function.
3.  **Netlify Function**, działająca w środowisku Node.js, odbiera to zapytanie. Zawiera ona logikę dwóch promptów oraz klucz API użytkownika.
4.  Funkcja używa biblioteki `@google/generative-ai`, aby wysłać dwa sekwencyjne, uwierzytelnione zapytania do **API Google AI**.
5.  Po otrzymaniu finalnej odpowiedzi, funkcja serwerowa odsyła ją z powrotem do aplikacji frontendowej.
6.  Aplikacja React renderuje otrzymane dane w sekcji wyników.
7.  Cały proces wdrożenia jest zautomatyzowany przez integrację **GitHub** z Netlify.

### **7. Proces Deweloperski i Wdrożenie (CI/CD)**

Ten rozdział opisuje przepływ pracy, narzędzia i automatyzacje, które zapewnią sprawny, powtarzalny i bezpieczny proces tworzenia oraz publikowania aplikacji "Semantic Architect".

#### **7.1. Repozytorium Kodu**

*   **Platforma:** **GitHub**
    *   **Uzasadnienie:** Jest to standard branżowy dla kontroli wersji, oferuje doskonałą integrację z Netlify oraz narzędzia do zarządzania projektem (Issues, Pull Requests, Projects).
*   **Typ Repozytorium:** **Prywatne (Private)**
    *   **Uzasadnienie:** W początkowej fazie rozwoju repozytorium powinno być prywatne, aby chronić własność intelektualną, w szczególności unikalną logikę i konstrukcję promptów przesyłanych do API Gemini. W przyszłości, po ustabilizowaniu produktu, można rozważyć jego upublicznienie (open-sourcing).
*   **Struktura Początkowa:**
    *   **`.gitignore`:** Plik musi być skonfigurowany od samego początku, aby ignorować foldery takie jak `node_modules`, pliki `dist` (katalog produkcyjny), pliki środowiskowe `.env` oraz inne pliki generowane przez system lub IDE.
    *   **`README.md`:** Plik powinien zawierać podstawowy opis projektu, stos technologiczny oraz instrukcje dotyczące uruchomienia projektu lokalnie (`npm install`, `npm run dev`).
    *   **`netlify.toml`:** Zalecane jest dodanie pliku konfiguracyjnego Netlify do repozytorium, aby zarządzać ustawieniami budowania i wdrożenia bezpośrednio w kodzie.

#### **7.2. Strategia Gałęzi (Branching Strategy)**

Zostanie zastosowany uproszczony model oparty na Git Flow, aby zapewnić porządek i stabilność kodu.

*   **Gałąź `main`:**
    *   **Rola:** Gałąź produkcyjna. Kod znajdujący się w tej gałęzi musi być zawsze stabilny, przetestowany i gotowy do wdrożenia.
    *   **Zasady:** **Bezpośrednie wrzucanie (push) na gałąź `main` jest zabronione.** Wszelkie zmiany muszą trafiać do niej wyłącznie poprzez zatwierdzenie i zmergowanie Pull Requesta.

*   **Gałęzie Funkcjonalne (`feature/...`)**
    *   **Rola:** Każda nowa funkcja, poprawka błędu czy refaktoryzacja kodu musi być tworzona na osobnej gałęzi, która "odbija" od aktualnej wersji `main`.
    *   **Nazewnictwo:** Gałęzie powinny być nazywane w sposób opisowy, np. `feature/setup-vite-react`, `feature/create-ui-form`, `feature/implement-netlify-function`.
    *   **Cykl życia:**
        1.  Tworzenie nowej gałęzi z `main`: `git checkout -b feature/nazwa-funkcji main`.
        2.  Implementacja zmian i regularne commity.
        3.  Wypchnięcie gałęzi do zdalnego repozytorium na GitHub: `git push -u origin feature/nazwa-funkcji`.
        4.  Otwarcie Pull Requesta (PR) z gałęzi `feature/...` do gałęzi `main`.

#### **7.3. Proces CI/CD (Continuous Integration / Continuous Deployment)**

Automatyzacja będzie w pełni oparta o integrację GitHub z Netlify.

*   **Platforma:** **Netlify**
    *   **Konfiguracja:**
        1.  Połączenie konta Netlify z repozytorium "Semantic Architect" na GitHub.
        2.  Ustawienie gałęzi produkcyjnej na `main`.
        3.  Skonfigurowanie polecenia budowania: `npm run build` (lub `vite build`).
        4.  Wskazanie katalogu publikacji: `dist`.
        5.  Wskazanie katalogu z funkcjami serwerowymi: `netlify/functions`.

*   **Automatyzacja Wdrożeń:**
    *   **Wdrożenie Produkcyjne:** Każde zmergowanie Pull Requesta do gałęzi `main` automatycznie uruchomi proces CI/CD na Netlify. Netlify pobierze najnowszą wersję kodu, zainstaluje zależności, zbuduje aplikację frontendową i wdroży ją wraz z funkcjami serwerowymi na główny, publiczny adres URL.
    *   **Podglądy Wdrożeń (Deploy Previews):** Funkcja "Deploy Previews" na Netlify musi być **aktywna**. Dla każdego otwartego Pull Requesta skierowanego do gałęzi `main`, Netlify automatycznie zbuduje i wdroży wersję roboczą aplikacji pod unikalnym, tymczasowym adresem URL. Pozwoli to na:
        *   Wizualne przetestowanie zmian w odizolowanym środowisku.
        *   Sprawdzenie, czy nowa funkcja nie powoduje regresji.
        *   Ułatwienie procesu Code Review przed ostatecznym zatwierdzeniem i mergem.

*   **Zarządzanie Zmiennymi Środowiskowymi:**
    *   Wszelkie klucze API lub inne dane wrażliwe potrzebne po stronie backendu (np. deweloperski klucz API do testów) będą zarządzane jako zmienne środowiskowe w interfejsie Netlify (w ustawieniach `Site settings > Build & deploy > Environment`). Zostaną one bezpiecznie wstrzyknięte do środowiska uruchomieniowego funkcji serwerowej podczas budowania i działania, bez ujawniania ich w kodzie źródłowym.

    ### **8. Potencjalne Rozszerzenia (Zakres V2)**

Poniższe funkcjonalności są poza zakresem pierwszej wersji aplikacji (MVP), ale stanowią cenne pomysły na przyszłe iteracje. Ich wdrożenie zwiększyłoby wartość, użyteczność i możliwości "Semantic Architect".

#### **8.1. Analiza Wielu URL-i Konkurentów Jednocześnie**

*   **Opis:** W obecnej wersji użytkownik może analizować tylko jeden URL konkurenta. Rozszerzenie umożliwiłoby podanie listy 3-5 adresów URL w polu tekstowym (oddzielonych przecinkami lub nowymi liniami).
*   **Wyzwanie implementacyjne:** Wymagałoby to modyfikacji logiki w Netlify Function do iteracyjnego wywoływania API Gemini dla każdego URL-a, a następnie **syntezy wyników z wielu źródeł** w celu stworzenia ujednoliconej mapy. AI musiałoby zidentyfikować wspólne filary i klastry, a także wykryć unikalne dla poszczególnych konkurentów obszary.
*   **Wartość dodana:** Pozwoliłoby na szerszy ogląd rynku, identyfikację wspólnych mianowników liderów oraz bardziej zniuansowane wykrywanie luk w porównaniu do pojedynczego benchmarku.

#### **8.2. Wizualizacja Mapy w Formie Interaktywnego Grafu**

*   **Opis:** Zamiast prostej listy tekstowej, mapa tematyczna byłaby prezentowana jako interaktywny wykres sieciowy (graf), gdzie węzły reprezentują filary i klastry, a krawędzie – powiązania semantyczne.
*   **Wyzwanie implementacyjne:**
    *   **Frontend:** Wykorzystanie bibliotek do wizualizacji grafów, takich jak **D3.js**, **vis.js** lub **React Flow**.
    *   **Backend/AI:** Potrzebna byłaby modyfikacja promptu do Gemini, aby generował dane w formacie zrozumiałym dla bibliotek grafowych (np. JSON z węzłami i krawędziami, wraz z atrybutami typu "filar", "klaster", "encja łącząca").
*   **Wartość dodana:** Znacznie lepsze doświadczenie użytkownika i głębsze zrozumienie relacji między tematami. Wizualizacja jest często potężniejsza niż sama lista tekstowa, ułatwiając strategiczne myślenie.

#### **8.3. Eksport Wyników do Różnych Formatów**

*   **Opis:** Dodanie przycisków umożliwiających eksport wygenerowanej mapy do popularnych formatów.
*   **Wyzwanie implementacyjne:**
    *   **`.txt` / `.md` (Markdown):** Już dostępne dzięki kopiowaniu do schowka, ale można dodać przycisk "Pobierz jako .txt" / "Pobierz jako .md".
    *   **`.csv`:** Konwersja hierarchicznej listy na płaski format CSV, gdzie kolumny mogłyby zawierać "Filar", "Klaster", "Podklaster", "Encje". Wymagałoby to logiki konwersji drzewa na strukturę tabelaryczną.
    *   **`.json`:** Eksport danych w ustrukturyzowanym formacie JSON, który mógłby być dalej przetwarzany przez inne narzędzia. Wymagałoby to modyfikacji promptu AI, aby generowało JSON.
    *   **`.xmind` (lub podobne narzędzia do map myśli):** Bardziej zaawansowana opcja, wymagająca zrozumienia formatu pliku `.xmind` (lub wykorzystania bibliotek do jego generowania), aby użytkownik mógł od razu otworzyć mapę w swoim ulubionym narzędziu do map myśli.
*   **Wartość dodana:** Zwiększa interoperacyjność aplikacji z innymi narzędziami i procesami użytkowników, pozwalając im na dalszą pracę z wygenerowanymi danymi w preferowanym środowisku.

#### **8.4. Historia Generowanych Map (Wymaga Bazy Danych i Logowania)**

*   **Opis:** Implementacja systemu, który pozwoliłby użytkownikom na przeglądanie i ponowne ładowanie wcześniej wygenerowanych map. Wymagałoby to dodania funkcjonalności logowania/rejestracji.
*   **Wyzwanie implementacyjne:**
    *   **Baza Danych:** Konieczność wprowadzenia bazy danych (np. MongoDB, PostgreSQL) do przechowywania informacji o użytkownikach i ich wygenerowanych mapach.
    *   **Autoryzacja/Autentykacja:** Wdrożenie systemu logowania (np. z użyciem Firebase Authentication lub Auth0), aby użytkownicy mogli zarządzać swoimi danymi.
    *   **Backend:** Znaczące rozbudowanie Netlify Functions o logikę obsługi użytkowników, zapisywania i odczytywania danych z bazy.
*   **Wartość dodana:** Użytkownicy mogliby wracać do swoich strategii, śledzić postępy i łatwiej zarządzać planami contentowymi bez konieczności każdorazowego ponownego generowania lub ręcznego zapisywania wyników. Zmieniłoby to produkt z narzędzia jednorazowego użytku w pełnoprawne SaaS.