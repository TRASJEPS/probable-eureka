// THIS IS THE Javascript Web Token
const javaWebToken = require("jsonwebtoken"); 

module.exports = {
    authenticate( request, res, next) {
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
