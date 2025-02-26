# Luxury Villas App

## Descripción del Proyecto
Luxury Villas App es una aplicación web dedicada al alquiler de casas de lujo. Este proyecto tiene como objetivo construir un pequeño framework utilizando Sass, que se utilizará para diseñar la interfaz de la aplicación.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

```
luxury-villas-app
├── src
│   ├── assets
│   │   ├── fonts              # Fuentes utilizadas en la aplicación
│   │   ├── images             # Imágenes utilizadas en la aplicación
│   │   └── styles             # Estilos de la aplicación
│   │       ├── base           # Estilos base
│   │       │   ├── _reset.scss # Estilos de reinicio
│   │       │   └── _typography.scss # Estilos tipográficos
│   │       ├── components      # Componentes de la interfaz
│   │       │   ├── _buttons.scss # Estilos para botones
│   │       │   ├── _cards.scss   # Estilos para tarjetas
│   │       │   ├── _footer.scss  # Estilos para el pie de página
│   │       │   ├── _header.scss  # Estilos para el encabezado
│   │       │   ├── _hero.scss    # Estilos para la sección hero
│   │       │   └── _navigation.scss # Estilos para el menú de navegación
│   │       ├── layout          # Estilos de diseño
│   │       │   ├── _grid.scss   # Sistema de cuadrícula
│   │       │   └── _container.scss # Estilos para el contenedor principal
│   │       ├── utils           # Utilidades de Sass
│   │       │   ├── _functions.scss # Funciones personalizadas
│   │       │   ├── _mixins.scss    # Mixins reutilizables
│   │       │   ├── _variables.scss  # Variables de estilo
│   │       │   └── _maps.scss       # Mapas de Sass
│   │       └── main.scss       # Punto de entrada principal para los estilos
│   ├── index.html              # Página principal de la aplicación
│   └── js
│       └── main.js             # Código JavaScript de la aplicación
├── gulpfile.js                 # Configuración de Gulp
├── package.json                # Configuración del proyecto para npm
├── README.md                   # Documentación del proyecto
└── sassdoc
    └── index.html              # Documentación generada por Sassdoc
```

## Instalación
1. Clona el repositorio:
   ```
   git clone <enlace-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```
   cd luxury-villas-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
Para iniciar el proyecto y compilar los estilos, utiliza Gulp:
```
gulp
```

## Documentación
La documentación del framework Sass utilizado en este proyecto se genera con Sassdoc y se encuentra en el directorio `sassdoc`.

## Accesibilidad y Usabilidad
El proyecto se ha desarrollado teniendo en cuenta pautas de accesibilidad y usabilidad, asegurando que todos los elementos sean visibles y legibles en todos los dispositivos.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.