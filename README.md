# Rick and Morty Character Explorer

Una aplicación Vue 3 + Vite que permite a los usuarios explorar personajes de la serie Rick and Morty.

## Características

- Listado de personajes con información detallada (nombre, estado, especie, origen, ubicación, imagen)
- Filtro por nombre
- Paginación para navegar entre múltiples páginas de resultados
- Diseño responsivo

## Tecnologías Utilizadas

- Vue 3
- Vite
- Pinia para gestión de estado
- Tailwind CSS para estilos
- Rick and Morty API para datos de personajes

## Cómo Empezar

1. Clona este repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd rick-and-morty
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Estructura del Proyecto

- **Componentes:**
  - `FilterByName.vue`: Componente de entrada de búsqueda por nombre
  - `FilterByStatus.vue`: Componente de filtro por estado
  - `ListCharacters.vue`: Componente de cuadrícula de tarjetas de personajes
  - `CardCharacter.vue`: Componente de tarjeta de personaje individual
  - `FooterPagination.vue`: Controles de paginación

## Uso de la API

La aplicación utiliza la API de Rick and Morty para obtener datos de personajes. La URL base de la API es `https://rickandmortyapi.com/api/character`. Los parámetros de consulta utilizados son: `name` para filtrar por nombre y `page` para la paginación.

## Gestión de Estado

El estado de la aplicación se gestiona utilizando Pinia. El estado incluye:
- `characters`: Lista de personajes obtenidos de la API
- `info`: Información de paginación obtenida de la API
- `name`: Nombre de búsqueda ingresado por el usuario
- `page`: Número de página actual

## Configuración Recomendada del IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y desactivar Vetur).

## Soporte de Tipos para Importaciones `.vue` en TypeScript

TypeScript no puede manejar la información de tipos para importaciones `.vue` de forma predeterminada, por lo que reemplazamos el comando `tsc` con `vue-tsc` para la verificación de tipos. En los editores, se necesita [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para que el servicio de lenguaje TypeScript reconozca los tipos de `.vue`.

## Personalización de Configuración

Consulta la [Referencia de Configuración de Vite](https://vite.dev/config/).

## Comandos Disponibles

### Instalación de dependencias
```sh
npm install
```

### Compilar y recargar en caliente para desarrollo
```sh
npm run dev
```

### Verificación de tipos, compilación y minificación para producción
```sh
npm run build
```

### Ejecutar pruebas unitarias con [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```

### Ejecutar pruebas End-to-End con [Cypress](https://www.cypress.io/)
```sh
npm run test:e2e:dev
```

Este comando ejecuta las pruebas End-to-End contra el servidor de desarrollo de Vite, lo que es mucho más rápido que probar la versión de producción. Sin embargo, se recomienda probar también la versión de producción con `test:e2e` antes de desplegar (por ejemplo, en entornos CI):

```sh
npm run build
npm run test:e2e
```

### Lint con [ESLint](https://eslint.org/)
```sh
npm run lint
```

### Formatear código con Prettier
```sh
npm run format
```

## Dependencias Principales

- **Vue 3**: Framework principal para la construcción de la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para el desarrollo de proyectos frontend.
- **Pinia**: Gestión de estado ligera y flexible.
- **Tailwind CSS**: Framework de utilidades CSS para estilizar la aplicación.
- **Cypress**: Framework para pruebas end-to-end.
- **Vitest**: Herramienta de pruebas unitarias para Vue y TypeScript.
- **ESLint & Prettier**: Herramientas para mantener un código limpio y formateado.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

