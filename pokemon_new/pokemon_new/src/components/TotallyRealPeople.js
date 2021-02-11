import React, {useState, useEffect} from 'react';
import axios from 'axios';

function People() {
    const [ peopleCount, setPeopleCount ] = useState(0);
    const [ people, setPeople ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9001/api")  //GOES TO LOCAL SITE
            .then((response) => {
                console.log(response);
                setPeople(response.data);
            })
            .catch((error) => {
            console.log(error);
        })
    }, []);

    // useEffect(() => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon")
    //     .then((response) => {
    //         console.log(response);
    //         setPeopleCount(response.data.count);
    //         console.log(response.count);
    //     })
    //     .catch((error) => {
    //     console.log(error);
    //     })
    // }, []);

    const peopleContainer = 
    {
        border: "2px solid darkblue",
        borderRadius: "20px",
        display: "inline-block",
        width: "30%",
        margin: "10px",
        fontWeight: "bold",
        //textAlign: "left",
        background: "white",
    }
    const pokeball = 
    {
        border: "3px solid black",
        borderRadius: "50px",
        display: "inline-block",
        width: "50px",
        height: "50px",
        marginTop: "20px",
        fontWeight: "bold",
        padding: "20px",
        //textAlign: "left",
        background: "linear-gradient(red 50%, white 50%)"
    }
    const pokeballButton = 
    {
        display: "inline-block",
        border: "4px solid black",
        borderRadius: "50px",
        width: "15px",
        height: "15px",
        marginTop: "27%",
        background: "white"
    }

    return (
        <div className= "App">
            <div style={pokeball}>
                {/* <center><div style={middleLine}></div></center> */}
                <center><div style={pokeballButton}>
                    
                </div></center>
            </div>
            <h2>Totally Real People.</h2>
            <h5>That definitely exist, really they do.</h5>
            {/* <h4>Total Pokemon: {pokemonCount}</h4> */}
            {
                //people is an array OF OBJECTS
                //map gives a *single element* that is a FULL OBJECT
                //automatic FOR LOOP, 0,1,2,3,4,5,6,7...
                //GRABS THE ENTIRE OBJECT ONE AT A TIME
                people.map((personObj, index) => (
                <div style={peopleContainer} key = {index}>
                    <p>Name: {personObj.name}</p>
                    <p>Last Name: {personObj.lastName}</p>
                    <p>Email Address: {personObj.email}</p>
                    <p>Phone Number: {personObj.phone}</p>
                    <p>Job: {personObj.job}</p>
                    <div>
                    <img src={personObj.avatar}></img>
                    </div>
                </div>
                ))
            }
        </div>
    );
}

export default People;