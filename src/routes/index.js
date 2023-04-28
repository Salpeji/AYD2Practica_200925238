const express = require('express');
const router = express.Router();

// rutas CRUD
router.post('/crearPelicula_ady2', (req, res) => {
    nombre = req.body.nombre;
    anioLanzar = req.body.anioLanzar;
    clasificacion = req.body.clasificacion;
    genero = req.body.genero;
    breveDescripcion = req.body.breveDescripcion;
    res.json({nombre});
    res.send("Hola --> crear --> ");
})

router.get('/verPeli_ady2', (req, res) => {
    res.send("Hola --> ver --> ");
})

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