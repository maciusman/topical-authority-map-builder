# Automatyczny skrypt konfiguracji GitHub i Netlify
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GitHub & Netlify Auto-Deploy Script  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Krok 1: Otwórz GitHub w przeglądarce
Write-Host "[1/4] Otwieranie GitHub..." -ForegroundColor Yellow
Start-Process "https://github.com/new?name=topical-authority-map-builder&description=Topical+Authority+Map+Builder+-+automatyczne+tworzenie+strategicznych+map+tematycznych+SEO&visibility=public"

Write-Host ""
Write-Host "Repozytorium zostanie utworzone w przeglądarce." -ForegroundColor Green
Write-Host "NIE ZAZNACZAJ zadnych opcji (README, .gitignore, license)" -ForegroundColor Red
Write-Host "Kliknij 'Create repository' i poczekaj 5 sekund..." -ForegroundColor Green
Write-Host ""

# Czekaj na potwierdzenie użytkownika
Read-Host "Naciśnij ENTER gdy utworzysz repozytorium w przeglądarce"

# Krok 2: Dodaj remote i wypchnij kod
Write-Host ""
Write-Host "[2/4] Konfigurowanie Git remote..." -ForegroundColor Yellow
git remote add origin https://github.com/maciusman/topical-authority-map-builder.git

Write-Host "[3/4] Wypychanie kodu na GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✓ Kod został pomyślnie wypchnięty na GitHub!" -ForegroundColor Green
Write-Host ""

# Krok 3: Netlify
Write-Host "[4/4] Konfigurowanie Netlify..." -ForegroundColor Yellow

# Sprawdź czy Netlify CLI jest zainstalowany
$netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue

if (-not $netlifyInstalled) {
    Write-Host "Netlify CLI nie jest zainstalowane. Instaluję..." -ForegroundColor Yellow
    npm install -g netlify-cli
}

# Token NIE jest wpisany w plik. Netlify CLI bierze go ze zmiennej NETLIFY_AUTH_TOKEN
# (ustaw raz: [Environment]::SetEnvironmentVariable("NETLIFY_AUTH_TOKEN","<token>","User"))
# albo z logowania: netlify login

Write-Host "Tworzenie strony na Netlify..." -ForegroundColor Yellow

# Utwórz stronę i wdróż
netlify deploy --prod --dir=dist --message="Initial deployment from automation script"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ SUKCES! Aplikacja jest LIVE!       " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Twoja aplikacja jest dostępna pod URL Netlify!" -ForegroundColor Cyan
Write-Host ""
