@echo off
echo ========================================
echo   DESPLIEGUE TETAKAWI TRANSPORT
echo ========================================
echo.

REM Cambiar estas variables por las de tu servidor
set SERVIDOR_IP=TU_IP_SERVIDOR
set USUARIO=tu_usuario
set RUTA_SERVIDOR=/var/www/tetakawi-transport

echo [1/3] Subiendo a GitHub...
git add .
git commit -m "Actualización %date% %time%"
git push origin main

echo.
echo [2/3] Desplegando al servidor Linux...
echo Conectando a %SERVIDOR_IP%...

REM Usar SCP para copiar archivos (necesitas tener SCP en Windows)
scp -r index.html styles.css script.js assets %USUARIO%@%SERVIDOR_IP%:%RUTA_SERVIDOR%/

echo.
echo [3/3] Verificando despliegue...
echo ✅ Sitio actualizado correctamente!
echo.
echo 🌐 URL de acceso para el personal:
echo    http://%SERVIDOR_IP%/transport
echo.
echo 📱 Comparte esta URL con:
echo    - Personal BellaVista
echo    - Personal RocaFuerte  
echo    - Personal Guadalupe
echo.
pause