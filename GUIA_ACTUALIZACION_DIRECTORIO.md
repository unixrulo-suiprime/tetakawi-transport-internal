# 📝 GUÍA DE ACTUALIZACIÓN - DIRECTORIO DE TRANSPORTE

## 🎯 Archivo a Modificar: `index.html`

### 📍 Ubicación de las Tarjetas:

#### **PARQUE BELLAVISTA** (Líneas aproximadas 200-350)
Busca esta sección en el archivo:
```html
<div class="tab-content active" id="bellavista">
    <div class="contacts-grid">
        <!-- AQUÍ ESTÁN LAS TARJETAS DE BELLAVISTA -->
```

#### **PARQUE ROCAFUERTE** (Líneas aproximadas 350-450)
Busca esta sección:
```html
<div class="tab-content" id="rocafuerte">
    <div class="contacts-grid">
        <!-- AQUÍ ESTÁN LAS TARJETAS DE ROCAFUERTE -->
```

---

## 🔄 CÓMO ACTUALIZAR UNA TARJETA:

### Estructura de cada tarjeta:
```html
<article class="contact-card">
    <div class="contact-avatar" aria-hidden="true">
        <i class="fas fa-user"></i>  <!-- O fa-user-tie para jefes -->
    </div>
    <div class="contact-info">
        <h3>NOMBRE COMPLETO</h3>
        <p class="position">PUESTO/CARGO</p>
        <div class="contact-details">
            <span><i class="fas fa-phone"></i> Ext: XXXX</span>
            <span><i class="fas fa-mobile-alt"></i> XXX-XXX-XX-XX</span>
        </div>
    </div>
</article>
```

---

## ✏️ EJEMPLOS DE CAMBIOS COMUNES:

### **Cambiar Nombre:**
```html
<h3>NUEVO NOMBRE</h3>
```

### **Cambiar Puesto:**
```html
<p class="position">NUEVO PUESTO</p>
```

### **Cambiar Extensión:**
```html
<span><i class="fas fa-phone"></i> Ext: 1825</span>
```

### **Cambiar Celular:**
```html
<span><i class="fas fa-mobile-alt"></i> 622-123-45-67</span>
```

### **Agregar Nueva Tarjeta:**
Copia una tarjeta completa y pégala antes del cierre `</div>` de contacts-grid

### **Eliminar Tarjeta:**
Elimina todo el bloque `<article class="contact-card">...</article>`

---

## 🎨 TIPOS DE ICONOS DISPONIBLES:

- **Jefe de Departamento:** `fa-user-tie`
- **Personal General:** `fa-user`
- **Transportistas:** `fa-user`
- **Asistentes:** `fa-user`

---

## 🚀 PASOS RÁPIDOS PARA ACTUALIZAR:

1. **Abrir:** `index.html` en VS Code
2. **Buscar:** Ctrl+F → nombre de la persona a cambiar
3. **Editar:** Cambiar nombre, puesto, extensión, celular
4. **Guardar:** Ctrl+S
5. **Revisar:** Actualizar navegador (F5)

---

## 📞 FORMATO DE CONTACTOS:

### **Extensiones:**
- Bellavista: `Ext: 18XX`
- RocaFuerte: `Ext: (84) 18XX`

### **Celulares:**
- Formato: `622-XXX-XX-XX`

---

## ⚡ TIPS IMPORTANTES:

- **Siempre mantén** la estructura HTML
- **No elimines** las clases CSS
- **Guarda backup** antes de cambios grandes
- **Prueba en navegador** después de cambios
- **Mantén consistencia** en formato de teléfonos

---

## 🆘 Si algo sale mal:
1. Ctrl+Z para deshacer
2. O restaurar desde backup
3. O contactar para soporte técnico