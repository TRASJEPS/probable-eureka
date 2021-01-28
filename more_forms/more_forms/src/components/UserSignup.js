import React, { useState } from 'react';
 
const UserSignup = (props) => {
    const [getUsername, setUsername] = useState("");
    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    // const [getPassword, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { getUsername, getFirstName, getLastName, getEmail, getPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    // THIS CONNECTS TO THE H3 TAG BELOW  
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Success! You created a new account.";
        } 
        else {
	    return "Welcome! Please signup to access our community.";
	    }
    };

//STYLING
    const userSignupContainer = 
    {
        border: "2px solid darkblue",
        borderRadius: "20px",
        display: "inline-block",
        width: "70%",
        margin: "10px",
        //textAlign: "left",
        background: "white",
        padding: "20px"
    };
    const buttonStyle = 
    {
        marginTop: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "25px",
        paddingRight: "25px",
        background: "rgb(27, 36, 87)",
        color: "white",
        fontWeight: "bolder",
        fontSize: "large",
        border: "2px solid darkblue",
        borderRadius: "30px",
    };
    const inputTextPadding = 
    {
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "30px",
        border: "2px solid darkblue",
    };
    const inputPad = 
        {
            paddingTop: "5px",
            paddingBottom: "5px",
    };

    return (
        <div style={userSignupContainer}>
            <form onsubmit={ createUser }>
                {/* THIS CALLS THE FORM MESSAGE FUNCTION  */}
                <h3>{ formMessage() }</h3> 
                <div style={inputPad}>
                    <label>Username: </label> 
                    <input type="text" value={getUsername} onchange={ (e) => setUsername(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>First Name: </label> 
                    <input type="text" value={getFirstName} onchange={ (e) => setFirstName(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>Last Name: </label> 
                    <input type="text" value={getLastName} onchange={ (e) => setLastName(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>Email Address: </label> 
                    <input type="text" value={getEmail} onchange={ (e) => setEmail(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>Password: </label>
                    <input type="text" value={getPassword} onchange={ (e) => setPassword(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>Confirm Password: </label>
                    <input type="text" value={getPassword} onchange={ (e) => setPassword(e.target.value)} style={inputTextPadding}/>
                </div>
                <button style={buttonStyle} type="submit" value="Create User">Create Profile</button>
            </form>
        </div>
    );
};
    
export default UserSignup;