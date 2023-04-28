var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'localhost',
    database:'pelicula',
    user: 'root', 
    password: 'Sam26'
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log(' ---> .. Conexion Exitosa a MYSQL .. <----');
    }
});


conexion.query('SELECT * FROM pelicula', function(error,results, fields){
    if(error)
        throw error;
        results.forEach(results => {
            console.log(results);
        });
})


conexion.end();