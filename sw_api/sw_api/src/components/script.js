const noMondays = new Promise ((resolve, reject) => {
    if(new Date().getDay() !==1){
        resolve("Good its not a Monday!");
    } 
    else {
        reject("Someone has a case of the MONDAYS!!");
    }
});

noMondays
    .then( res => console.log(res)) //success RESOLVE
    .catch( err => console.log(err)); //failure REJECT

    //EXAMPLE OF SETTING UP A PROMISE!

    //THIS IS A PROMISE RESPONSE GOES TO URL
    // SETUP THE CATCH LIKE THE THEN AND CATCH 

    //EVERY THEN NEEDS A CATCH
fetch("https://swapi.dev/api/people/1/")
    //response comes from the fetch from the THEN
    .then((response) => {
        response.json()         //THIS CONVERTS DATA TO JSON
            .then((jsonresponse) => {
            console.log(jsonresponse);
            document.getElementById("root").innerHTML = `<div>${jsonResponse}</div>`;
            })
            .catch((jsonresponseerror) => {
                console.log(jsonresponseerror);
            })
        })
    .catch((error) => {
        console.log(error);
    })
    // THE RAW RESPONSE THAT COMES BACK FROM A REQ LIKE THIS IS  