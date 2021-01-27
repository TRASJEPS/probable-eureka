import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
                age: this.props.age,
            }
    }
    
    birthday = () => {
        this.setState({ 'age': this.state.age + 1 });
        return this;
    }
    
    render() 
    {
        const { firstName, lastName, age, hairColor} = this.props;
        
        const personCardStyle = 
        {
            border: "2px solid #b6e0b9",
            borderRadius: "20px",
            textAlign: "left",
            display: "inline-block",
            width: "50%",
            margin: "10px",
            textAlign: "center",
            background: "#ececec"
        }

        const buttonStyle =
        {
            padding: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#92d6e2",
            marginBottom: "15px",
            borderRadius: "20px",
            border: "3px solid #5c8e97"
        }

        return(
            <div style={ personCardStyle }>
                <h2>{ lastName }, { firstName } </h2>
                <h4>Age: { this.state.age }</h4>
                <h4>Hair Color: { hairColor }</h4>
                <button style={ buttonStyle } onClick={ this.birthday }> 
                { firstName } { lastName }'s Birthday!</button>
            </div>
        );
    }
}

export default PersonCard;