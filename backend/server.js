const express = require("express");
const cors = require("cors");
const db = require("./conexion.js");

const app = express();
app.use(cors());
app.use(express.json());

// aquí ahorita vamos a colocar todas las consultas y demás a la base de datos, pero primero voy a ponerme a maquetar la idea de la pagina para ver que consultas hará y las usaré con procedimientos almacenados, al menos las de post y update.


app.listen(3000, ()=> {
    console.log("el servidor está corriendo en el puerto 3000 http://localhost:3000");
})