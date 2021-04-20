import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

// DEFINE THE PROPS and THEN YOU TAKE IT OUT OF PROPS
const AllSkiffs = (props) => {
    const [ allSkiffs, setAllSkiffs ] = useState([]);  // SETUP THE GETTER AND SETTER AND A EMPTY ARRAY!!!!!!!   THIS IS THE STATE

    useEffect(() => {
        axios
            .get("http://localhost:7777/api/skiffs")
            .then((response) => {
                console.log(response.data);
                setAllSkiffs(response.data);
            }) 
            .catch((err) => {
                console.log(err);
            });
    },[]);

    // delete 
    // USE skiff._id
    const deleteSkiff = (skiff) => {
        console.log(skiff + " - has been deleted.  The ID was" + skiff._id);

    const newSkiffsArray = allSkiffs.filter((deletedSkiff) => {
        return deletedSkiff !== skiff._id;
    }) 

    setAllSkiffs(newSkiffsArray)
    };


 
    const skiffContainer = 
    {
        border: "2px solid darkblue",
        borderRadius: "20px",
        display: "inline-block",
        width: "26%",
        margin: "10px",
        fontWeight: "bold",
        paddingLeft: "25px",
        paddingRight: "25px",
        //textAlign: "left",
        background: "white",
        paddingBottom: "20px"
    };

    const mainNameContainer = 
    {
        border: "4px solid rgb(176, 217, 255)",
        borderRadius: "30px",
        display: "inline-block",
        margin: "10px",
        fontWeight: "bold",
        padding: "15px",
        fontWeight: "bolder",
        fontSize: "large",
        //textAlign: "left",
        background: "rgb(224, 240, 255)",
        paddingBottom: "20px"
    };

    const buttonStyle = 
        {
            margin: "5px",
            // marginLeft: "5px",
            // marginRight: "5px",
            marginTop: "15px",
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingLeft: "10px",
            paddingRight: "10px",
            background: "rgb(27, 36, 87)",
            color: "white",
            fontWeight: "bolder",
            fontSize: "small",
            border: "2px solid darkblue",
            borderRadius: "10px",
        };

    const titleHeader = 
    {
        border: "4px solid rgb(176, 217, 255)",
        borderRadius: "30px",
        // display: "inline-block",
        margin: "20px",
        marginLeft: "35px",
        marginRight: "35px",
        // fontWeight: "bold",
        padding: "25px",
        // fontWeight: "bolder",
        // fontSize: "large",
        //textAlign: "left",
        background: "rgb(224, 240, 255)",
        paddingBottom: "20px"
    };

    return(
    <div>
        <h1 style={titleHeader}>All Skiffs</h1>

        {/* SKIFF is an object  */}
        {allSkiffs.map((skiff, index) => (
            <div style={skiffContainer}> 
                <h4 style={mainNameContainer}>{`${skiff.ownerName}'s ${skiff.modelName} Skiff`}</h4>
                <br></br>
                <img src={ skiff.pictureUrl} />    {/* ADD IMG CONTAINER HERE */}
                <p>{`Built by: ${skiff.builderName}`}</p>
                <p>{`Stock Length: ${skiff.stockLength}'`}</p>
                <p>{`Custom Length: ${skiff.customLength}'`}</p>
                <p>{`Description: ${skiff.description}`}</p>
                <p id="smallFont">{`Date Added: ${skiff.createdAt.substring(5,10)}-${skiff.createdAt.substring(0,4)}`}</p>
                <button style={buttonStyle} onClick={() => navigate(`/skiff/${skiff._id}`)}>View Skiff Details</button>
                <button style={buttonStyle} onClick={() => navigate(`/skiff/${skiff._id}`)}>Edit</button>
                {/* WIP DELETE  */}
                {/* <button style={buttonStyle} onClick={() => deleteSkiff(`/skiff/${skiff._id}`)}>Delete</button> */}
                {/* OR iS IT skiff.name ???  */}
                <button style={buttonStyle} onClick={() => navigate(`/skiff/${skiff._id}`)}>Delete</button>
            </div>
        ))}
    </div>
    )
}

export default AllSkiffs;