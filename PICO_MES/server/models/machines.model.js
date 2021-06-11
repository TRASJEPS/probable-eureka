const mongoose = require('mongoose');

var Float = require('mongoose-float').loadType(mongoose);

const MachinesSchema = new mongoose.Schema({
    ownerName: {    
        type: String,
        required: [true, "Please enter the owner's name."], 
        minLength: [3, "Your owner name must be at least 3 characters long."],
    },

    builderName: {   
        type: String,
        required: [true, "Please enter a builder name."], 
        minLength: [3, "Your builder name must be at least 3 characters long."],
    },

    modelName: {   
        type: String,
        required: [true, "Please select a model name."], 
        enum: ['Standard', 'Wide Body', 'Jumbo', 'Flat Bottom'],  
    },
    
    startDate: {   
        type: Date,
        required: [true, "Please set a a start date."], 
        min: ['1990-01-01', "Sorry you cannot build a boat before the plans were created.  Please try again."],
        max: [ new Date(), "You cannot say you are starting a date in the future."], 
    },
    
    finishDate: {   
        type: Date,
        required: [true, "Please set a finish date."], 
        min: ['1990-01-01', "Sorry you cannot finish a boat before the plans were created.  Please try again."],
        
    },

    buildComplete: {
        type: Boolean,
        default: false,
    },

    machineCost: {
        type: Float,
        required: [true, "Please enter the cost in dollars and cents."],
        min: [1, "This machine will cost at least $1.00."],
    },

    totalMachines: {
        type: Float,
        required: [true, "Please enter the total machine."],
        min: [1, "Minimum length for a Tolman skiff must be at least 15 feet."],
        max: [350, "Maximum length for a Tolman skiff is 30 feet."],
    },

    machinePhoto: {   
        type: String,
    },

    description: {   
        type: String,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },


}, { timestamps: true })   //THE TIMESTAMPS MAKES THE CREATED AND UPDATED AUTOMATICALLY

//THIS MAKES A COLLECTION THAT IS ALL LOWERCSE AND PLURAL BASED ON THIS STRING "Skiff"
module.exports = mongoose.model("Machine", MachinesSchema);   