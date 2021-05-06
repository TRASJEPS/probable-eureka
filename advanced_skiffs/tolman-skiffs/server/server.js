const express = require('express');
const app = express();
const cors = require('cors');
const port = 7777;

app.use(express.json());  //enables req and response function
app.use(express.urlencoded({ extended: true })); //this prevents ERRORS
app.use(cors());  //local host can talk with back end but postman will still work

// THIS IS THE QEUIVALENT OF PASTING CODE FROM THE FILE RIGHT THERE

require('./config/mongoose.config'); //THIS REQUIRE STATEMENT WILL COPTY 

require('./routes/skiffs.route')(app);  //GOES TO SKIFF ROUTES AND REQUIRES APP

app.listen(port, () => console.log(`ADVANCED SKIFF SET. Listening on port: ${port}`)); //runs and listens on the assigned port