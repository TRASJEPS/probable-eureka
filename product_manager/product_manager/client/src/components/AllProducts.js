import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

const AllProducts = (props) => {
    const [ allProducts, setAllProducts ] = useState([]);  // SETUP THE GETTER AND SETTER AND A EMPTY ARRAY!!!!!!!   THIS IS THE STATE

    useEffect(() => {
        axios
            .get("http://localhost:5555/api/products")
            .then((response) => {
                console.log(response.data);
                setAllProducts(response.data);
            }) 
            .catch((err) => {
                console.log(err);
            });
    },[]);
 
    const productContainer = 
    {
        border: "2px solid darkblue",
        borderRadius: "20px",
        display: "inline-block",
        width: "26%",
        margin: "10px",
        fontWeight: "bold",
        paddingLeft: "25px",
        paddingRight: "25px",
        //textAlign: "left",
        background: "white",
        paddingBottom: "20px"
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
            marginTop: "1px",
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

    return(
    <div>
        <h1 style={titleHeader}>All Products</h1>

        {allProducts.map((product, index) => (
            <div style={productContainer}> 
                <h4 style={mainNameContainer}>{`${product.productName}`}</h4>
                <p>{`Cost Per: $${product.price}`}</p>
                <p>{`Produced by: ${product.supplier}`}</p>
                <p>{`Type: ${product.productType}`}</p>
                <p>{`Description: ${product.description}`}</p>
                <button style={buttonStyle} onClick={() => navigate(`/product/${product._id}`)}>Details</button>
                <button style={buttonStyle} onClick={() => navigate(`/product/${product._id}`)}>Edit</button>
                <button style={buttonStyle} onClick={() => navigate(`/product/${product._id}`)}>Delete</button>
            </div>
        ))}
    </div>
    )
}

export default AllProducts;