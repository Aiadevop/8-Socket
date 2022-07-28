const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {


    constructor() {
        //Creamos express como una propiedad en el servidor.
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}      

        //Middlewares (función que siempre se ejecuta al levantar nuestro servidor.)
        this.middlewares();

        //Rutas de mi aplicación.
        this.routes();

        //Sockets
        this.sockets();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //.use es la palabra clave para determinar que es un middleware.
        this.app.use(express.static('public'));

    }

    //Método con las rutas.
    routes() {

        //this.app.use(this.paths.auth, require('../routes/auth'));            

    }

    sockets(){
        
        this.io.on('connection',socketController)
    }

    //Puerto que escucha
    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }
}

module.exports = Server;