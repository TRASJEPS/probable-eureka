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
      <h1>Star Wars API</h1>
      <h5>This person is fetched by clicking:</h5>
      <button onClick={getPerson}>Fetch Starwars Person in SLOT 1</button>
      <div>{ person.name }</div> 
      <h5>This person is automatically fetched:</h5>
      <div>{ personByUseEffect.name }</div> 
    </div>

  );
}

export default App;
