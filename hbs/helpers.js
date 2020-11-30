// 1. Importamos el constant para que el hbs pueda ser definido
const hbs = require('hbs');

// 2. Helpers

// Primer Helper
hbs.registerHelper('getAnio', () => {

    // retorna el año actualizado
    return new Date().getFullYear();
});

// Segundo Helper
hbs.registerHelper('formaLetra', (texto) => {

    // Se visualizará todas las primeras letras en mayúsculas y el resto en minúsculas

    // espació vacío que es un arreglo que contendra todas las palabras
    let palabras = texto.split(' ');

    // forEach nos ayuda actualizar la posición de las palabras
    palabras.forEach((palabra, posicion) => {

        // Actualizar la posición de la primera letra a Mayúscula (0) y el resto de palabras en minúsculas (1)
        palabras[posicion] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    // Juntamos todo el arreglo y lo separamos con un espacio
    return palabras.join(' ');

});

