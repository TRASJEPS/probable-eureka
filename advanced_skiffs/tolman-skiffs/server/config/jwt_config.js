// THIS IS THE Javascript Web Token

// MIDDLEWARE > THE VERIFIER / THE TOKEN
const javaWebToken = require("jsonwebtoken"); 

//  Payload containing 

// THIS IS MIDDLEWARE and authorizes user
// THIS OCCURS BEFORE THIS IS PASSED ONTO THE CONTROLLER
module.exports = {
    authenticate( request, res, next) {
        // THE javaWebToken is what VERIFIES also called jwt w00t
        javaWebToken.verify(request.cookies.usertoken,
            // decode usertoken and MAKE SURE IT IS VALID 
        process.env.JWT_SECRET,     //THIS IS THE SECRET KEY, it can be called anything
        (err, payload) => {
            if (err){   // 401 is UNAUTHORIZED response, this occurs if check is not passed with correct key
                res.status(401).json({ verified:false });
            } 
            // PAYLOAD IS EMPLIMENTED HERE
            else {      


                console.log("token was verified. login successful");
                
                console.log(payload);
                // THIS IS STORED IN PAYLOAD!  THIS USER INFO IS CONFIRMED THROUGH IT AND IT CAN BE CONTAINED HERE
                console.log(payload._id);
                console.log(payload.firstName, payload.firstName);

                // ADD ASSOCIATED HOA
                // ADD THE ROLE
                // console.log(payload. 8888888  )


                //  ADD things from payload to the request object!  
                // USER ID will already be decoded and can be stuffed 
                //  into the request.

                // IF VALID YOU GO TO THE NEXT PAGE
                // AFTER NEXT ITS GONE!!!!
                next();
            }
            
        });
    }
};
