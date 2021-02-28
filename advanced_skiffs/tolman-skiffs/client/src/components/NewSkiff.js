import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
// import { set } from 'mongoose';  DO NOT ADD THIS ON THE FRONT END

const NewSkiff = (props) => {
    const [ buildComplete, setBuildComplete ] = useState(false);
    const [ ownerName, setOwnerName ] = useState("");
    const [ builderName, setBuilderName ] = useState("");
    const [ modelName, setModelName ] = useState("Standard");  //AUTOMATICALLY STARTS AS STANDARD IN THIS CASE
    const [ startDate, setStartDate ] = useState("");
    const [ finishDate, setFinishDate ] = useState("");
    const [ stockLength, setStockLength ] = useState("");  // SET AS A NUMBER BUT USE AN EMPTY STRING SO CONSOLE PLAYS NICE
    const [ customLength, setCustomLength ] = useState(""); // SET AS A NUMBER BUT USE AN EMPTY STRING SO CONSOLE PLAYS NICE
    const [ pictureUrl, setPictureUrl ] = useState("");
    const [ description, setDescription ] = useState("");

    const [errs, setErrs ] = useState({});  //READY FOR OBJECT

    //     "buildComplete": true,
    //     "_id": "602f12d1708e671126bef843",
    //     "ownerName": "Jean Puggly",
    //     "builderName": "Flat Boat",
    //     "modelName": "Standard",
    //     "startDate": "2019-10-11T00:00:00.000Z",
    //     "finishDate": "2020-02-03T00:00:00.000Z",
    //     "stockLength": 26,
    //     "customLength": 26,
    //     "pictureUrl": "weekend_at_qweqw",
    //     "description": "LOOK MY HAT IS A HELMET TOO!",
    //     "createdAt": "2021-02-19T01:22:25.133Z",
    //     "updatedAt": "2021-02-19T01:22:25.133Z",
    //     "__v": 0

const submitForm = (event) => {
    event.preventDefault();
    // NAU USE AXIOS!
    const newSkiff = {       //USE THIS AS AN OBJECT
        buildComplete: buildComplete,
        ownerName: ownerName,
        builderName: builderName,
        modelName: modelName,
        startDate: startDate,
        finishDate: finishDate,
        stockLength: stockLength,
        customLength: customLength,
        pictureUrl: pictureUrl,
        description: description
    };

    console.log(newSkiff);
    axios.post("http://localhost:7777/api/skiffs", newSkiff)  //THIS REPLACES THE LIST IN AXIOS
        .then((response) => {
        if(response.data.errors) {
            setErrs(response.data.errors);
        } else {    
        console.log(response.data);
        navigate(`/skiff/${response.data._id}`);
        }
        })
        .catch((err) => { console.log(err); 
        });
    
}

const titleHeader = 
{
    border: "4px solid rgb(176, 217, 255)",
    borderRadius: "20px",
    // display: "inline-block",
    margin: "20px",
    marginLeft: "35px",
    marginRight: "35px",
    // fontWeight: "bold",
    padding: "25px",
    // fontWeight: "bolder",
    // fontSize: "large",
    //textAlign: "left",
    background: "rgb(224, 240, 255)",
    paddingBottom: "20px"
};

const skiffContainer = 
{
    border: "2px solid darkblue",
    borderRadius: "20px",
    display: "inline-block",
    width: "66%",
    margin: "10px",
    fontWeight: "bold",
    paddingLeft: "25px",
    paddingRight: "25px",
    textAlign: "center",
    background: "white",
    paddingBottom: "20px",
    paddingTop: "20px"
};

const mainNameContainer = 
{
    border: "4px solid rgb(176, 217, 255)",
    borderRadius: "20px",
    display: "inline-block",
    margin: "10px",
    fontWeight: "bold",
    padding: "15px",
    fontWeight: "bolder",
    fontSize: "large",
    //textAlign: "left",
    background: "rgb(224, 240, 255)",
    paddingBottom: "20px"
};

const buttonStyle = 
    {
        marginTop: "15px",
        marginLeft: "5px",
        marginRight: "5px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "15px",
        paddingRight: "15px",
        background: "rgb(27, 36, 87)",
        color: "white",
        fontWeight: "bolder",
        fontSize: "small",
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
        border: "2px solid rgb(176, 217, 255)",
        margin: "5px"
    };

const textAreaPadding = 
        {
            padding: "10px",
            borderRadius: "30px",
            border: "2px solid rgb(176, 217, 255)",
            margin: "5px",
            width: "72%",
            height: "100px"
        };

const inputPadDesc = 
        {
            align: "vertial",
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
            border: "2px solid rgb(220, 191, 191)",
        };
const enterAlert =
        {
            display: "inline-block",
            color: "white",
            background: "rgba(59, 132, 177, 1.0)",
            borderRadius: "20px",
            padding: "5px",
            paddingLeft: "25px",
            paddingRight: "25px",
            margin: "0px",
            border: "2px solid rgba(191, 207, 220, 1.0)",
        };

const successAlert =
        {
            display: "inline-block",
            color: "white",
            background: "rgb(21, 103, 28)",
            paddingBottom: "3px",
            paddingTop: "0px",
            paddingLeft: "4px",
            paddingRight: "4px",
            borderRadius: "30px",
            marginLeft: "10px",
            marginBottom: "0px",
            border: "2px solid rgb(192, 220, 191)",
            marginTop: "0px",
        };


// TOGGLE FROM ONCHANGE TO onBlur
return (
    <div>
        <h2 style={titleHeader}>Add New Skiff</h2>
        <form style={skiffContainer} onSubmit = {submitForm}>
            <div>
                <label>Owner Name</label>
                <input style={inputTextPadding} type="text" name="ownerName" onBlur={(event) => setOwnerName(event.target.value)}></input>
                { ownerName.length == 0 ? null 
                    : ownerName.length < 3 ? <span style={errorAlert}>Please enter a name longer than 3 characters.</span>
                        : ownerName.length > 50 ? <span style={errorAlert}>Your name is longer than 50 characters.  Please enter a shorter name. </span>
                            : <p className="fadeIn" style={successAlert}>&#10003;</p> }
                { errs.ownerName? <span style={errorAlert}> { errs.ownerName.message }</span> : null }
            </div>
            <div>
                <label>Builder Name</label>
                <input style={inputTextPadding} type="text" name="builderName" onBlur={(event) => setBuilderName(event.target.value)}></input>
                { builderName.length == 0 ? null 
                    : builderName.length < 3 ? <span style={errorAlert}>Please enter a builder name longer than 3 characters.</span>
                        : builderName.length > 50 ? <span style={errorAlert}>Your builder name is longer than 50 characters.  Please enter a shorter name. </span>
                            : <p style={successAlert}>&#10003;</p> }
                { errs.builderName? <span style={errorAlert}> { errs.builderName.message }</span> : null }
            </div>
            <div>
                <label>Model Name</label>
                <select style={inputTextPadding} type="text" name="modelName" onBlur={(event) => setModelName(event.target.value)}>
                    <option value="Standard">Standard</option>
                    <option value="Wide Body">Wide Body</option>
                    <option value="Jumbo">Jumbo</option>
                    <option value="Flat Bottom">Flat Bottom</option>
                </select>
                { errs.modelName? <span style={errorAlert}> { errs.modelName.message }</span> : null }
            </div>
            <div>
                <label>Build Start Date</label>
                <input style={inputTextPadding} type="date" name="startDate" onBlur={(event) => setStartDate(event.target.value)}></input>
                { startDate.length == 0 ? null 
                    : <p className="elementToFadeInAndOut" style={enterAlert}>Date selected...</p>}
                { errs.startDate? <span style={errorAlert}> { errs.startDate.message }</span> : null }
            </div>
            <div>
                <label>Build Finish Date</label>
                <input style={inputTextPadding} type="date" name="finishDate" onBlur={(event) => setFinishDate(event.target.value)}></input>
                { finishDate.length == 0 ? null 
                    : <p style={enterAlert}>Date selected...</p> }
                { errs.finishDate? <span style={errorAlert}> { errs.finishDate.message }</span> : null }
            </div>
            <div>
                <label>Stock Length in Feet</label>
                <input style={inputTextPadding} type="number" name="stockLength" onBlur={(event) => setStockLength(event.target.value)}></input>
                { errs.stockLength? <span style={errorAlert}> { errs.stockLength.message }</span> : null }
            </div>
            <div>
                <label>Custom Length in Feet</label>
                <input style={inputTextPadding} type="number" name="customLength" onBlur={(event) => setCustomLength(event.target.value)}></input>
                { errs.customLength? <span style={errorAlert}> { errs.customLength.message }</span> : null }
            </div>
            <div>
                <label>Photo Link</label>
                <input style={inputTextPadding} type="text" name="pictureUrl" onBlur={(event) => setPictureUrl(event.target.value)}></input>
                { errs.pictureUrl? <span style={errorAlert}> { errs.pictureUrl.message }</span> : null }
            </div>
            <div>
                <div style={inputPadDesc}><label >Description:</label></div>
                <textarea style={textAreaPadding} type="text" name="description" value={description} rows={100} onBlur={(event) => setDescription(event.target.value)}></textarea>
                { errs.description? <span style={errorAlert}> { errs.description.message }</span> : null }
            </div>
            <div>
                <label>Build Complete</label>
                <input style={inputTextPadding} type="checkbox" name="buildComplete" checked={buildComplete} onBlur={(event) => setBuildComplete( !buildComplete )}></input>  {/*SET OPPOSITE TO MAKE IT MAKES IT AUTO FALSE */}
                { errs.buildComplete? <span style={errorAlert}> { errs.buildComplete.message }</span> : null }
            </div>
            <button style={buttonStyle} type="submit">Add New Skiff</button>
        </form>
    </div>
)
}

export default NewSkiff;