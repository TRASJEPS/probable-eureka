import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';
// THIS FORMATS ALL CURRENCY USE ON ALL PAGES 
import { formatCurrency } from '../utilities/CurrencyFormatter';

// app.put('/api/skiffs/:id', SkiffsController.update);   //THIS IS THE UPDATER or EDITOR

//AXIOS UPDATE
const EditSkiff = (props) => {

    //THIS must be called id because thats how its linked in APP.JS
    const { id } = props;
    // THIS IS IMPORTANT, it takes in the props from creating the new skiff 
    const [ buildComplete, setBuildComplete ] = useState(false);
    const [ ownerName, setOwnerName ] = useState("");
    const [ builderName, setBuilderName ] = useState("");
    const [ modelName, setModelName ] = useState("Standard");  //AUTOMATICALLY STARTS AS STANDARD IN THIS CASE
    const [ startDate, setStartDate ] = useState("");
    const [ finishDate, setFinishDate ] = useState("");
    const [ stockLength, setStockLength ] = useState("");  // PLAY WITH NUMBERS 
    const [ customLength, setCustomLength ] = useState(""); // SET AS A NUMBER BUT USE AN EMPTY STRING SO CONSOLE PLAYS NICE
    const [ pictureUrl, setPictureUrl ] = useState("");
    const [ description, setDescription ] = useState("");
    const [errs, setErrs ] = useState({});  //READY FOR OBJECT

useEffect(() => {
    axios  //BACKEND
        .get("http://localhost:7777/api/skiffs/" + id )  //THIS IS IN THE skiffs.route.js BACKEND PATH
        .then((response) => {
            const editOneSkiff = response.data;
            console.log(editOneSkiff);
            setBuildComplete(editOneSkiff.buildComplete);
            setOwnerName(editOneSkiff.ownerName);
            setBuilderName(editOneSkiff.builderName);
            setModelName(editOneSkiff.modelName);
            setStartDate(editOneSkiff.startDate);   
            setFinishDate(editOneSkiff.finishDate);
            setStockLength(editOneSkiff.stockLength);
            setCustomLength(editOneSkiff.customLength);
            setPictureUrl(editOneSkiff.pictureUrl);
            setDescription(editOneSkiff.description);
            }) 
        .catch((err) => {
            console.log(err);
            });
}, []);

const submitForm = (event) => {
    event.preventDefault();
    axios  //BACKEND
        .put("http://localhost:7777/api/skiffs/" + id,     //THIS IS IN THE skiffs.route.js BACKEND PATH
   {
    buildComplete: buildComplete,
    ownerName: ownerName,
    builderName: builderName,
    modelName: modelName,
    startDate: startDate, 
    finishDate: finishDate,
    stockLength: stockLength, 
    customLength: customLength, 
    pictureUrl: pictureUrl,
    description: description,
   })
        .then((response) => {
            if(response.data.errors) {
                console.log(response.data.errors);
                setErrs(response.data.errors);
            } else {    
                console.log(response.data);
                navigate(`/skiff/${response.data._id}`);
            }
            })
        .catch((err) => { 
            console.log(err); 
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
        paddingTop: "7px",
        paddingBottom: "7px",
        paddingLeft: "25px",
        paddingRight: "25px",
        borderRadius: "30px",
        border: "2px solid rgb(176, 217, 255)",
        margin: "5px",
        marginLeft: "20px"
    };
const inputTextPaddingSpecial = 
    {
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "30px",
        border: "2px solid rgb(176, 217, 255)",
        marginTop: "-5px",
        alignItems: "center",
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
            marginTop: "6px",
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
            marginTop: "9px",
            marginLeft: "10px",
            marginBottom: "3px",
            border: "2px solid rgb(192, 220, 191)",
        };

const successAlertLength =
        {
            alignItems: "right",
            justifyContent: "right",
            display: "inline-block",
            color: "white",
            background: "rgb(21, 103, 28)",
            paddingBottom: "3px",
            paddingTop: "0px",
            paddingLeft: "4px",
            paddingRight: "4px",
            borderRadius: "30px",
            marginTop: "3px",
            alignItems: "right",
            justifyContent: "right",
            marginBottom: "3px",
            marginLeft: "10px",
            border: "2px solid rgb(192, 220, 191)",
        };

 return(


// REMEMBER TO SETUP THE CATCH

    <div>
        <h2>Edit Yacht</h2>


    </div>
 )
}

export default EditSkiff;