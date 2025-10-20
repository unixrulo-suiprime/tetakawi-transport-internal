# 🐧 CONFIGURACIÓN EN SERVIDOR LINUX TETAKAWI

## 🎯 **ESTRUCTURA RECOMENDADA:**

### **Directorio en tu servidor:**
```bash
# Crear directorio para transport
sudo mkdir -p /var/www/tetakawi-transport
sudo chown tu_usuario:tu_usuario /var/www/tetakawi-transport

# O si ya tienes un directorio web
mkdir ~/public_html/transport
```

### **Configuración Nginx (si usas Nginx):**
```nginx
# /etc/nginx/sites-available/tetakawi-transport
server {
    listen 80;
    server_name tu-servidor.tetakawi.com;  # O la IP que te dieron
    
    root /var/www/tetakawi-transport;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Seguridad básica
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Bloquear acceso a archivos sensibles
    location ~ /\. {
        deny all;
    }
}
```

## ⚡ **PROCESO DE ACTUALIZACIÓN SÚPER FÁCIL:**

### **Método 1: SFTP/SCP (Recomendado)**
```bash
# Desde tu computadora Windows con WinSCP, FileZilla o PowerShell
scp -r "C:\Users\Suprime\Desktop\Proyecto Web Transporte\*" usuario@tu-servidor:/var/www/tetakawi-transport/

# O con rsync (más inteligente)
rsync -avz --delete "C:\Users\Suprime\Desktop\Proyecto Web Transporte/" usuario@tu-servidor:/var/www/tetakawi-transport/
```

### **Método 2: Git Pull (Automatizado)**
```bash
# En tu servidor Linux
cd /var/www/tetakawi-transport
git pull origin main

# Script de actualización automática
#!/bin/bash
cd /var/www/tetakawi-transport
git pull origin main
sudo systemctl reload nginx  # Si usas nginx
echo "✅ Sitio actualizado: $(date)"
```

## 🔒 **SEGURIDAD EXTRA EN TU SERVIDOR:**

### **Restricción por IP (si tienes IPs fijas):**
```nginx
# Solo plantas Tetakawi
location / {
    allow 192.168.1.0/24;    # Red BellaVista
    allow 192.168.2.0/24;    # Red RocaFuerte  
    allow 10.0.0.0/8;        # Red interna
    deny all;
    
    try_files $uri $uri/ /index.html;
}
```

## 📊 **WORKFLOW PERFECTO:**

### **Desarrollo local:**
1. **Editas** en tu computadora
2. **Pruebas** con `python -m http.server`
3. **Subes a GitHub** para backup
4. **Despliegas al servidor** con un comando

### **Script de despliegue automático:**
```bash
#!/bin/bash
# deploy.sh
echo "🚀 Desplegando a servidor Tetakawi..."

# Subir a GitHub
git add .
git commit -m "Actualización $(date '+%Y-%m-%d %H:%M')"
git push origin main

# Desplegar a servidor
ssh usuario@tu-servidor "cd /var/www/tetakawi-transport && git pull origin main"

echo "✅ Desplegado exitosamente!"
```

## 🎯 **VENTAJAS DE ESTA CONFIGURACIÓN:**

- ✅ **Servidor propio**: Máximo control y velocidad
- ✅ **GitHub backup**: Nunca pierdes información
- ✅ **Actualizaciones rápidas**: Un comando o SFTP
- ✅ **Red interna**: TI no puede objetar
- ✅ **Sin costos**: Usas infraestructura existente
- ✅ **Escalable**: Puedes agregar funcionalidades