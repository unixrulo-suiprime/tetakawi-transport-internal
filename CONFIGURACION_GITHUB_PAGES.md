# 🚀 CONFIGURACIÓN GITHUB PAGES - PASO A PASO

## 🎯 **DESDE TU CASA (10 MINUTOS):**

### **Paso 1: Crear repositorio**
1. Ve a https://github.com
2. Click en "New repository"
3. Nombre: `tetakawi-transport-internal`
4. ✅ Marcar "Private" (repositorio privado)
5. ✅ Marcar "Add README"
6. Click "Create repository"

### **Paso 2: Subir archivos**
1. En tu repositorio, click "uploading an existing file"
2. Arrastra estos archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - (carpeta assets si la tienes)
3. En "Commit message" escribe: "Sitio inicial Tetakawi Transport"
4. Click "Commit changes"

### **Paso 3: Activar GitHub Pages**
1. En tu repositorio, ve a "Settings"
2. Scroll hasta "Pages" (lado izquierdo)
3. En "Source" selecciona "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Click "Save"

### **Paso 4: Obtener URL**
- En 2-3 minutos tendrás una URL como:
- `https://tu-usuario.github.io/tetakawi-transport-internal`

---

## 🔐 **SEGURIDAD BÁSICA:**

### **URL secreta:**
- No la compartas públicamente
- Solo personal autorizado
- Sin enlaces desde otros sitios

### **Protección por código (opcional):**
```javascript
// Agregar al inicio de script.js
const ACCESS_CODE = "TETAKAWI2024";

if (!sessionStorage.getItem('tetakawi_access')) {
    const code = prompt("Código de acceso Tetakawi:");
    if (code !== ACCESS_CODE) {
        document.body.innerHTML = "<h1>Acceso Denegado</h1>";
        throw new Error("Acceso no autorizado");
    }
    sessionStorage.setItem('tetakawi_access', 'granted');
}
```

---

## ⚡ **ACTUALIZACIONES FUTURAS:**

### **Método súper fácil:**
1. Editas archivos en tu computadora
2. Vas a GitHub.com
3. Click en el archivo que quieres actualizar
4. Click en el lápiz (edit)
5. Pegas el contenido nuevo
6. Click "Commit changes"
7. ¡Cambios en vivo en 2 minutos!

### **O método por lotes:**
1. Click "Add file" → "Upload files"
2. Arrastras archivos nuevos
3. Reemplazan automáticamente los anteriores

---

## 🗓️ **PLAN PARA EL LUNES:**

### **Si decides migrar al servidor Linux:**
1. **Ya tienes todo en GitHub** (backup perfecto)
2. **Clone el repositorio** en tu servidor:
   ```bash
   git clone https://github.com/tu-usuario/tetakawi-transport-internal.git
   ```
3. **Configuras servidor web** (10 minutos)
4. **Script de actualización** automática

### **Doble beneficio:**
- ✅ **GitHub Pages**: Sitio funcionando HOY
- ✅ **Servidor Linux**: Migración fácil el lunes

---

## 🎯 **¿QUÉ PREFIERES HACER AHORA?**

### **Opción A: GitHub Pages inmediato**
- Configuramos en 10 minutos
- Personal puede acceder desde mañana
- Después migras al servidor cuando quieras

### **Opción B: Solo preparar para el lunes**
- Creamos repositorio
- Documentamos todo
- El lunes configuras servidor

**¿Cuál te parece mejor?** 🤔