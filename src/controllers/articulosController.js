const { response } = require("express");

const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from articulos', (err, articulos) => {
            if (err) {
                res.json(err);
            }
            res.render('articulos.ejs', {
                data: articulos
            });
        });
    });
};



controller.guardar = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into articulos set ?', [data], (err, articulo) => {
            console.log(articulo);
            res.redirect('/');
        });
    });
};

controller.editar = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query('select * from articulos where id = ?', [id], (err, articulo) => {
            console.log(articulo);
            res.render('editar-articulo', {

                data: articulo[0]
            });
        });
    });
};

controller.confirmar = (req, res) => {
    const id = req.params.id;
    const actualizar = req.body;

    req.getConnection((err, conn) => {
        conn.query('update articulos set ? where id = ?', [actualizar, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.borrar = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query('delete from articulos where id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};



module.exports = controller;