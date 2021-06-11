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

                console.log("Token was verified. Login successful.");
                console.log(payload);
                console.log(payload._id);
                console.log(payload.firstName, payload.firstName);
                next();
            }
            
        });
    }
};
