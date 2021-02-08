import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Pokemon() {
    const [ pokemonCount, setPokemonCount ] = useState(0);
    const [ pokemon, setPokemon ] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=" + pokemonCount)
            .then((response) => {
                console.log(response);
                setPokemon(response.data.results);
            })
            .catch((error) => {
            console.log(error);
        })
    }, [pokemonCount]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
            console.log(response);
            setPokemonCount(response.data.count);
            console.log(response.count);
        })
        .catch((error) => {
        console.log(error);
        })
    }, []);

    const pokemonContainer = 
    {
        border: "2px solid darkblue",
        borderRadius: "20px",
        display: "inline-block",
        width: "20%",
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

    // const middleLine = 
    // {
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     height: "5px",
    //     width: "100%",
    //     background: "black"
    // }

    return (
        <div className= "App">
            <div style={pokeball}>
                {/* <center><div style={middleLine}></div></center> */}
                <center><div style={pokeballButton}>
                    
                </div></center>
            </div>
            <h2>Pokemon API</h2>
            <h4>Total Pokemon: {pokemonCount}</h4>
            {
                pokemon.map((personObj, index) => (
                <div style={pokemonContainer} key= {index}>
                    {/* <hr /> */}
                    <p>Name: {personObj.name}</p>
                </div>
                ))
            }
        </div>
    );
}

export default Pokemon;