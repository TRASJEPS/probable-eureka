const mongoose = require('mongoose');
const db_name = "machines";

mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })  
    .then(() => console.log(`You are conneted to the PICO MES Demo ${db_name} database!`))
    .catch((err) => console.log(`error in connecting: ${db_name} database ${err}`));