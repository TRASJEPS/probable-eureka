import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  
  const [ person, setPerson ] = useState({});
  const [ personByUseEffect, setPersonByUseEffect ] = useState({});

  const getPerson = () => {
  
    // USE EFFECT ONLY RUNS ONCE
    // useEffect(() => {
    //   fetch("https://swapi.dev/api/people/2/")
    //   //response comes from the fetch from the THEN
    //   .then((response) => {
    //       response.json()         //THIS CONVERTS DATA TO JSON
    //           .then((jsonresponse) => {
    //           console.log(jsonresponse);
    //           // document.getElementById("root").innerHTML = `<div>${jsonResponse}</div>`;
    //           setPerson(jsonresponse);
    //           })
    //           .catch((jsonresponseerror) => {
    //               console.log(jsonresponseerror);
    //           })
    //       })
    //   .catch((error) => {
    //       console.log(error);
    //   })
    // ),}

  fetch("https://swapi.dev/api/people/1/")
    //response comes from the fetch from the THEN
    .then((response) => {
        response.json()         //THIS CONVERTS DATA TO JSON
            .then((jsonresponse) => {
            console.log(jsonresponse);
            // document.getElementById("root").innerHTML = `<div>${jsonResponse}</div>`;
            setPerson(jsonresponse);
            })
            .catch((jsonresponseerror) => {
                console.log(jsonresponseerror);
            })
        })
    .catch((error) => {
        console.log(error);
    })
    // THE RAW RESPONSE THAT COMES BACK FROM A REQ LIKE THIS IS  
  }

  // const getPersonUseEffect = () => {
    // USE EFFECT ONLY RUNS ONCE
      useEffect(() => {
        fetch("https://swapi.dev/api/people/2/")
        //response comes from the fetch from the THEN
        .then((response) => {
            response.json()         //THIS CONVERTS DATA TO JSON
                .then((jsonresponse) => {
                console.log(jsonresponse);
                // document.getElementById("root").innerHTML = `<div>${jsonResponse}</div>`;
                setPersonByUseEffect(jsonresponse);
                })
                .catch((jsonresponseerror) => {
                    console.log(jsonresponseerror);
                })
            })
        .catch((error) => {
            console.log(error);
        })
    },[]);

  return (
    
    <div className="App">
      <h1>Pokémon API</h1>
      <h5>There are too many of them!</h5>
      
      
    </div>
 
  );
}

export default App;
