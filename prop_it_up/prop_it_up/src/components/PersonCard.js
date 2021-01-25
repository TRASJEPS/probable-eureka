import React, { Component } from 'react';

class PersonCard extends Component {
    render () 
    {
        const { firstName, lastName, age, hairColor} = this.props;
        
        const personCardStyle = 
        {
            border: "2px solid darkblue",
            borderRadius: "20px",
            textAlign: "left",
            display: "inline-block",
            width: "50%",
            margin: "10px",
            textAlign: "center",
            background: "white"
        }

        return(
            <div style={ personCardStyle }>
                <h2>{ lastName }, { firstName } </h2>
                <h4>Age: { age }</h4>
                <h4>Hair Color: { hairColor }</h4>
            </div>
        );
    }
}

export default PersonCard;