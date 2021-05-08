const User = require('../models/users.model');
// MAKE SURE TO LINK THE MODEL
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// MONGO DB compass 
// JSON and CSV

module.exports = {

    // THIS ALLOWS for SAVING all righin the register method
    register: (req, res) => {
        const user = new User(req.body);
        user
            if (user === null ) {
                // EMAIL IS NOT IN SYSTEM
                res.status(400).json({ msg: "Please enter your registered email address."})
            }
            
            .save()
            .then(() => {
                res.json({ msg: "Your new profile has been created.", user:user });
            })
            .catch(err => res.status(400).json(err));
    },
    // THIS ALLOWS FOR VALIDATION
    login: (req, res) => {
        User.findOne( {email: req.body.email} )
            .then(user => {
                // SET FLAG FOR FORGET PASSWORD and FIRST TIME LOGIN
                if (user === null ) {
                    // EMAIL IS NOT IN SYSTEM
                    res.status(400).json({ msg: "Please enter your registered email address or contact your HOA management company for access."})
                }
                else {
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then(validPassword) => {
                            if (validPassword) {
                                res
                                    .cookie("usertoken", jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                                    {
                                        httpOnly: true,
                                        // USER that has expired // CHANGE TO INACTIVITY // if (activity) then restart the clock 15-10MIN
                                        // expires: new Date(Date.now() + 99999),   // IF YOU WANT IT TO EXPIRE!  IN SECONDS
                                    })}
                        }
                }
            })



    },


    // NUKE ALL BELOW OR KEEP FOR LATER?
    getAll: (req,res) => {
        User.find()   //FINDS EVERYTHING IN DATABASE THAT IS A SOLMAN SKIFF
            .then((allUsers) => {
                console.log(allUsers);
                res.json(allUsers);
            })
            .catch((err) => {
                console.log("error in getAll:" + err)
                res.json(err);  //THERE MUST BE A RESPONSE HERE OR IT WAITS INDEFINITELY
            })
    },

// CREATE AN INVITATION FOR A USER TO JOIN - THIS CAN BE THE INTRO OR START TO SEND OFF EMAIL. 
// THIS WILLBE USED TO MAKE ALL USERS??

    create: (req,res) => {
        console.log(req.body);
        User.create(req.body)
            .then((newUser) => {
                console.log(newUser);
                res.json(newUser);
            })
            .catch((err) => { 
                console.log("error in create:" + err);
                res.json(err);
            })
    },

    getOne: (req,res) => {
        console.log(req.params.id);
        User.findById(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((oneUser) => {
                console.log(oneUser);
                res.json(oneUser);
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
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((updatedUser) => {
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch((err) => { 
                console.log("error in update:" + err);
                res.json(err);
            })
    },

    delete: (req,res) => {
        console.log(req.params.id);
        User.findByIdAndRemove(req.params.id)  //THIS IS IN THE assigned ID in the skiffs.ROUTE
            .then((removedUser) => {
                console.log(removedUser + "has been deleted from your database.");
                res.json(removedUser);
            })
            .catch((err) => { 
                console.log("error in delete:" + err);
                res.json(err);
            })
    },
}