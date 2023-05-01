const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { application, response } = require('express');

//const scriptData = require('../backEnd/database.js');
//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser.json());

// crear
router.post('/crearPelicula_ady2', (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query(`INSERT INTO pelicula (nombre,aniolanzamiento,clasificacion,genero,brevedescripcion) VALUES('${req.body.nombre}','${req.body.aniolanzamiento}','${req.body.clasificacion}','${req.body.genero}','${req.body.breveDescripcion}')`, (err, pelicula)=>{
            if(err){
                return res.send(err);
            }
            res.json({"mensaje":"exito se inserto correctamente"});
        }) 
     })
})

//ver todas la peliculas
router.get('/verPeli_ady2', (req, res) => {
    var pelicula;
    //res.json({scriptData});
    req.getConnection((err, conn)=>{
       conn.query('SELECT * FROM pelicula', (err, pelicula)=>{
           if(err){
               return res.send(err);
           }
            console.log(pelicula);
            res.json(pelicula);
       }) 
    })
});

//actualizar
router.patch('/actualizarPeli_ady2', (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('update pelicula set ' + req.body.nombreTupla + ' = ' + "\"" +req.body.regCambio+ "\""  + ' where idPeli = ' + req.body.idPeli, (err, pelicula)=>{
            if(err){
                return res.send(err);
            }
            console.log(req.body.valCambio);
            res.json({"mensaje":"Exito, Se actualizo registro " + req.body.nombreTupla + " de IdPelicula " + req.body.idPeli + " correctamente"});
        })
     })
})



//eliminar
router.delete('/eliminarPeli_ady2', (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('delete from pelicula.pelicula where pelicula.pelicula.idPeli = ' + req.body.idPeli, (err, pelicula)=>{
            if(err){
                return res.send(err);
            }
            console.log(req.body.idPeli);
            res.json({"mensaje":"exito se elimino " + req.body.idPeli + " correctamente"});
        })
     })
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