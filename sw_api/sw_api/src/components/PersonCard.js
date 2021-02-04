import React, { Component } from 'react';

const PersonCard = props => {
  //DONT NEED RENDER!
    const personCardStyle = 
        {
            border: "2px solid darkblue",
            borderRadius: "20px",
            display: "inline-block",
            width: "290px",
            margin: "10px",
            paddingBottom: "0",
            //textAlign: "left",
            background: "white",
            paddingLeft: "25px",
            paddingRight: "25px",
        }

    const nameOnly = 
        {
            color: "white",
            borderRadius: "20px",
            display: "inline-block",
            textAlign: "center",
            background: "rgb(27, 87, 87)",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginBottom: "0px"
        }

    const cardInfoAlign = 
        {   
            textAlign: "left",
            // padding: "0px",
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
        <div style={personCardStyle}>
            <h2 style={nameOnly}>{ props.firstName }  { props.lastName }</h2>
            <div style={cardInfoAlign}>
                <p>Age: <p style={attributeHighlight}>{ props.age }</p></p>
                <p>Hair Color: <p style={attributeHighlight}>{ props.hairColor }</p></p>
                <p>Favorite Hobby: <p style={attributeHighlight}>{ props.favoriteHobby }</p></p>
            </div>
        </div>
    );
}


export default PersonCard;