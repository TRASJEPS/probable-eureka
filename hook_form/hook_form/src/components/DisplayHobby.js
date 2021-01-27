import React from 'react';
 

//CHANGE THIS TO USE STATE

const DisplayHobby = (props) => {

    const { displayHobby } = props;

    const hobbyNameOnly = 
        {
            border: "2px solid darkblue",
            borderRadius: "20px",
            display: "inline-block",
            width: "90%",
            margin: "20px",
            //textAlign: "left",
            background: "white",
        }

    return(
        
        // THIS CHECKS IF THE VAL IS THERE IF ITS NOT THEN IT SHOWS NOTHING 
        <div style={hobbyNameOnly}>
        <h3>Your Hobby:</h3>
        
        <p>Hobby: { displayHobby.getHobby ? displayHobby.getHobby : ""} </p>
        <p>Description: { displayHobby.getDesc ? displayHobby.getDesc : ""} </p>
        <p>Years of Experience: { displayHobby.getExp ? displayHobby.getExp : ""} </p>
        <p>Equipment Needed: { displayHobby.getEquip ? displayHobby.getEquip : ""} </p>

        
        </div>
    );
    }

export default DisplayHobby;