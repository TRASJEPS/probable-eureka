import React from 'react';

const DisplayUserSignup = (props) => {

    const { displayUserSignup } = props;

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
const attributeHighlightDescriptionOverflow =
    {
        display: "inline-block",
        background: "rgb(191, 220, 220)",
        borderRadius: "20px",
        padding: "5px",
        paddingTop: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        margin: "0px",
        marginTop: "13px",
    }

// MAKE THIS WHOLE THING INVIS UNTIL CALLED?????????
    return(
        
        // THIS CHECKS IF THE VAL IS THERE IF ITS NOT THEN IT SHOWS NOTHING 
        <div style={enteredHobby}>
            <h3>Your New Profile:</h3>
            <p>Username: <p style={attributeHighlight}>{ displayUserSignup.getUsername ? displayUserSignup.getUsername : "..."} </p></p>
            <p>First Name: <p style={attributeHighlight}>{ displayUserSignup.getFirstName ? displayUserSignup.getFirstName : "..."} </p></p>
            <p>Last Name: <p style={attributeHighlight}>{ displayUserSignup.getLastName ? displayUserSignup.getLastName : "..."} </p></p>
            <p>Email: <p style={attributeHighlight}>{ displayUserSignup.getEmail ? displayUserSignup.getEmail : "..."} </p></p>
        </div>
    );
    }

export default DisplayUserSignup;