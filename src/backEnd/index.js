const express = require('express');
const morgan = require('morgan');
const {json, urlencoded} = express;

//init
const app =  express();

//uso de json's
app.use(json());
app.use(urlencoded({ extended: false}));

//settings
app.set('port', process.env.PORT || 4000);

//Middlewarres
app.use(morgan('dev'));

//Global Variables


//Routes
app.use(require('../routes'));

//Public

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo ', app.get('port'));
});

