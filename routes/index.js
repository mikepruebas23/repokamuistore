const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

module.exports = function(){

    router.post('/products',        productsController.fileUpload, productsController.add); // Add a new Product
    router.get('/products',         productsController.list); // Show client list
    router.get('/products/:id',     productsController.show); //Get by id
    router.put('/products/:id',     productsController.fileUpload,productsController.update); //UPDATE product
    router.delete('/products/:id',  productsController.delete); //DELETE
    router.get('/products/search/:query',  productsController.search); //DELETE

    return router;
};