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

    return (
        <div className= "App">
            <h2>Pokemon</h2>
            <h4>Total Pokemon: {pokemonCount}</h4>
            {
                pokemon.map((personObj, index) => (
                <div key= {index}>
                    <hr />
                    <p>Name: {personObj.name}</p>
                </div>
                ))
            }
        </div>
    );
}

export default Pokemon;