const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/producto', (req, res) => {
   respuesta  
    })




// Deberá hacer aquí el método post para producto (Valor 5 puntos)
app.post('/producto', (req, res) => {
    let body = req.body;

let producto = new producto ({
    nombre: body.nombre,
    precio: body.precio,
    creando_en: body.creando_en
   })
});
