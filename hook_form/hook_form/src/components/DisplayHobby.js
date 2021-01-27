import React from 'react';
 
//CHANGE THIS TO USE STATE

const DisplayHobby = (props) => {

    const { displayHobby } = props;

    const enteredHobby = 
        {
            border: "2px solid darkblue",
            borderRadius: "20px",
            display: "inline-block",
            width: "90%",
            margin: "20px",
            //textAlign: "left",
            background: "white",
        }

    const attributeHighlight =
        {
            display: "inline-block",
            background: "rgb(191, 220, 220)",
            borderRadius: "20px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            margin: "0px",
        }

    return(
        
        // THIS CHECKS IF THE VAL IS THERE IF ITS NOT THEN IT SHOWS NOTHING 
        <div style={enteredHobby}>
        <h3>Your Hobby:</h3>
        
        <p>Hobby: <p style={attributeHighlight}>{ displayHobby.getHobby ? displayHobby.getHobby : "..."} </p></p>
        <p>Years of Experience: <p style={attributeHighlight}>{ displayHobby.getExp ? displayHobby.getExp : "..."} </p></p>
        <p>Equipment Needed: <p style={attributeHighlight}>{ displayHobby.getEquip ? displayHobby.getEquip : "..."} </p></p>
        <p>Description: <p style={attributeHighlight}>{ displayHobby.getDesc ? displayHobby.getDesc : "..."} </p></p>

        
        </div>
    );
    }

export default DisplayHobby;