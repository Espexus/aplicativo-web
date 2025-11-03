const mysql = require("mysql12");
const conexion = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Jhve10.",
    database: "fit"
})

conexion.connect((err)=>{
    if(err){
        console.error("hay un error en la conxion a al base de datos ", err)
    }
    console.log("conectado exitosamente")
})

module.exports = conexion;