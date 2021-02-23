//THIS IS THE VALIDATOR/MANAGER EQV
const mongoose = require('mongoose');

// TOLMAN SKIFFS
const ProductSchema = new mongoose.Schema({
    productName: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
        required: [true, "Please enter the name of the product."], //shows user they must have a user name
        minLength: [1, "The name of the product must be at least one character."],
    }, //SEPARATE BY COMMAS

    supplier: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
        required: [true, "Please enter the name of the vendor/supplier of this product."], //shows user they must have a builder name
        minLength: [1, "Your vendor/supplier name must be at least one character."],
    }, //SEPARATE BY COMMAS

    //STANDARD IS DEFAULT.
    productType: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
        required: [true, "Please select the product type."], //shows user they must have a builder name
        enum: ['Hardware', 'Food', 'Entertainment', 'Software','Furnature','Cloathing','Medicine','Chemicals','Electronics','Other'],  // Dont need "Please make a selection."
        //ENUM is short for enumeration.  YOU CAN SET IT LOWERCASE
        //IT ONLY ACCEPTS THESE VALUES, IT MATCHES PERFECTLY.  ITS CASE SENSITIVE.  
    }, //SEPARATE BY COMMAS
    
    //No later than today
    //No earlier than 1990
    // startDate: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
    //     type: Date,
    //     required: [true, "You must have a start date."], //shows user they must have a builder name
    //     min: ['1990-01-01', "Sorry you cannot build a boat before the plans were created.  Please try again."],
    //     max: [ new Date(), "You cannot say you are starting a date in the future."], //THIS PULLS THE CURRENT DATE.
    // }, //SEPARATE BY COMMAS
    
    // finishDate: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
    //     type: Date,
    //     required: [true, "You must have a start date."], //shows user they must have a builder name
    //     min: ['1990-01-01', "Sorry you cannot finish a boat before the plans were created.  Please try again."],
    //     max: [ new Date(), "You cannot say you are starting in the future."], //THIS PULLS THE CURRENT DATE.
    // }, //SEPARATE BY COMMAS

    // inStock: {
    //     type: Boolean,  //possibly add later?
    //     default: false,
    // },

    price: {
        type: Number,
        required: [true, "You must enter a price for this product."],
        min: [0.01, "Minimum price for an item is 1 penny or $0.01."],
        max: [999999999.99, "Maximum price is $999999999.99."],
    },

    description: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
    }, //SEPARATE BY COMMAS

}, { timestamps: true })   //THE TIMESTAMPS MAKES THE CREATED AND UPDATED AUTOMATICALLY

//THIS MAKES A COLLECTION THAT IS ALL LOWERCSE AND PLURAL BASED ON THIS STRING "Skiff"
module.exports = mongoose.model("Product", ProductSchema);   