import React, { Component } from 'react';

const PersonCard = props => {
    return(
        <div>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <h4>Age: { props.age }</h4>
            <h4>Hair Color: { props.hairColor }</h4>
        </div>
    );
}
// render() 
// // REMOVING STYLE FOR NOW...
//     {
// const personCardStyle = 
//         {
//             border: "2px solid darkblue",
//             borderRadius: "20px",
//             textAlign: "left",
//             display: "inline-block",
//             width: "50%",
//             margin: "10px",
//             textAlign: "center",
//             background: "white"
//         }
//     }

export default PersonCard;