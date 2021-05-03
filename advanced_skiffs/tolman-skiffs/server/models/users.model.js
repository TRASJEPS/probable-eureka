const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({

    firstName: {    
        type: String,
        required: [true, "Please enter your first name."],
        minLength: [2, "Your name must be at least 2 characters long."],
    },
    lastName: {    
        type: String,
        required: [true, "Please enter your last name."],
        minLength: [2, "Your last name must be at least 2 characters long."],
    }, 

    email: {    
        type: String,
        required: [true, "Please enter your email address."],
        minLength: [5, "Please enter a valid email address."],
    }, //SEPARATE BY COMMAS

    // INCLUDE THE FRONT END PRETTY (strong, weak etc)
    password: {    
        type: String,
        required: [true, "A password is required."],
        minLength: [8, "Please enter a password that is at least 8 characters or longer."],
    }, //SEPARATE BY COMMAS

    // AUTOFILL based on link(s)
    associatedHOAs: {    
        type: Array,
        required: [true, "Please select the date you began living in your home."], //shows user they must have a builder name
        min: [1, "Sorry you cannot finish a boat before the plans were created.  Please try again."],
        // max: [ new Date(), "You cannot say you are starting in the future."], //THIS PULLS THE CURRENT DATE.
    },

    streetAddress: {   
        type: String,
        required: [true, "Please enter your street address."], //shows user they must have a builder name
        minLength: [6, "Please enter your full streed address, include the street number and name."],
    }, 
    
    // THIS CAN BE CUSTOMIZED LATER TO SPECIFICALLY NUMBERS or LETTERS set TYPE
    // can be set in description or under type / string / number etc
    unit: {    
        type: String,
        required: [true, "Please enter your unique HOA unit."],
        minLength: [1, "Your unit must be at least one character."],
    },

    // MAKE ENUM?????
    // SET TO AUTO FILL
    state: {    
        type: String,
        required: [true, "Please enter your state."],
        minLength: [2, "You must enter your state name or two character abbreviation."],
    }, //SEPARATE BY COMMAS

    // SET TO AUTO FILL
    zipCode: {    
        type: Number,
        required: [true, "Please enter your zip code."],
        minLength: [5, "Please include the full zip code of your HOA."],
    },

    residentSince: {    
        type: Date,
        required: [true, "Please select the date you began living in your home."], //shows user they must have a builder name
        min: ['1920-01-01', "Sorry you cannot finish a boat before the plans were created.  Please try again."],
        // max: [ new Date(), "You cannot say you are starting in the future."], //THIS PULLS THE CURRENT DATE.
    },

    userTotalVehicles: {
        type: Number,
        max: [30, "The maximum number of vehicles is 30 per owner."],
    },

    // SETUP NPM
    pictureUrl: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
    }, 

    // Any additional details you would like to share?
    description: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
    }, 

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;