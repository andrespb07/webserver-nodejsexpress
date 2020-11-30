// 1. Código copiado de la página: https://www.npmjs.com/package/express

const express = require('express');
// Declara una variable que es el producto de la función de express
const app = express();

// 5. importación de la librería obtenida: https://www.npmjs.com/package/hbs
const hbs = require('hbs');

// 7. importación de los helpers de la carpeta hbs
require('./hbs/helpers');

// 8 Definición del puerto para heroku y un operador OR para asiganción por defecto al puerto 3000
const port = process.env.PORT || 3000;

//--------------------------------------------------------------------------

//3. Middle ware para la carpeta "htmlpages"
// __dirname, es lel folder donde se aloja el archivo y sera estático, 'es el nombre de la carpeta de ese archivo'
app.use( express.static(__dirname + '/htmlpages'));

//6. librerría del hbs partials
hbs.registerPartials(__dirname + '/views/partials'); 
//4.Librería Express HBS
app.set('view engine', 'hbs');


// --------------------------------------------------------------------------------------------
// ------------------ 2. Response y Request del servidor -------------------------------------------------
// Estamos configurando una solicitud del método GET donde antes del "/" va la configuración
// del servidor y después del slash, sera la respuesta del servidor
// APP 1:
/*

app.get('/', (req, res) => {

  // respuesta del servidor
  res.send('Hola Mundo')
})
//  puerto 3000
app.listen(3000);
*/

// APP 2 Principal
/*
app.get('/', (req, res) => {

    // Mandar un objeto Json con un objeto
    let salida = {
        name: 'Andres',
        edad: 27,
        // petición solicitada por el cliente, es decir la ruta que podra direccionar "/"
        url: req.url
    }

    // respuesta del servidor
    res.send(salida);

  });

  // App 2.1 Ruta enlace /world
  app.get('/world', (req, res) => {

    // respuesta del servidor
    res.send('Hello World again !')
  })

  //  puerto 3000 con un callback para informar en consola un mensaje y se leveantara cuando el
  // app listen se levante
  app.listen(3000, () => {
      console.log('Escuchando peticiones en el puerto 3000');
  });

  */
 //--------------------------------------------------------------------------------------------------------
  // 2.3 Response y Request utilizando HBS
  app.get('/', (req, res) => {

    // renderiza el archivo home.hbs y a su vez los objetos que contienen {{}}
    res.render('home',{

      nombre: 'Andres',
      // actualiza el año de forma dinámica
    
    });

    /**Nota: el manejo de los hbs, en el html se identifican porque a la variable que le asignemos con lleva
     * dos llaves, ejemplo: {{cualquier cosa}}
     */

  });

  app.get('/about', (req, res) => {

    // renderiza el archivo home.hbs y a su vez los objetos que contienen {{}}
    res.render('about',{
      // actualiza el año de forma dinámica
      anio: new Date().getFullYear()
    });

  });



  // app listen se levante y ubicación del pueto localhost
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`);
});

/* 
   NOTA: Se debe tener en cuenta que cada actualización de la url:localhost:8080 en la pantalla de comando,
         se debe pausar con "ctrl+c" y volver a ejecutar con el comando "node.app"

   Respuesta del APP 1: Al cargar el localhost aparece un hola mundo, que es la respuesta del servidor
   Respuesta del APP 2: Al cargar el localhost aparece los elementos del JSON salida con la "URL 1"
   Respuesta del APP 2.1: Al cargar el localhost aparece un hello world, que es la respuesta del servidor
                          y podemos validarlo con el enlace http://localhost:3000/world

   "URL 1" :Podremos validar la url: http://localhost:3000/ en el navegador
   o en su defecto en postman agregando la misma url o agregando las rutas configuradas

   2-- Los HBS PArciales, son bloqies de código que nos permiten reutilizar el código html para eso 
   importamos la libreria como constante y lo ubicaremos en un folder llamado "partials" dentro de views

*/