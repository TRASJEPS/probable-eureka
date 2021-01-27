import React, { useState } from 'react';
import DisplayHobby from './DisplayHobby';

//CHANGE THIS TO USE STATE

const HobbyForm = () => {
    // THIS IS THE GETTER AND SETTER 
    // destructured from the useSate method
    const [ getHobby, setHobby ] = useState("");
    const [ getDesc, setDesc ] = useState("");
    const [ getExp, setExp ] = useState();  //SET TO ZERO IF ERROR
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
        setExp(0);   //SET TO ZERO IF ERROR BUT FIND FIX SO ITS CLEANER
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
    const inputPadDesc = 
        {
            // Tying to make it perfect center but center does not work
            verticalAlign: "top",
        }
    const textAreaPadding = 
        {
            padding: "10px",
            borderRadius: "30px",
            border: "2px solid darkblue",
        }
    const inputTextPadding = 
        {
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            borderRadius: "30px",
            border: "2px solid darkblue",
        }
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
        }
    

    // the return in () allows for multiple elements 
    // the on change makes an event listener  IN THIS CASE ITS CALLED e in an ANON FUNCTION
    // every time a key is pressed it updates the state!
    return (
        <div style={hobbyContainer}>
            <h3>Welcome to the Hobby Form!</h3>
            <p>Add your favorite hobby below.</p>
            {/* USING A FUNCTION WITHOUT PARAMS WILL WAIT FOR EVENT and WILL SEND THE EVENT AS A PARM AUTOMATICALLY */}
            <form onSubmit = { submitForm }>
                <div style={inputPad}>
                    <label>Hobby: </label>
                    <input type="text" value={getHobby} onChange={ (e) => setHobby(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>Years of Experience: </label>
                    <input type="text" value={getExp} onChange={ (e) => setExp(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                    <label>Equipment Needed: </label>
                    <input type="text" value={getEquip} onChange={ (e) => setEquip(e.target.value)} style={inputTextPadding}/>
                </div>
                <div style={inputPad}>
                {/* <div style={inputPad}> */}
                    <label style={inputPadDesc}>Description: </label>
                    {/* <input type="textarea" value={getDesc} onChange={ (e) => setDesc(e.target.value)}/> */}
                    <textarea value={getDesc} onChange={ (e) => setDesc(e.target.value)} cols={50} rows={3} style={textAreaPadding}></textarea>
                </div>
                <button style={buttonStyle} type="submit" value="Submit">Post</button>
            </form>
            {/* IMPORT FROM THE  DisplayHobby  method*/}
            <DisplayHobby displayHobby={ getDisplay }/>
        </div>
    )
}

export default HobbyForm;