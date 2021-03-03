# Pokédex

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Resumen
El proyecto fue muy entretenido, aunque aparentemente se vea muy sencillo siempre salen algunos problemas a la hora de configurar el proyecto como alguna incompatibilidad entre plugins.

Para el proyecto utilize las siguientes librerias o plugins:
-  Vuetify: Decidí utilizar los componentes de vuetify para así ahorrar tiempo en en el maquetado y en múltiples funcionalidades
  
-  Vue-Router: Para el manejo de las rutas es indispensable contar con esta librería
  
-  Axios: Decidí utilizar axios para consumir el API, es muy fácil de usar e intuitivo

-  string-similarity: Esta librería me ayudó a poder realizar la búsqueda de un pokemon en el listado, en este caso la librería hace una comparación y devuelve un valor entero que indica la similitud entre los dos strings, por lo que si un usuario escribe mal el nombre del pokemon, entonces trataré de mostrarle alguno que se asemeje

### Demo:
- https://josuedor.github.io/v-poke-list-global66/