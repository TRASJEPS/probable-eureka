const TolmanSkiff = require('../models/skiffs.model');
// ADDED JWT
const jwt = require('jsonwebtoken');

module.exports = {
    getAll: (req,res) => {
        TolmanSkiff.find()   //FINDS EVERYTHING IN DATABASE THAT IS A SOLMAN SKIFF





            // YOU CAN ADD WHAT FIELDS TO SEARCH FOR AND LOOK AT.  FROM THE USER MODEL.  you can add "firstName", email etc
            .populate("createdByUser", "firstName")

            // you can add .populate to getOne too!

            //You can setup this POPULATE TO FILTER BY DIFFERENT METHODS

            .then((allSkiffs) => {
                console.log(allSkiffs);
                res.json(allSkiffs);
            })
            .catch((err) => {
                console.log("error in getAll:" + err)
                res.json(err);  //THERE MUST BE A RESPONSE HERE OR IT WAITS INDEFINITELY
            })
    },

    create: (req,res) => {
        console.log(req.body);
        // parseFloat(stockLength).toFixed(2).match(regex)
        // (req.body.stockLength = parseFloat(stockLength).toFixed(2) += 0.00)
        // (req.body.stockLength = parseFloat(stockLength).toFixed(2))
        // req.body.stockLength = parseFloat(stockLength).toFixed(2)
        // req.body.stockLength = parseFloat(stockLength).toFixed(2)

        //WIP HERE FOR AUTHO!!
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const userId = decodedJwt.payload.user_id;

        // CREATE THE NORMAL SKIFF OBJECT BY WHAT WAS PASSED IN
        const tolmanskiff = new TolmanSkiff(req.body);

        // NOW ADD THE NEW CREATEDBY key in object and give it the value of this users ID
        //  this will be store in our encoded COOKIE!
        tolmanskiff.createdBy = userId;

        TolmanSkiff.create(req.body)
            .then((newSkiff) => {
                console.log(newSkiff);
                res.json(newSkiff);
            })
            .catch((err) => { 
                console.log("error in create:" + err);
                res.json(err);
            })
    },

    getOne: (req,res) => {
        console.log(req.params.id);
        TolmanSkiff.findById(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((oneSkiff) => {
                console.log(oneSkiff);
                res.json(oneSkiff);
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
        TolmanSkiff.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((updatedSkiff) => {
                console.log(updatedSkiff);
                res.json(updatedSkiff);
            })
            .catch((err) => { 
                console.log("error in update:" + err);
                res.json(err);
            })
    },

    delete: (req,res) => {
        console.log(req.params.id);
        TolmanSkiff.findByIdAndRemove(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((removedSkiff) => {
                console.log(removedSkiff);
                res.json(removedSkiff);
            })
            .catch((err) => { 
                console.log("error in delete:" + err);
                res.json(err);
            })
    },
}