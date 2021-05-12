// THIS IS THE Javascript Web Token
const javaWebToken = require("jsonwebtoken"); 

// THIS IS MIDDLEWARE and authorizes user
// THIS OCCURS BEFORE THIS IS PASSED ONTO THE CONTROLLER
module.exports = {
    authenticate( request, res, next) {
        // THE javaWebToken is what VERIFIES also called jwt w00t
        javaWebToken.verify(request.cookies.usertoken,
        process.env.JWT_SECRET,
        (err, payload) => {
            if (err){
                res.status(401).json({ verified:false });
            } 
            else {
                next();
            }
            
        });
    }
};
