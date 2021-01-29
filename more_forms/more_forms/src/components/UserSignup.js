import React, { useState } from 'react';
import DisplayUserSignup from './DisplayUserSignup';
 
//REMOVED props  MAYBE THATS IT???
const UserSignup = () => {
    const [getUsername, setUsername] = useState("");
    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    // const [getPassword, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    //SET ERRORS SEPARATELY FOR ERRORS
    const [getUsernameError, setUserNameError] = useState("");
    const [getFirstNameError, setFirstNameError] = useState("");
    const [getLastNameError, setLastNameError] = useState("");
    const [getEmailError, setEmailError] = useState("");
    const [getPasswordError, setPasswordError] = useState("");

// PUT ALL CONST ABOVE BEFORE THE FUNCTION
    const userValidator = (e) => {    //IS THIS USED CORRECTLY?????
        if (e.target.name === "userName"){
        setUsername(e.target.value);
            if(e.target.value.length < 1) {
                setUserNameError(<p style={enterAlert}>Please enter your username.</p>);
            } else if(e.target.value.length < 2) {
                setUserNameError(<p style={errorAlert}>Your username must be longer than 2 characters.</p>);
            } else {
                setUserNameError(<p style={successAlert}>Username Accepted!</p>);
            }
        }
        if (e.target.name === "firstName"){
        setFirstName(e.target.value);
            if(e.target.value.length < 1) {
                setFirstNameError(<p style={enterAlert}>Please enter your first name.</p>);
            } else if(e.target.value.length < 2) {
                setFirstNameError(<p style={errorAlert}>Your first name must be longer than 2 characters.</p>);
            } else {    
                setFirstNameError(<p style={successAlert}>First Name Accepted!</p>);
            }
        }
        if (e.target.name === "lastName"){
        setLastName(e.target.value);
            if(e.target.value.length < 1) {
                setLastNameError(<p style={enterAlert}>Please enter your last name.</p>);
            } else if(e.target.value.length < 2) {
                setLastNameError(<p style={errorAlert}>Your last name must be longer than 1 character.</p>);
            } else {    
                setLastNameError(<p style={successAlert}>Last Name Accepted!</p>);
            }
        }
        if (e.target.name === "email"){
        setEmail(e.target.value);
            if(e.target.value.length < 1) {
                setEmailError(<p style={enterAlert}>Please enter your email.</p>);
            } else if(e.target.value.length < 6) {
                setEmailError(<p style={errorAlert}>Please enter a valid email address.</p>);
            } else {    
                setEmailError(<p style={successAlert}>Valid Email!</p>);
            }
        }
        if (e.target.name === "password"){
        setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError(<p style={enterAlert}>Please enter a secure password.</p>);
            } else if(e.target.value.length < 7) {
                setPasswordError(<p style={errorAlert}>Your password must be longer than 7 characters.</p>);
            } else {    
                setPasswordError(<p style={successAlert}>Password Accepted!</p>);
                //onChange={ (e) => setEquip(e.target.value)}
            }
        }
        };

        

    const [ getDisplay, setDisplay ] = useState("");

        // CALLS THIS IN THE FIRST FORM TAG
        // THIS ALLOWS INFO TO REMAIN AFTER REFRESH 
        const submitForm = (e) => {
            e.preventDefault();
    
            setDisplay({
                getUsername: getUsername,
                getFirstName: getFirstName,
                getLastName: getLastName,
                getEmail: getEmail,
            });
            //THIS CLEARS VALUES AFTER ENTERING IN THE FORM
            //MAKE SURE THIS IS AT THE BOTTOM 
            setUsername("");
            setFirstName("");
            setLastName("");   
            setEmail("");
            //THIS IS SET AS THE VALUE ON THE INPUTS BELOW
        };
//KEEP ALL VALIDATORS TOGETHER!!!!


    
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
    const disabledButtonStyle = 
    {
        marginTop: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "25px",
        paddingRight: "25px",
        background: "rgb(138, 138, 138)",
        color: "lightgrey",
        fontWeight: "bolder",
        fontSize: "large",
        border: "2px solid lightgrey",
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
    const successAlert =
        {
            display: "inline-block",
            color: "white",
            background: "rgb(21, 103, 28)",
            borderRadius: "20px",
            padding: "5px",
            paddingLeft: "25px",
            paddingRight: "25px",
            margin: "0px",
        };
    const enterAlert =
        {
            display: "inline-block",
            color: "white",
            background: "rgb(59, 132, 177)",
            borderRadius: "20px",
            padding: "5px",
            paddingLeft: "25px",
            paddingRight: "25px",
            margin: "0px",
        };
    const errorAlert =
        {
            display: "inline-block",
            color: "white",
            background: "rgb(142, 3, 3)",
            borderRadius: "20px",
            padding: "5px",
            paddingLeft: "25px",
            paddingRight: "25px",
            margin: "0px",
        };

    return (
        
        <div style={userSignupContainer}>
            {/* OLD WAY????? */}
            {/* <form onSubmit={ createUser }> */}
            <form onSubmit={ (e) => e.preventDefault() }>
                {/* THIS CALLS THE FORM MESSAGE FUNCTION  */}
                <h3>{ formMessage() }</h3> 
                <div style={inputPad}>
                    <label>Username: </label> 
                    <input name="userName" type="text" value={getUsername} onChange={ userValidator } style={inputTextPadding}/>
                    {
                    getUsernameError ?
                    <p>{ getUsernameError }</p> :
                    ''
                    }
                </div>
                <div style={inputPad}>
                    <label>First Name: </label>
                    <input name="firstName" type="text" value={getFirstName} onChange={ userValidator } style={inputTextPadding}/>
                    {
                    getFirstNameError ?
                    <p>{ getFirstNameError }</p> :
                    ''
                    }
                </div>
                <div style={inputPad}>
                    <label>Last Name: </label> 
                    <input name="lastName" type="text" value={getLastName} onChange={ userValidator } style={inputTextPadding}/>
                    {
                    getLastNameError ?
                    <p>{ getLastNameError }</p> :
                    ''
                    }
                </div>
                <div style={inputPad}>
                    <label>Email Address: </label> 
                    <input name="email" type="text" value={getEmail} onChange={ userValidator } style={inputTextPadding}/>
                    {
                    getEmailError ?
                    <p>{ getEmailError }</p> :
                    ''
                    }
                </div>
                <div style={inputPad}>
                    <label>Password: </label>
                    <input name="password" type="password" value={getPassword} onChange={ userValidator } style={inputTextPadding}/>
                    {
                    getPasswordError ?
                    <p>{ getPasswordError }</p> :
                    ''
                    }
                </div>
                <div style={inputPad}>
                    <label>Confirm Password: </label>
                    <input name="password" type="password" value={getPassword} onChange={ userValidator } style={inputTextPadding}/>
                    {
                   getPasswordError ?
                    <p>{ getPasswordError }</p> :
                    ''
                    }
                </div>
                    {/* ADD THIS INSEAD OF THE BUTTON  ADD FOR EVERY VALUE??? FOR ALL OF THEM*/}
                    {
                        getUsernameError ?
                        <input style={disabledButtonStyle} type="submit" value="Create Profile" disabled /> : 
                        <input style={buttonStyle} type="submit" value="Create Profile" />
                        //MAKE ANOTHER STATE FOR SUCCESSESSSSSS
                    }
                    {/* STYLE THE INPUTS LIKE A BUTTON MAKE THE DISABLED GREY   */}
                {/* <button style={buttonStyle} type="submit" value="Create User">Create Profile</button> */}
            </form>
            <DisplayUserSignup displayUserSignup={ getDisplay }/>
        </div>
    );
};
    
export default UserSignup;