
# Mercadolibre Frontend Challenge

Proyecto creado con ViteJS ⚡




## Stack de tecnologias

**Client:** Typescript, React, Redux, SASS, Axios, Cypress



## Iniciar localmente

Clonar el proyecto

```bash
  git clone https://github.com/fmruiz/mercadolibre-frontend-challenge.git
```

Ir al directorio del proyecto

```bash
  cd mercadolibre-frontend-challenge
```

Instalar dependencias

```bash
  yarn install
```

Iniciar proyecto en modo desarrollo

```bash
  yarn dev
```

## Componentes

Los principales componentes son 3: ```SearchBar```, ```ProductList``` y ```ProductDetails```.

- ```SearchBar```: Componente que muestra una barra de busqueda donde el usuario ingresara el producto que quiera buscar, ese texto se guardara en un estado y al hacer click en el boton de busqueda se disparara una accion al redux para realizar una peticion GET a la API sobre el producto guardado en el estado.

- ```ProductList```: Componente que muestra una lista de productos, este componente se renderiza una vez se dispara la accion en el componente ```SearchBar```, si hacemos click en algun item de la lista se disparara una accion al redux para hacer una peticion GET a un endpoint donde se filtrara por ID y esto nos llevara al componente ```ProductDetails```

- ```ProductDetails```: Componente que renderiza un producto en especifico con su descripcion sobre el producto, precio, imagen, etc.


## Common

En la carpeta ```common``` nos encontramos componentes y utilidades que se compartiran y reutilizaran entre varios componentes:

- ```components```: En components nos encontramos con 3 componentes que seran compartidos como por ejemplo ```BreadCrumb```, ```Loading``` y ```NotResultsFound```.

    - ```BreadCrumb```: Componente que muestra el path-from-root, camino del usuario desde la pagina principal hasta el producto seleccionado.

    - ```Loading```: Componente que se utiliza para el fallback que se realiza utilizando React Lazy para las rutas dinamicas.

    - ```NotResultsFound```: Componente que se renderiza si es que hay un fallo en la busqueda del producto.

- ```utils```: En Utils nos encontramos actualmente con una funcion llamada ```priceBuilder```.
    
    - ```priceBuilder```: Funcion que agrega un punto cada 3 digitos en los precios de los productos.


## Estilos

Para los estilos se utilizo puramente SASS, lo cual agilizo demasiado para el estilado de componentes por las virtudes mismas de la herramienta para la creacion de ```mixins```, ```variables```, etc. Tenemos dos carpetas ```abstracts``` y ```base```:

- ```abstracts```: En esta carpeta guardamos archivos scss que se reutilizara en diferentes estilos, ejemplo ```mixins``` y ```variables```.

- ```base```: En esta carpeta estaran los archivos sass que agregaran los estilos iniciales del proyecto.

## Metodologia BEM

Para los classNames utilizados en los componentes se utilizo ```Metodologia BEM``` para identificar cada ```Bloque```, ```Elemento``` y ```Modificador```.

## Tipos

En la carpeta ```types``` estaran los tipos sobre la data de los productos y sobre un producto en especifico, estos tipos estaran comprobando como tiene que llegar la data desde la ```API``` y como se debe guardar en la store de redux.

## Tests

Para correr los tests con cypress, debes usar este comando

```bash
  yarn cypress:open
```

## Autor

- [@fmruiz](https://github.com/fmruiz)

