@echo off
echo.
echo ========================================
echo   ACTUALIZADOR RAPIDO - TETAKAWI TRANSPORT
echo ========================================
echo.

cd /d "C:\ruta\donde\este\tu\proyecto"

echo Descargando ultimos cambios...
git pull origin main

echo.
echo Listo! Ya tienes la version mas actualizada
echo.
echo Para subir cambios despues de editar:
echo git add .
echo git commit -m "descripcion de cambios"
echo git push origin main
echo.
pause