const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// Conseguir el puerto en el que Heroku va a estar escuchando para mi app

const port = process.env.PORT || 3000;

//  Todas las peticiones que empiecen por el '/' van a ejecutar la función
// Se ejecuta siempre no importa la petición
app.use(express.static(__dirname + '/public'));
// Los parciales son pedazos de código html que se repiten en una página web
hbs.registerPartials(__dirname + '/views/parciales');

// Express HBS engine
app.set('view engine', 'hbs');


// Hace una petición
app.get('/', (req, res) => {
    // Para que cambie dinamicamente estos valores
    res.render('home', {
        nombre: 'alaN beltráN'
    });
    
});

app.get('/about', (req, res) => {    
    // Para que cambie dinamicamente estos valores
    res.render('about');

});

// app.get('/data', (req, res) => {
//   res.send('Hola data')
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`);
})