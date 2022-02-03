const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

module.exports = function(){

    router.post('/kamuiproducts',        productsController.fileUpload, productsController.add); // Add a new Product
    router.get('/kamuiproducts',         productsController.list); // Show client list
    router.get('/kamuiproducts/:id',     productsController.show); //Get by id
    router.put('/kamuiproducts/:id',     productsController.fileUpload,productsController.update); //UPDATE product
    router.delete('/kamuiproducts/:id',  productsController.delete); //DELETE
    router.get('/kamuiproducts/search/:query',  productsController.search); //DELETE

    return router;
};