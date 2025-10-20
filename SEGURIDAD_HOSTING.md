# 🔐 CONFIGURACIÓN SEGURA PARA NETLIFY

## 🎯 **MÉTODO 1: PROTECCIÓN POR CONTRASEÑA**

### Archivo: `_headers` (crear en tu proyecto)
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-XSS-Protection: 1; mode=block
```

### Archivo: `netlify.toml` (crear en tu proyecto)
```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

# Protección básica por IP (si tienes IPs fijas de plantas)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  conditions = {Country = ["MX"]}  # Solo México
```

---

## 🔒 **MÉTODO 2: DOMINIO OSCURO + CONTRASEÑA**

### **Estrategia "Security by Obscurity":**
- ✅ **URL poco obvia**: `https://tet-transport-2024-internal.netlify.app`
- ✅ **Sin enlaces públicos**: No aparece en buscadores
- ✅ **Solo personal autorizado**: Compartes URL por canal interno
- ✅ **Cambias URL**: Si se compromete, cambias fácilmente

### **Protección adicional con JavaScript:**
```javascript
// Agregar al inicio de script.js
const AUTHORIZED_ACCESS_CODE = "TETAKAWI2024TRANSPORT";

function checkAccess() {
    const savedCode = localStorage.getItem('tetakawi_access');
    if (savedCode !== AUTHORIZED_ACCESS_CODE) {
        const userCode = prompt("Código de acceso del Departamento de Transporte:");
        if (userCode !== AUTHORIZED_ACCESS_CODE) {
            alert("Acceso denegado");
            document.body.innerHTML = "<h1>Acceso Restringido</h1>";
            return false;
        } else {
            localStorage.setItem('tetakawi_access', userCode);
        }
    }
    return true;
}

// Ejecutar al cargar la página
if (!checkAccess()) {
    // Bloquear acceso
}
```

---

## 🌐 **MÉTODO 3: SUBDOMAIN EMPRESARIAL**

Si Tetakawi tiene dominio propio:
- ✅ **Subdominio**: `transport.tetakawi.com` (parece oficial)
- ✅ **SSL automático**: Certificado de seguridad incluido
- ✅ **Control DNS**: Puedes cambiar a donde apunta

---

## 📱 **MÉTODO 4: APP WEB PROGRESIVA (PWA)**

Convertir tu sitio en "app":
- ✅ **Se instala**: Como app en celulares/computadoras
- ✅ **Funciona offline**: Una vez descargada
- ✅ **Parece app nativa**: No parece página web
- ✅ **URL oculta**: Una vez instalada, no se ve la URL