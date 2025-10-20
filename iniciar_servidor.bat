@echo off
echo ========================================
echo   SERVIDOR TETAKAWI TRANSPORTE LOCAL
echo ========================================
echo.
echo Iniciando servidor en puerto 8080...
echo.
cd /d "%~dp0"
python -m http.server 8080
echo.
echo Presiona Ctrl+C para detener el servidor
pause