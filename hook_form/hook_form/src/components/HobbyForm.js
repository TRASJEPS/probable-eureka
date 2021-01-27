import React, { useState } from 'react';
import DisplayHobby from './DisplayHobby';

//CHANGE THIS TO USE STATE

const HobbyForm = () => {
    // THIS IS THE GETTER AND SETTER 
    // destructured from the useSate method
    const [ getHobby, setHobby ] = useState("");
    const [ getDesc, setDesc ] = useState("");
    const [ getExp, setExp ] = useState(0);
    const [ getEquip, setEquip ] = useState("");
    // THIS WAITS FOR SUBMIT BUTTON
    const [ getDisplay, setDisplay ] = useState("");

    // CALLS THIS IN THE FIRST FORM TAG
    // THIS ALLOWS INFO TO REMAIN AFTER REFRESH 
    const submitForm = (e) => {
        e.preventDefault();

        setDisplay({
            getHobby: getHobby,
            getDesc: getDesc,
            getExp: getExp,
            getEquip: getEquip,
        });
        //THIS CLEARS VALUES AFTER ENTERING IN THE FORM
        //MAKE SURE THIS IS AT THE BOTTOM 
        setHobby("");
        setDesc("");
        setExp(0);
        setEquip("");
        //THIS IS SET AS THE VALUE ON THE INPUTS BELOW
    };

    //ADD STYLING HERE
    const hobbyContainer = 
        {
            border: "2px solid darkblue",
            borderRadius: "20px",
            display: "inline-block",
            width: "70%",
            margin: "10px",
            //textAlign: "left",
            background: "white",
            padding: "20px"
        }
    const inputPad = 
        {
            paddingTop: "5px",
            paddingBottom: "5px",
        }
    const buttonStyle = 
        {
            marginTop: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
        }

    // the return in () allows for multiple elements 
    // the on change makes an event listener  IN THIS CASE ITS CALLED e in an ANON FUNCTION
    // every time a key is pressed it updates the state!
    return (
        <div style={hobbyContainer}>
            <h3>Welcome to the Hobby Form!</h3>
            {/* USING A FUNCTION WITHOUT PARAMS WILL WAIT FOR EVENT and WILL SEND THE EVENT AS A PARM AUTOMATICALLY */}
            <form onSubmit = { submitForm }>
                <div style={inputPad}>
                    <label>Hobby: </label>
                    <input type="text" value={getHobby} onChange={ (e) => setHobby(e.target.value)}/>

                </div>
                <div style={inputPad}>
                    <label>Description: </label>
                    <input type="text" value={getDesc} onChange={ (e) => setDesc(e.target.value)}/>
                </div>
                <div style={inputPad}>
                    <label>Years of Experience: </label>
                    <input type="text" value={getExp} onChange={ (e) => setExp(e.target.value)}/>
                </div>
                <div style={inputPad}>
                    <label>Equipment Needed: </label>
                    <input type="text" value={getEquip} onChange={ (e) => setEquip(e.target.value)}/>
                </div>
                <button style={buttonStyle} type="submit" value="Submit">Submit</button>
            </form>
            {/* IMPORT FROM THE  DisplayHobby  method*/}
            <DisplayHobby displayHobby={ getDisplay }/>
        </div>
    )
}

export default HobbyForm;