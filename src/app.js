const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myCon = require('express-myconnection');
const app = express();

// Importando rutas
const articulosRoutes = require('./routes/articulos');
const proveedoresRoutes = require('./routes/proveedores');
const { urlencoded } = require('body-parser');


// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// middlewares
app.use(morgan('dev'));
app.use(myCon(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'almacen',
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', articulosRoutes);
app.use('/proveedores', proveedoresRoutes);




// static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log('SErver en port 3000');
});