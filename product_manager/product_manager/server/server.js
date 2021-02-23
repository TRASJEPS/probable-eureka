const express = require('express');
const app = express();
const cors = require('cors');
const port = 5555;

app.use(express.json());  //enables req and response function
app.use(express.urlencoded({ extended: true })); //this prevents ERRORS
app.use(cors());  //local host can talk with back end but postman will still work

require('./config/mongoose.config'); //THIS REQUIRE STATEMENT WILL COPTY 

require('./routes/products.route')(app);  //GOES TO product_manager ROUTES AND REQUIRES APP

app.listen(port, () => console.log(`PRODUCT MANAGER Listening on port: ${port}`)); //runs and listens on the assigned port