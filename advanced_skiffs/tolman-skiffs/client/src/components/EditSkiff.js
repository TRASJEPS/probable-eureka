import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';
// THIS FORMATS ALL CURRENCY USE ON ALL PAGES 
import { formatCurrency } from '../utilities/CurrencyFormatter';

// app.put('/api/skiffs/:id', SkiffsController.update);   //THIS IS THE UPDATER or EDITOR

//AXIOS UPDATE
const EditSkiff = (props) => {

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

const submitForm = (e) => {
   
    


}

 return(



    <div>
        <h2>Edit Yacht</h2>


    </div>
 )
}

export default EditSkiff;