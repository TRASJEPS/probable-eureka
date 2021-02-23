const mongoose = require('mongoose'); //connect to mongoose lib
const db_name = "skiffs"; //NAME OF DATABASE

mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })  
    .then(() => console.log(`You are conneted to the PRODUCT MANAGER ${db_name} database!`))
    .catch((err) => console.log(`Error in connecting to PRODUCT MANAGER: ${db_name} database ${err}`));
    

