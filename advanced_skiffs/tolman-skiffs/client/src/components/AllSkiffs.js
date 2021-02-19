import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

const AllSkiffs = (props) => {
    const [ allSkiffs, setAllSkiffs ] = useState([]);  // SETUP THE GETTER AND SETTER AND A EMPTY ARRAY!!!!!!!   THIS IS THE STATE

    useEffect(() => {
        axios
            .get("http://localhost:7777/api/skiffs")
            .then((response) => {
                console.log(response.data);
                setAllSkiffs(response.data);
            }) 
            .catch((err) => {
                console.log(err);
            });
    },[]);
 
    return(
    <div>
        <h2>All Skiffs</h2>

        {allSkiffs.map((skiff, index) => (
            <div> 
                <h4>{`${skiff.ownerName} "'s" ${skiff.modelName} Skiff`}</h4>
                 <img src={ skiff.pictureUrl} />    {/* ADD IMG CONTAINER HERE */}
                <p>{skiff.description}</p>
                <button onClick={() => navigate(`/skiff/${skiff._id}`)}>View Skiff Details</button>
                <button onClick={() => navigate(`/skiff/${skiff._id}`)}>Edit</button>
                <button onClick={() => navigate(`/skiff/${skiff._id}`)}>Delete</button>
            </div>

        ))}
    </div>
    )
}

export default AllSkiffs;