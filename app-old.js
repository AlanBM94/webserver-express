const http = require('http');

http.createServer((req, res) => {

    res.write(200, {'Content-Type': 'application/json'});
    let persona = {
        nombre: 'Alan',
        edad: 23,
        profesion: 'Desarrollador Full Stack',
        url: req.url
    }
    res.send(persona);
    // res.write('Hola mundo desde un servidor');
    res.write(JSON.stringify(persona));
    res.end();
})

.listen(8080);

console.log('Escuchando en el puerto 8080');