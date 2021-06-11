const express = require('express');
const app = express();
const cors = require('cors');
const port = 4001;  // BACKEND

app.use(express.json());  //enables req and response function
app.use(express.urlencoded({ extended: true })); //this prevents ERRORS
app.use(cors());  //local host can talk with back end but postman will still work
require('./config/mongoose.config'); 
require('./routes/machines.route')(app);  
// require('./routes/users.route')(app);

app.listen(port, () => console.log(`PICO MES Machines Demo. Listening on port: ${port}`)); //runs and listens on the assigned port