//1. Creación del http web server
const http = require('http');

// 2. Creación del servidor
// tendra un callback


// Callback 1:
/*
http.createServer((req,res) => {

    // respuesta del servidor
    res.write('Hola Mundo');
    // terminar la respuesta servidor
    res.end();

})
// puerto
.listen(8080);
*/

//Callback 2: la respuesta sera devuelta en formato JSON

http.createServer((req,res) => {

    // Regresar un Json como servicio
    res.writeHead(200, {'Content-Type':'application/json'});

    // Mandar un objeto Json con un objeto
    let salida = {
        name: 'Andres',
        edad: 27,
        // petición solicitada por el cliente, es decir la ruta que podra direccionar "/"
        url: req.url
    }

    // respuesta del servidor
    res.write(JSON.stringify(salida));

    // terminar la respuesta servidor
    res.end();

})
// puerto
.listen(8080);

// Respuesta en consola
console.log('Escuchando el puerto 8080');

/* 
   NOTA: Se debe tener en cuenta que cada actualización de la url:localhost:8080 en la pantalla de comando,
         se debe pausar con "ctrl+c" y volver a ejecutar con el comando "node.app"

   Respuesta salida callback 1: Al cargar el localhost aparece un hola mundo, que es la respuesta del servidor
   Respuesta salida callback 2: Respuesta en forma JSON {"name":"Andres","edad":27,"url":"/"}

   Podremos validar la url: http://localhost:8080/
   o en su defecto en postman agregando la misma url
*/