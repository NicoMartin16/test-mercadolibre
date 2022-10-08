const express = require("express");
const cors = require("cors");
const itemsRoutes = require("../routes/items");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.itemsPath = "/api/items";

    this.middlewares();

    this.routes();
  }

  middlewares() {
    // Cors
    this.app.use(cors());
    // Parseo y lectura del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.itemsPath, itemsRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("El servidor corriendo en el puerto localhost", this.port);
    });
  }
}

module.exports = Server;
