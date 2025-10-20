# 🏢 GUÍA DE IMPLEMENTACIÓN EN RED TETAKAWI

## 🎯 SOLICITUD PARA EL DEPARTAMENTO DE TI

### 📧 **Email de Solicitud (Copia y pega):**

```
Asunto: Solicitud de Hosting Interno - Sitio Web Departamento de Transporte

Estimado Equipo de TI,

El Departamento de Transporte solicita el hosting de un sitio web interno con las siguientes características:

**PROPÓSITO:**
- Reemplazar Google Sites actual del departamento de transporte
- Mejorar acceso a formatos, rutas y directorio de contactos
- Uso exclusivo por personal de plantas Tetakawi

**ESPECIFICACIONES TÉCNICAS:**
- Tipo: Sitio web estático (HTML, CSS, JavaScript)
- Tamaño: < 5MB total
- Usuarios: Personal de BellaVista, RocaFuerte, Guadalupe
- Servidor: Cualquier servidor web (Apache, IIS, Nginx)
- Puerto: El que TI considere apropiado (80, 8080, etc.)

**ARCHIVOS A HOSPEDAR:**
- index.html (página principal)
- styles.css (estilos)
- script.js (funcionalidades)
- assets/ (imágenes corporativas)

**ACCESO REQUERIDO:**
- Solo red interna Tetakawi
- Todas las plantas deben poder acceder
- No requiere acceso externo/internet

**BENEFICIOS:**
- Cumple políticas de seguridad de TI
- Mejora eficiencia departamento transporte
- Reduce dependencia de Google Sites
- Mayor control sobre contenido

**URL SUGERIDA:**
http://intranet.tetakawi.com/transporte
o
http://[IP-SERVIDOR]/transporte

Favor confirmar viabilidad y timeline de implementación.

Atentamente,
[Tu nombre]
Departamento de Transporte
```

---

## 🔧 **ALTERNATIVAS SI TI NO PUEDE AYUDAR INMEDIATAMENTE:**

### **Opción A: Servidor Local Temporal**
1. Instala en una PC de la oficina
2. Comparte la IP en red local
3. Ejemplo: `http://192.168.1.50:8080`

### **Opción B: Unidad de Red Compartida**
1. Guarda archivos en carpeta compartida
2. Personal abre directamente el archivo
3. Ejemplo: `\\servidor\shared\transporte\index.html`

### **Opción C: USB/Email**
1. Distribuye archivos por USB
2. Cada planta abre localmente
3. Actualizaciones por email

---

## 📁 **PACKAGE PARA TI (Listo para entregar):**

**Carpeta: "Tetakawi_Transport_Website"**
```
📁 Proyecto Web Transporte/
├── 📄 index.html (página principal)
├── 📄 styles.css (estilos modernos)
├── 📄 script.js (funcionalidades)
├── 📄 iniciar_servidor.bat (para pruebas)
├── 📁 assets/ (imágenes)
├── 📄 README.md (documentación)
└── 📄 INSTALACION_TI.md (esta guía)
```

---

## ⚡ **IMPLEMENTACIÓN RÁPIDA (Para TI):**

### **Apache:**
```apache
<VirtualHost *:80>
    DocumentRoot "C:/inetpub/transport"
    ServerName transport.tetakawi.local
</VirtualHost>
```

### **IIS:**
1. Crear nuevo sitio web
2. Path físico: C:\inetpub\transport
3. Puerto: 80 o 8080
4. Permisos: Read

### **Nginx:**
```nginx
server {
    listen 80;
    server_name transport.tetakawi.local;
    root /var/www/transport;
    index index.html;
}
```

---

## 🎯 **RESULTADO ESPERADO:**

✅ **Personal puede acceder desde cualquier planta**
✅ **URL interna tipo: http://transport.tetakawi.com**
✅ **Cumple políticas de seguridad**
✅ **Fácil mantenimiento y actualizaciones**
✅ **Mayor velocidad que Google Sites**