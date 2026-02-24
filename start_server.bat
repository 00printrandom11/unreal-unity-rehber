@echo off
cd /d "%~dp0"

echo Unreal Rehber Sunucusu Hazirlaniyor...
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo HATA: Node.js yuklu degil! Lutfen Node.js yukleyin.
    pause
    exit
)

if not exist "package.json" (
    echo HATA: package.json dosyasi bulunamadi!
    echo Lutfen bu dosyayi proje klasorunun icinde calistirdiginizdan emin olun.
    pause
    exit
)

if not exist "node_modules" (
    echo Bagimliliklar yukleniyor...
    call npm install
)

set /a PORT=%random% %% 6001 + 3000

echo.
echo Sunucu su adreste baslatiliyor: http://localhost:%PORT%
echo.

start http://localhost:%PORT%
call npx vite --port %PORT% --host

pause
