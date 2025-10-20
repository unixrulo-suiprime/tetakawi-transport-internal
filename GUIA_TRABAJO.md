# 🚀 GUÍA PARA USAR EL PROYECTO EN EL TRABAJO

## 📥 PRIMERA VEZ (Descargar proyecto)

```bash
# 1. Abrir terminal (PowerShell o CMD)
# 2. Ir a donde quieras guardar el proyecto
cd C:\Users\TuUsuario\Desktop

# 3. Clonar el repositorio
git clone https://github.com/unixrulo-suiprime/tetakawi-transport-internal.git

# 4. Entrar a la carpeta
cd tetakawi-transport-internal

# 5. Configurar git (SOLO LA PRIMERA VEZ)
git config user.email "tu-email@tetakawi.com"
git config user.name "unixrulo-suiprime"
```

## 🔄 CADA DÍA (Actualizar y trabajar)

```bash
# 1. Entrar a la carpeta del proyecto
cd tetakawi-transport-internal

# 2. SIEMPRE descargar cambios PRIMERO
git pull origin main

# 3. Abrir VS Code
code .

# 4. Hacer tus cambios...

# 5. Cuando termines, subir cambios:
git add .
git commit -m "Describe qué cambiaste"
git push origin main
```

## ⚡ COMANDOS RÁPIDOS

- **Actualizar:** `git pull origin main`
- **Subir cambios:** `git add . && git commit -m "mensaje" && git push origin main`
- **Ver estado:** `git status`

## 🌐 SITIO EN VIVO
https://unixrulo-suiprime.github.io/tetakawi-transport-internal/

## 🆘 SI HAY PROBLEMAS
- Verificar que estés en la carpeta correcta
- Usar tu token de GitHub como password
- Si hay conflictos, hacer `git pull` primero

---
**¡Listo para trabajar desde cualquier lado!** 🎉