const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { application, response } = require('express');

//const scriptData = require('../backEnd/database.js');
//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser.json());

// rutas CRUD
router.post('/crearPelicula_ady2', (req, res) => {
    /*nombre = req.body.nombre;
    anioLanzar = req.body.anioLanzar;
    clasificacion = req.body.clasificacion;
    genero = req.body.genero;
    breveDescripcion = req.body.breveDescripcion;
    let dtoPeliculaNueva = req.body;*/
    req.getConnection((err, conn)=>{
        conn.query(`INSERT INTO pelicula (nombre,aniolanzamiento,clasificacion,genero,brevedescripcion) VALUES('${req.body.nombre}','${req.body.aniolanzamiento}','${req.body.clasificacion}','${req.body.genero}','${req.body.breveDescripcion}')`, (err, pelicula)=>{
            if(err){
                return res.send(err);
            }
            res.json({"mensaje":"exito se inserto correctamente"});
        }) 
     })
})

router.get('/verPeli_ady2', (req, res) => {
    var pelicula;
    //res.json({scriptData});
    req.getConnection((err, conn)=>{
       conn.query('SELECT * FROM pelicula', (err, pelicula)=>{
           if(err){
               return res.send(err);
           }
            //req.json({pelicula});
            console.log(pelicula);
            res.json(pelicula);
       }) 
    })
});

router.get('/actualizarPeli_ady2', (req, res) => {
    res.send("Hola --> actualiza --> ");
})

router.get('/eliminarPeli_ady2', (req, res) => {
    res.send("Hola --> elimina --> ");
})

router.get('/nombre', (req,res) => {
    nombre = req.body.nombre;
    res.json({nombre})
    res.send("My Student ...<--");
})

router.get('/carnet', (req,res) => {
    carnet = req.body.carnet;
    res.json({carnet});
    res.send("Mi carnet de estudiante...<--");
})

module.exports = router;