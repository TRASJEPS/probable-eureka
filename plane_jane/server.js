//made with standard naming convention

const express = require('express');
const app = express();  //app is object.  instance of express server.
const thePort = 9001;
const faker = require('faker');
const cors = require("cors");  //ADD THIS TO PREVENT THE SERVER FAIL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());  //ANNON FUNCTION ADDED TO COORS

//ANON function
// use the /api so you know if you are talking to BACKEND OR FRINT END
// all URLS on backend will have api

class User{
    constructor() {
        //STRUCTURE OF THIS.
        // this._id= 0;   //STANDARD NAMING CONVENTION FOR ID
        // ** ** ADD THE this.   parts
        this.name= faker.name.findName();  //THIS IS FIRST AND LAST NAME
        // this.name= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.email = faker.internet.email();
        this.phone = faker.phone.phoneNumber();
        this.job = faker.name.jobTitle();
        this.avatar = faker.internet.avatar();
        //MONGO ID includes part of the DATA created@ and updated@
        this._id = faker.random.uuid();

        //ADD MORE THIS IS SO COOL!!!!!!
        // HOW TO INTEGRATE!?!?!? 
    }
};


app.get("/api",(request, response,) => {
    const totallyRealName = faker.name.findName();
    // response.send("Hello! This is pretty sweet.");
    // response.send("Hello!") + totallyRealName + (", welcome to the server.");
    // response.send(" - - -");
    // response.send("Below is a totally legit person made from a CLASS.");
    const user = new User();

    //MAKE a user or two... 
    const userArray = [
        new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),new User(),
    ]

    // response.send(user);  //This just makes ONE user
    response.send(userArray);  //This is the user array

});

app.post("/api/", (req, res) => {
    console.log(req.body);
    console.log.json(req.body);
});

//app.listen(6789, () => console.log("The server is running on port: 6789"));
// SETUP THE PORT  
app.listen(thePort, () => console.log("This server is running on port: " + thePort + "... what!? " + thePort + "?! CODE. COOL. STUFF."));