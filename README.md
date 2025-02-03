# Rick and Morty Character Explorer

Una aplicación Vue 3 + Vite que permite a los usuarios explorar personajes de la serie Rick and Morty.

## Características

- Listado de personajes con información detallada (nombre, estado, especie,  origen, ubicación, imagen)
- Filtro por nombre
- Paginación para navegar entre múltiples páginas de resultados
- Diseño responsivo

## Tecnologías Utilizadas

- Vue 3
- Vite
- Pinia para gestión de estado
- Rick and Morty API para datos de personajes

## Cómo Empezar

1. Clona este repositorio:
```npm install```
2. Instala las dependencias:
```npm run dev```
3. Inicia el servidor de desarrollo:
```npm run build```

## Estructura del Proyecto

- Componentes:
  - `FilterByName.vue`: Componente de entrada de búsqueda
  - `ListCharacters.vue`: Componente de cuadrícula de tarjetas de personajes
  - `CardCharacter.vue`: Componente de tarjeta de personaje individual
  - `Pagination.vue`: Controles de paginación

## Uso de la API

La aplicación utiliza la API de Rick and Morty para obtener datos de personajes. La URL base de la API es `https://rickandmortyapi.com/api/character`. Los parámetros de consulta utilizados son: `name` para filtrar por nombre y `page` para la paginación.

## Gestión de Estado

El estado de la aplicación se gestiona utilizando Pinia. El estado incluye:
- `characters`: Lista de personajes obtenidos de la API
- `info`: Información de paginación obtenida de la API
- `name`: Nombre de búsqueda ingresado por el usuario
- `page`: Número de página actual

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia


Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
