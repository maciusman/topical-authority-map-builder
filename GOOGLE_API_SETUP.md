# 🔑 Jak Uzyskać Klucz API Google AI - Instrukcja Krok Po Kroku

Ten dokument zawiera **szczegółową instrukcję** dla osób, które nigdy wcześniej nie używały API Google.

---

## 📋 Co To Jest Klucz API?

**Klucz API** to specjalny "kod dostępu", który pozwala Twojej aplikacji komunikować się z usługami Google AI (Gemini). Jest jak hasło, które aplikacja używa, aby uzyskać dostęp do zaawansowanych funkcji sztucznej inteligencji.

**Ważne:**
- Klucz API jest **prywatny** - nie udostępniaj go publicznie!
- Nasza aplikacja **NIE przechowuje** Twojego klucza
- Klucz jest używany **tylko do pojedynczego zapytania**
- Po odświeżeniu strony klucz jest usuwany z pamięci

---

## 🆓 Czy To Jest Darmowe?

**TAK!** Google oferuje darmowy plan (Free Tier) dla Google AI Studio, który obejmuje:

- ✅ **60 zapytań na minutę**
- ✅ **1,500 zapytań dziennie**
- ✅ **1 milion tokenów dziennie**

Dla większości użytkowników ten limit jest **więcej niż wystarczający**!

⚠️ **Uwaga:** Jeśli przekroczysz limity, Google może Cię poprosić o płatny plan, ale zostaniesz o tym poinformowany z wyprzedzeniem.

---

## 🚀 Instrukcja Uzyskania Klucza API

### Krok 1: Przejdź do Google AI Studio

Otwórz przeglądarkę i wejdź na stronę:

🔗 **[https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**

### Krok 2: Zaloguj Się Kontem Google

1. Kliknij **"Sign in"** (w prawym górnym rogu)
2. Wybierz swoje konto Google lub zaloguj się
3. Zaakceptuj warunki użytkowania (Terms of Service)

⚠️ **Nie masz konta Google?** Utwórz je na [accounts.google.com](https://accounts.google.com/signup)

### Krok 3: Przejdź do Zakładki "Get API Key"

Po zalogowaniu zobaczysz interfejs Google AI Studio.

1. W lewym menu kliknij **"Get API key"** (ikona klucza 🔑)
2. Lub użyj bezpośredniego linku: [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### Krok 4: Utwórz Nowy Klucz API

Na stronie "API keys" zobaczysz przycisk:

**"Create API key"**

Kliknij go!

### Krok 5: Wybierz Projekt (Opcjonalne)

Google może zapytać, w jakim projekcie chcesz utworzyć klucz:

- **Opcja 1:** Wybierz istniejący projekt (jeśli masz)
- **Opcja 2:** Kliknij **"Create API key in new project"** (zalecane dla nowych użytkowników)

### Krok 6: Skopiuj Klucz API

Po utworzeniu klucza zobaczysz okno z Twoim kluczem API. Wygląda on mniej więcej tak:

```
AIzaSyA1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q
```

**WAŻNE KROKI:**

1. Kliknij przycisk **"Copy"** (ikona schowka 📋) - klucz zostanie skopiowany do schowka
2. **ZAPISZ KLUCZ** w bezpiecznym miejscu (np. w menedżerze haseł lub notatniku)
3. Kliknij **"OK"** lub **"Close"**

⚠️ **Uwaga:** Klucz API jest pokazywany tylko raz! Jeśli go zgubisz, będziesz musiał utworzyć nowy.

### Krok 7: Gotowe! 🎉

Masz już klucz API! Możesz go teraz użyć w aplikacji Topical Authority Map Builder.

---

## 🔒 Bezpieczeństwo Klucza API

### DO's (Co ROBIĆ) ✅

- ✅ Przechowuj klucz w bezpiecznym miejscu
- ✅ Używaj klucza tylko w zaufanych aplikacjach
- ✅ Regularnie sprawdzaj użycie API w Google Cloud Console
- ✅ Jeśli podejrzewasz wyciek, natychmiast usuń klucz i utwórz nowy

### DON'Ts (Czego NIE ROBIĆ) ❌

- ❌ NIE udostępniaj klucza publicznie (np. na forum, w social media)
- ❌ NIE commituj klucza do publicznego repozytorium GitHub
- ❌ NIE wysyłaj klucza przez niezabezpieczone kanały (np. email, SMS)
- ❌ NIE używaj tego samego klucza do wielu różnych aplikacji

---

## 📊 Jak Sprawdzić Wykorzystanie API?

### Krok 1: Przejdź do Google Cloud Console

🔗 [console.cloud.google.com](https://console.cloud.google.com/)

### Krok 2: Wybierz Swój Projekt

Na górze strony, kliknij na nazwę projektu i wybierz projekt, w którym utworzyłeś klucz API.

### Krok 3: Przejdź do "APIs & Services"

1. W lewym menu kliknij **"APIs & Services"**
2. Następnie kliknij **"Dashboard"**

### Krok 4: Zobacz Statystyki

Zobaczysz:
- Liczbę zapytań (requests)
- Wykorzystanie limitów
- Błędy (jeśli wystąpiły)

---

## 🔄 Jak Zarządzać Kluczami API?

### Wyświetlanie Istniejących Kluczy

1. Przejdź do [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Zobaczysz listę wszystkich utworzonych kluczy
3. Każdy klucz ma:
   - Nazwę
   - Datę utworzenia
   - Status (Active/Inactive)

### Usuwanie Klucza (Jeśli Jest Skompromitowany)

⚠️ **WAŻNE:** Jeśli podejrzewasz, że ktoś zna Twój klucz API, natychmiast go usuń!

1. Przejdź do [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Znajdź klucz, który chcesz usunąć
3. Kliknij ikonę **kosza** (🗑️) obok klucza
4. Potwierdź usunięcie
5. Utwórz nowy klucz (Krok 4 z instrukcji powyżej)

### Ograniczanie Klucza (Zaawansowane)

Możesz ograniczyć klucz API, aby działał tylko z konkretnymi usługami lub domenami:

1. Przejdź do [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
2. Kliknij na swój klucz API
3. W sekcji **"Application restrictions"** możesz ustawić:
   - **HTTP referrers:** Ograniczenie do konkretnych domen (np. tylko Twoja aplikacja Netlify)
   - **IP addresses:** Ograniczenie do konkretnych adresów IP
4. W sekcji **"API restrictions"** wybierz:
   - **"Restrict key"**
   - Zaznacz tylko **"Generative Language API"**
5. Kliknij **"Save"**

⚠️ **Uwaga:** Po ograniczeniu klucza, będzie on działał **tylko** z określonymi usługami/domenami!

---

## ⚡ Szybkie FAQ

### Q: Czy potrzebuję karty kredytowej?
**A:** NIE! Google AI Studio w planie darmowym nie wymaga karty kredytowej.

### Q: Co się stanie, jeśli przekroczę limity?
**A:** API zwróci błąd o przekroczeniu limitu (429 Too Many Requests). Będziesz musiał poczekać lub przejść na płatny plan.

### Q: Czy mogę użyć tego samego klucza w wielu aplikacjach?
**A:** Technicznie tak, ale **nie zalecamy** tego ze względów bezpieczeństwa. Lepiej utworzyć osobny klucz dla każdej aplikacji.

### Q: Jak długo klucz API jest ważny?
**A:** Klucz API jest ważny **bezterminowo**, dopóki go nie usuniesz.

### Q: Czy aplikacja przechowuje mój klucz?
**A:** **NIE!** Nasza aplikacja:
- Używa klucza tylko do pojedynczego zapytania
- NIE zapisuje klucza w żadnej bazie danych
- NIE loguje klucza na serwerze
- Klucz jest usuwany z pamięci po odświeżeniu strony

### Q: Co zrobić, jeśli nie działa?
**A:** Sprawdź:
1. Czy skopiowałeś **cały klucz** (bez spacji)
2. Czy klucz jest **aktywny** w Google AI Studio
3. Czy nie przekroczyłeś **limitów API**
4. Czy masz włączone **Generative Language API** w Google Cloud Console

---

## 🆘 Problemy i Rozwiązania

### Problem: "API key not valid"

**Możliwe przyczyny:**
1. Klucz został źle skopiowany (sprawdź spacje na początku/końcu)
2. Klucz został usunięty w Google AI Studio
3. Klucz jest ograniczony do konkretnych domen

**Rozwiązanie:**
- Skopiuj klucz ponownie (z AI Studio)
- Upewnij się, że klucz jest aktywny
- Sprawdź ustawienia ograniczeń klucza

### Problem: "Quota exceeded"

**Możliwe przyczyny:**
1. Przekroczyłeś dzienny limit zapytań (1,500/dzień)
2. Przekroczyłeś limit zapytań na minutę (60/min)

**Rozwiązanie:**
- Poczekaj do następnego dnia
- Przejdź na płatny plan w Google Cloud Console
- Zoptymalizuj liczbę zapytań

### Problem: "Service not enabled"

**Możliwa przyczyna:**
Generative Language API nie jest włączone w Twoim projekcie

**Rozwiązanie:**
1. Przejdź do [console.cloud.google.com/apis/library](https://console.cloud.google.com/apis/library)
2. Wyszukaj "Generative Language API"
3. Kliknij **"Enable"**

---

## 📚 Dodatkowe Zasoby

- [Dokumentacja Google AI Studio](https://ai.google.dev/docs)
- [Limity i ceny API](https://ai.google.dev/pricing)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Google AI Studio](https://aistudio.google.com/)

---

## ✅ Checklist

Użyj tej listy, aby upewnić się, że wszystko jest gotowe:

- [ ] Zalogowałem się do Google AI Studio
- [ ] Utworzyłem klucz API
- [ ] Skopiowałem i zapisałem klucz w bezpiecznym miejscu
- [ ] Przetestowałem klucz w aplikacji
- [ ] Klucz działa poprawnie
- [ ] (Opcjonalnie) Ustaw ograniczenia klucza dla zwiększonego bezpieczeństwa

---

**🤖 Generated with [Claude Code](https://claude.com/claude-code)**
