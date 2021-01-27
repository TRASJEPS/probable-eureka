import React, { Component } from 'react';

const PersonCard = props => {
  //DONT NEED RENDER!
    const personCardStyle = 
        {
            border: "2px solid darkblue",
            borderRadius: "20px",
            display: "inline-block",
            width: "250px",
            margin: "10px",
            //textAlign: "left",
            background: "white",
            paddingLeft: "25px"
        }

    const nameOnly = 
        {
            color: "white",
            borderRadius: "20px",
            display: "inline-block",
            textAlign: "center",
            background: "grey",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginBottom: "0px"
        }

    const cardInfoAlign = 
        {   
            textAlign: "left",
        }
    
    return(
        <div style={personCardStyle}>
            <h2 style={nameOnly}>{ props.firstName }  { props.lastName }</h2>
            <div style={cardInfoAlign}>
                <h4>Age: { props.age }</h4>
                <h4>Hair Color: { props.hairColor }</h4>
            </div>
        </div>
    );
}


export default PersonCard;