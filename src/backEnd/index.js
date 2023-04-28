const express = require('express');
const morgan = require('morgan');
const {json, urlencoded} = express;
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//importando ruotes
const rutasControlador = require('../routes/controlador.js')

//init
const app =  express();

//uso de json's
app.use(json());
app.use(urlencoded({ extended: false}));

//settings
app.set('port', process.env.PORT || 4000);

//Middlewarres
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    database:'pelicula',
    user: 'root', 
    password: 'Sam26',
    port: 3306
}, 'single'));

//Routes
app.use('/',rutasControlador);

//Public

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo ', app.get('port'));
});

