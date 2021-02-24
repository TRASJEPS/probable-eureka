import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

const OneProduct = (props) => {
 
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:5555/api/products/" + props.id)  //MAKE SURE HOST IS CORRECT
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
 
    function goBack() {
    //     console.log("USING GO BACK!")
    //    console.log(window.history)
        window.history.back();
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
            // Tying to make it perfect center but center does not work
            // horizontalAlign: "center",
            align: "vertial",
            // border: "2px solid rgb(176, 217, 255)",
            // display: "inline-block"
};

    return(
    <div>
        <h2 style={titleHeader}>{`${product.supplier} - ${product.productName} Details`}</h2>

        <div style={productContainer}>
        <div>
            <label>{`Product Name: ${product.productName}`}</label>
        </div>
        <div>
            <label>{`Supplier: ${product.supplier}`}</label>
        </div>
        <div>
            <label>{`Product Type: ${product.productType}`}</label>
        </div>
        <div>
            <label>{`Price Per: $${product.price}`}</label>
        </div>
        <div>
            <p>{`Description: ${product.description}`}</p>
        </div>
        {/* REMOVE THE () AND CHANGE SO IT WILL BE WHEN THE CLICK OCCURS  */}
        <button onClick={goBack} style={buttonStyle} type="submit">Go Back</button>
        </div>
    </div>
 )
 
}



export default OneProduct;