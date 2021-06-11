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

    // THIS WILL BE USED TO VALIDATE YOUR ACCOUNT AND SEND YOU important HOA updates
    // HURRR IS THIS RIGHT>>>>>>
    email: {    
        type: String,
        required: [true, "Please enter your email address."],
        validate:{
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),     //// DID I DO THIS RIGHT CHECK IT
                            //  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
                            //  /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)
                            // MY OLD, NEEDS TO BE FIXED (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+(?:\.[a-zA-Z]+)? $/.test(val))
            message: "Please enter a valid email address.",
        },
        unique: true,
        // minLength: [5, "Please enter a valid email address."],
    }, 


    // INCLUDE THE FRONT END PRETTY (strong, weak etc)
    password: {    
        type: String,
        required: [true, "You must make a password to keep your account secure."],
        minLength: [8, "Please enter a password that is at least 8 characters or longer."],
    }, 

    streetNumber: {   
        type: Number,
        required: [true, "Please enter your street number."], 
        minLength: [1, "Please enter the number of your street."],
    }, 

    streetName: {   
        type: String,
        required: [true, "Please enter the name of your street."], 
        minLength: [1, "Please enter your full street name."],
    }, 

    unit: {    
        type: String,
        required: [true, "Please enter your unique HOA unit."],
        minLength: [1, "Your unit must be at least one character."],
    },

    state: {    
        type: String,
        required: [true, "Please enter your state."],
        minLength: [2, "You must enter your state name or two character abbreviation."],
    },

    zipCode: {    
        type: Number,
        required: [true, "Please enter your zip code."],
        minLength: [5, "Please include the full zip code of your HOA."],
        maxLength: [9, "Your zip code cannot be longer than 9 numbers."]
    },

    employmentStartDate: {    
        type: Date,
        required: [true, "Please select the date you started working at the factory."], //shows user they must have a builder name
        min: ['1920-01-01', "Sorry you cannot finish a boat before the plans were created.  Please try again."],
        // max: [ new Date(), "You cannot say you are starting in the future."], //THIS PULLS THE CURRENT DATE.
    },

    // SETUP NPM
    pictureUrl: {
        type: String,
    }, 

    // Any additional details you would like to share?
    description: {    //CHANGE THIS TO OWNER FIRST NAME AND LAST NAME LATER
        type: String,
    }, 

}, { timestamps: true });

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set(value => (this._confirmPassword = value ));
UserSchema.pre("validate",function(next){
    if(this.password !== this.confirmPassword) 
    {this.invalidate("confirmPassword","Your passwords must match.");}
    next();
});
// BCRYPT FOR PASSWORD PROTECTION this saves it!
UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;