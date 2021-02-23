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
        console.log(response);
        navigate(`/skiff/${response.data._id}`);
        })
        .catch((err) => { console.log(err); 
        })
}

return (
    <div>
        <h2>New Skiff</h2>
        <form onSubmit = {submitForm}>
        <div>
            <label>Owner Name</label>
            <input type="text" name="ownerName" value={ownerName} onChange={(event) => setOwnerName(event.target.value)}></input>
        </div>
        <div>
            <label>Builder Name</label>
            <input type="text" name="builderName"  value={builderName} onChange={(event) => setBuilderName(event.target.value)}></input>
        </div>
        <div>
            <label>Model Name</label>
            <select type="text" name="modelName" value={modelName} onChange={(event) => setModelName(event.target.value)}>
                <option value="Standard">Standard</option>
                <option value="Wide Body">Wide Body</option>
                <option value="Jumbo">Jumbo</option>
                <option value="Flat Bottom">Flat Bottom</option>
            </select>
        </div>
        <div>
            <label>Build Start Date</label>
            <input type="date" name="startDate" value={startDate} onChange={(event) => setStartDate(event.target.value)}></input>
        </div>
        <div>
            <label>Build Finish Date</label>
            <input type="date" name="finishDate" value={finishDate} onChange={(event) => setFinishDate(event.target.value)}></input>
        </div>
        <div>
            <label>Stock Length in Feet</label>
            <input type="number" name="stockLength" value={stockLength} onChange={(event) => setStockLength(event.target.value)}></input>
        </div>
        <div>
            <label>Custom Length in Feet</label>
            <input type="number" name="customLength" value={customLength} onChange={(event) => setCustomLength(event.target.value)}></input>
        </div>
        <div>
            <label>Photo</label>
            <input type="text" name="pictureUrl" value={pictureUrl} onChange={(event) => setPictureUrl(event.target.value)}></input>
        </div>
        <div>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
        </div>
        <div>
            <label>Build Complete</label>
             <input type="checkbox" name="buildComplete" checked={buildComplete} onChange={(event) => setBuildComplete( !buildComplete )}></input>  {/*SET OPPOSITE TO MAKE IT MAKES IT AUTO FALSE */}
        </div>
        <button type="submit">Add Skiff</button>
        </form>
    </div>
)
}

export default NewSkiff;