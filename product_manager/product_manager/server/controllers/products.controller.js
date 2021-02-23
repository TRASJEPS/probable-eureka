const Product = require('../models/products.model');

module.exports = {
    getAll: (req,res) => {
        Product.find()   //FINDS EVERYTHING IN DATABASE THAT IS A SOLMAN SKIFF
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("error in getAll:" + err)
                res.json(err);  //THERE MUST BE A RESPONSE HERE OR IT WAITS INDEFINITELY
            })
    },

    create: (req,res) => {
        console.log(req.body);
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => { 
                console.log("error in create:" + err);
                res.json(err);
            })
    },

    getOne: (req,res) => {
        console.log(req.params.id);
        Product.findById(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => { 
                console.log("error in getOne:" + err);
                res.json(err);
            })
    },

    //USE UPDATE INSTEAD OF EDIT
    update: (req,res) => {
        console.log(req.params.id);
        console.log(req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((updatedProduct) => {
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) => { 
                console.log("error in update:" + err);
                res.json(err);
            })
    },

    delete: (req,res) => {
        console.log(req.params.id);
        Product.findByIdAndRemove(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((removedProduct) => {
                console.log(removedProduct);
                res.json(removedProduct);
            })
            .catch((err) => { 
                console.log("error in delete:" + err);
                res.json(err);
            })
    },
}