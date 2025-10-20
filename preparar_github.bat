@echo off
echo ========================================
echo   PREPARAR PARA GITHUB PAGES
echo ========================================
echo.

REM Crear carpeta limpia para GitHub
if exist "github-deploy" rmdir /s /q "github-deploy"
mkdir github-deploy

echo [1/4] Copiando archivos necesarios...
copy index.html github-deploy\
copy styles.css github-deploy\
copy script.js github-deploy\
if exist assets xcopy assets github-deploy\assets\ /E /I

echo.
echo [2/4] Creando archivo README...
echo # Tetakawi Transport Department > github-deploy\README.md
echo. >> github-deploy\README.md
echo Sitio web interno del Departamento de Transporte de Tetakawi >> github-deploy\README.md
echo. >> github-deploy\README.md
echo ## Acceso >> github-deploy\README.md
echo Solo personal autorizado de plantas Tetakawi >> github-deploy\README.md

echo.
echo [3/4] Agregando protección básica...
echo. >> github-deploy\script.js
echo. >> github-deploy\script.js
echo // Protección básica de acceso >> github-deploy\script.js
echo const TETAKAWI_ACCESS = "TRANSPORT2024"; >> github-deploy\script.js
echo if (!sessionStorage.getItem('tetakawi_verified')) { >> github-deploy\script.js
echo     const code = prompt("Código de acceso Tetakawi:"); >> github-deploy\script.js
echo     if (code !== TETAKAWI_ACCESS) { >> github-deploy\script.js
echo         alert("Acceso denegado"); >> github-deploy\script.js
echo         document.body.innerHTML = "^<h1^>Acceso Restringido^</h1^>"; >> github-deploy\script.js
echo     } else { >> github-deploy\script.js
echo         sessionStorage.setItem('tetakawi_verified', 'true'); >> github-deploy\script.js
echo     } >> github-deploy\script.js
echo } >> github-deploy\script.js

echo.
echo [4/4] Creando instrucciones...
echo INSTRUCCIONES PARA GITHUB PAGES: > github-deploy\INSTRUCCIONES.txt
echo. >> github-deploy\INSTRUCCIONES.txt
echo 1. Ve a github.com >> github-deploy\INSTRUCCIONES.txt
echo 2. Crea nuevo repositorio PRIVADO >> github-deploy\INSTRUCCIONES.txt
echo 3. Sube todos estos archivos >> github-deploy\INSTRUCCIONES.txt
echo 4. Ve a Settings ^> Pages >> github-deploy\INSTRUCCIONES.txt
echo 5. Activa GitHub Pages >> github-deploy\INSTRUCCIONES.txt
echo. >> github-deploy\INSTRUCCIONES.txt
echo Código de acceso: TRANSPORT2024 >> github-deploy\INSTRUCCIONES.txt

echo.
echo ✅ ¡Todo listo en la carpeta 'github-deploy'!
echo.
echo 📁 Archivos preparados:
dir github-deploy
echo.
echo 🚀 Siguiente paso:
echo    1. Ve a https://github.com
echo    2. Crea repositorio PRIVADO
echo    3. Sube contenido de carpeta 'github-deploy'
echo    4. Activa GitHub Pages en Settings
echo.
echo 🔐 Código de acceso para el personal: TRANSPORT2024
echo.
pause