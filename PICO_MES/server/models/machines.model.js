const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

const MachinesSchema = new mongoose.Schema({
    machineName: {    
        type: String,
        required: [true, "Please enter the machine owner's name."], 
        minLength: [3, "Your owner name must be at least 3 characters long."],
    },
    machineModel: {    
        type: String,
        required: [true, "Please enter the machine's model."], 
        minLength: [1, "Your model name must be at least 3 characters long."],
    },
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

    machineType: {   
        type: String,
        required: [true, "Please select the type of machine this is."], 
        enum: ['CNC', '4 Axis', '5 Axis', 'Table Laser'],  
    },
    
    manufactureDate: {   
        type: Date,
        required: [true, "Please select the date this machine was produced."], 
        min: ['1990-01-01', "This piece of equipment cannot be more than 100 years old."],
        max: [ new Date(), "You cannot set this machines manufacture date in the future."], 
    },
    
    dateInstalled: {   
        type: Date,
        required: [true, "Please set the date this machine was installed and operational."], 
        min: ['1990-01-01', "Sorry you cannot finish a boat before the plans were created.  Please try again."],
        
    },

    machineInstalled: {
        type: Boolean,
        default: false,
    },

    machineCost: {
        type: Float,
        required: [true, "Please enter the cost in dollars and cents."],
        min: [250, "This machine will cost at least $250.00."],
    },

    yearlyServiceCost: {
        type: Float,
        required: [true, "Please enter the cost in dollars and cents."],
        min: [1000, "Yearly service will cost at least $1000."],
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