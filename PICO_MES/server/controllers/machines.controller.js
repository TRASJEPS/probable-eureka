const Machine = require('../models/machines.model');
const jwt = require('jsonwebtoken');

module.exports = {
    getAll: (req,res) => {
        Machine.find()   //FINDS EVERYTHING IN DATABASE THAT IS A SOLMAN SKIFF

            .populate("createdByUser", "firstName")
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
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
        const userId = decodedJwt.payload.user_id;
        const machine = new Machine(req.body);
        machine.createdBy = userId;
        Machine.create(req.body)
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
        Machine.findById(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((oneSkiff) => {
                console.log(oneSkiff);
                res.json(oneSkiff);
            })
            .catch((err) => { 
                console.log("error in getOne:" + err);
                res.json(err);
            })
    },

    update: (req,res) => {
        console.log(req.params.id);
        console.log(req.body);
        Machine.findByIdAndUpdate(req.params.id, req.body, {
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
        Machine.findByIdAndRemove(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
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