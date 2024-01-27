const express = require("express");
const cors = require("cors");
//Instancia de Server para legibilizar mi app.js
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);

    this.paths = {};

    //Middlewares (funciones para añadir funcionalidades al webserver)
    this.middlewares();

    //Rutas de mi app
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth"));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
