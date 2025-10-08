# Skrypt automatycznego wdrożenia na Netlify
$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " Automatyczne Wdrożenie na Netlify     " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Ustaw token
$env:NETLIFY_AUTH_TOKEN = "nfp_ZSd6idHCZfjCh6k3g3bzcjjtqG45wqPj15cf"
$env:NETLIFY_SITE_ID = "66d4555a-b77a-41ef-8929-4d3a20a0f834"

Write-Host "[1/3] Linkowanie projektu z Netlify..." -ForegroundColor Yellow

# Utwórz plik .netlify/state.json
$netlifyDir = ".netlify"
if (-not (Test-Path $netlifyDir)) {
    New-Item -ItemType Directory -Path $netlifyDir | Out-Null
}

$stateJson = @{
    siteId = "66d4555a-b77a-41ef-8929-4d3a20a0f834"
} | ConvertTo-Json

Set-Content -Path ".netlify/state.json" -Value $stateJson

Write-Host "[2/3] Wdrażanie aplikacji..." -ForegroundColor Yellow

# Deploy z funkcjami
netlify deploy --prod --dir=dist --functions=netlify/functions --message="Production deployment"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ Wdrożenie Zakończone!              " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "URL aplikacji: https://topical-authority-map-builder.netlify.app" -ForegroundColor Cyan
Write-Host ""
