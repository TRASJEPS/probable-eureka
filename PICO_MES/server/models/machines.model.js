const mongoose = require('mongoose');

var Float = require('mongoose-float').loadType(mongoose);

const MachinesSchema = new mongoose.Schema({
    ownerName: {    
        type: String,
        required: [true, "Please enter the machine owner's name."], 
        minLength: [3, "Your owner name must be at least 3 characters long."],
    },

    manufactureName: {   
        type: String,
        required: [true, "Please enter a brand or maker of the machine."], 
        minLength: [3, "Your builder name must be at least 3 characters long."],
    },

    modelName: {   
        type: String,
        required: [true, "Please select a model name."], 
        enum: ['Standard', 'Wide Body', 'Jumbo', 'Flat Bottom'],  
    },
    
    manufactureDate: {   
        type: Date,
        required: [true, "Please set a a start date."], 
        min: ['1990-01-01', "Sorry you cannot build a boat before the plans were created.  Please try again."],
        max: [ new Date(), "You cannot say you are starting a date in the future."], 
    },
    
    dateInstalled: {   
        type: Date,
        required: [true, "Please set a finish date."], 
        min: ['1990-01-01', "Sorry you cannot finish a boat before the plans were created.  Please try again."],
        
    },

    machineInstalled: {
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
        required: [true, "Please enter the total quantity of these machines."],
        min: [1, "You must have at least one of these machines."],
        max: [9999, "You can currently only support 9999 of these machines."],
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

}, { timestamps: true })   

module.exports = mongoose.model("Machine", MachinesSchema);   