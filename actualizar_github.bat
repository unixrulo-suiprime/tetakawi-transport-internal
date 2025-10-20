@echo off
echo ========================================
echo   ACTUALIZAR SITIO CON LOGO
echo ========================================
echo.

echo [1/3] Copiando archivos actualizados...
if exist "github-deploy" rmdir /s /q "github-deploy"
mkdir github-deploy

copy index.html github-deploy\
copy styles.css github-deploy\
copy script.js github-deploy\
copy README.md github-deploy\
copy INSTRUCCIONES.txt github-deploy\

REM Copiar assets incluyendo el nuevo logo
if exist assets (
    xcopy assets github-deploy\assets\ /E /I
    echo ✅ Logo y assets copiados
) else (
    echo ⚠️ Carpeta assets no encontrada - crea la carpeta y agrega tu logo
)

echo.
echo [2/3] Verificando archivos...
echo 📁 Archivos listos para subir:
dir github-deploy /w

echo.
echo [3/3] Instrucciones de actualización:
echo.
echo 🔄 PARA ACTUALIZAR EN GITHUB:
echo 1. Ve a tu repositorio en github.com
echo 2. Click en "Add file" ^> "Upload files"
echo 3. Arrastra TODO el contenido de 'github-deploy'
echo 4. Commit message: "Actualización con logo Tetakawi"
echo 5. Click "Commit changes"
echo.
echo ⚡ Cambios en vivo en 2-3 minutos
echo.
echo 📱 Tu URL no cambia, solo se actualiza el contenido
echo.
pause