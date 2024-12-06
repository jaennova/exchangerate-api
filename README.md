# Exchange Rate Calculator

Una aplicación web que permite a los usuarios convertir montos entre diferentes divisas utilizando las tasas de cambio en tiempo real proporcionadas por ExchangeRate-API.

## Características Actuales

- Conversión en tiempo real entre múltiples monedas
- Interfaz intuitiva y fácil de usar
- Función de intercambio rápido entre monedas
- Soporte para 14 monedas principales
- Actualización automática de tasas

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- ExchangeRate-API

## Instalación

1. Clona este repositorio
```bash
git clone https://github.com/jaennova/exchangerate-api.git
```

2. Abre el archivo `index.html` en tu navegador

## Uso

1. Selecciona la moneda de origen
2. Ingresa el monto a convertir
3. Selecciona la moneda de destino
4. La conversión se realizará automáticamente

## Propuestas de Mejoras

### Funcionalidad
- [ ] Implementar almacenamiento local para guardar las últimas conversiones
- [ ] Agregar más divisas al convertidor
- [ ] Implementar un historial de conversiones
- [ ] Añadir gráficos de tendencias de tipos de cambio
- [ ] Implementar un sistema de alertas para tipos de cambio específicos
- [ ] Mejorar el manejo de errores y mostrar mensajes al usuario
- [ ] Añadir modo offline usando Service Workers
- [ ] Implementar caché de tasas de cambio para optimizar llamadas a la API

### UI/UX
- [ ] Añadir modo oscuro
- [ ] Implementar diseño responsive más robusto
- [ ] Mejorar la accesibilidad (ARIA labels, contraste de colores)
- [ ] Añadir animaciones para mejorar la experiencia de usuario
- [ ] Implementar un loader mientras se obtienen los datos
- [ ] Añadir tooltips informativos
- [ ] Mejorar el diseño mobile-first

### Rendimiento
- [ ] Optimizar las llamadas a la API
- [ ] Implementar lazy loading para recursos
- [ ] Minificar archivos CSS y JavaScript
- [ ] Optimizar imágenes y recursos
- [ ] Implementar PWA (Progressive Web App)

### Seguridad
- [ ] Proteger la API key usando variables de entorno
- [ ] Implementar validación de datos de entrada
- [ ] Añadir protección contra XSS
- [ ] Implementar rate limiting para las llamadas a la API

### Testing
- [ ] Añadir tests unitarios
- [ ] Implementar tests de integración
- [ ] Añadir tests de UI
- [ ] Implementar CI/CD

## Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios
4. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request
