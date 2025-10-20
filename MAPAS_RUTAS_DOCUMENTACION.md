# 🗺️ MAPAS DE TRANSPORTE TETAKAWI - ENLACES ACTUALIZADOS

## ✅ **MAPAS FUNCIONANDO (Ya integrados al sitio)**

### 📍 **DISPONIBILIDAD DE RUTAS:**

#### **Valle Corto - Disponibilidad**
- **URL:** https://www.google.com/maps/d/u/0/edit?mid=1moeyP-G1GehbYbU674lAxjNgDnfa4PfQ&ll=28.127982267100275%2C-110.68109344999999&z=11
- **Ubicación en sitio:** Sección Rutas → Card "Disponibilidad Valle Corto"

#### **Valle Largo - Disponibilidad**
- **URL:** https://www.google.com/maps/d/u/0/edit?mid=1G-s_jrqxulRZLxBbum8fNjHFwRj66hDt&ll=27.649192571023846%2C-110.37254744999996&z=10
- **Ubicación en sitio:** Sección Rutas → Card "Disponibilidad Valle Largo"

---

### 🛣️ **RUTAS ESPECÍFICAS:**

#### **Valle Corto - Rutas**
- **URL:** https://www.google.com/maps/d/u/0/edit?hl=es-419&mid=1QbV-UajBcm09pfGEdzuCZXFlBO-HGGna&ll=28.13251022336727%2C-110.70327772723078&z=12
- **Ubicación en sitio:** Sección Rutas → Card "Rutas Valle Corto"

#### **Valle Largo - Rutas**
- **URL:** https://www.google.com/maps/d/u/0/edit?hl=es-419&mid=1O49YGg609CB2lGfhrnopTXI1om2EvtDN&ll=27.696103611584284%2C-110.52473345&z=10
- **Ubicación en sitio:** Sección Rutas → Card "Rutas Valle Largo"

#### **Largo Largo - Rutas**
- **URL:** https://www.google.com/maps/d/u/0/edit?hl=es-419&mid=1S1j4Q9GaAMKTXGsnUeCwQL3eF8AODdMz&ll=27.65038219682329%2C-110.37254555000004&z=10
- **Ubicación en sitio:** Sección Rutas → Card "Rutas Largo Largo"

---

## 🔄 **PENDIENTES DE AGREGAR:**

### Miguel Alemán
- **Estado:** Esperando enlaces de Google Maps
- **Card:** Ya creada con "Próximamente"

### RocaFuerte General
- **Estado:** Esperando enlaces de Google Maps  
- **Card:** Ya creada con "Próximamente"

### BellaVista Nuevas
- **Estado:** En desarrollo
- **Card:** Ya creada con "En Desarrollo"

---

## 🎯 **CÓMO FUNCIONA AHORA:**

1. **Usuario hace clic** en cualquier card de rutas
2. **Se abre automáticamente** Google Maps en nueva pestaña
3. **Acceso directo** a los mapas editables
4. **Sin páginas intermedias** - navegación directa

---

## 🔧 **PARA AGREGAR NUEVOS MAPAS:**

1. **Obtener URL** del mapa de Google Maps
2. **Buscar en index.html** la card correspondiente
3. **Reemplazar href="#"** con la nueva URL
4. **Cambiar texto** de "Próximamente" a "Ver Rutas"
5. **Cambiar icono** de fa-clock a fa-map

### Ejemplo:
```html
<a href="NUEVA_URL_AQUI" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
    <i class="fas fa-map"></i>
    Ver Rutas
</a>
```

---

## ✅ **VENTAJAS DE LA NUEVA IMPLEMENTACIÓN:**

- ✅ **Acceso directo** desde el sitio corporativo
- ✅ **Se abren en nueva pestaña** (no pierdes la página principal)
- ✅ **Enlaces seguros** con rel="noopener noreferrer"
- ✅ **Iconos específicos** para cada tipo de ruta
- ✅ **Diseño consistente** con el resto del sitio
- ✅ **Funciona en todos los navegadores**

---

## 📱 **ACCESO DESDE PLANTAS:**

Una vez que el sitio esté en hosting público:
- ✅ **Personal de plantas** podrá acceder desde cualquier dispositivo
- ✅ **Enlaces directos** a mapas funcionan desde cualquier ubicación
- ✅ **Sin necesidad** de acceso a Google Sites original
- ✅ **Más rápido** que la versión anterior