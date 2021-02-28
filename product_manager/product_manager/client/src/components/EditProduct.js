import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

const EditProduct = (props) => {

    const [ productName, setProductName ] = useState("");
    const [ supplier, setSupplier ] = useState("");
    const [ productType, setProductType ] = useState("Hardware");  //AUTOMATICALLY STARTS AS STANDARD IN THIS CASE
    const [ price, setPrice ] = useState("");  // SET AS A NUMBER BUT USE AN EMPTY STRING SO CONSOLE PLAYS NICE
    const [ description, setDescription ] = useState("");

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:5555/api/products/" + props.id)  //MAKE SURE HOST IS CORRECT
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
 
    function goBack() {
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
        <h2 style={titleHeader}>Edit </h2>
        {/* <form style={productContainer} onSubmit = {submitForm}>
        <div>
            <label>Product Name</label>
            <input style={inputTextPadding} type="text" name="productName" value={productName} onChange={(event) => setProductName(event.target.value)}></input>
        </div>
        <div>
            <label>Supplier</label>
            <input style={inputTextPadding} type="text" name="supplier"  value={supplier} onChange={(event) => setSupplier(event.target.value)}></input>
        </div>
        <div>
            <label>Product Type</label>
            <select style={inputTextPadding} type="text" name="productType" value={productType} onChange={(event) => setProductType(event.target.value)}>
                <option value="Hardware">Hardware</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Software">Software</option>
                <option value="Furnature">Furnature</option>
                <option value="Clothing">Clothing</option>
                <option value="Medicine">Medicine</option>
                <option value="Chemicals">Chemicals</option>
                <option value="Electronics">Electronics</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div>
            <label>Price Per</label>
            <input style={inputTextPadding} type="number" name="price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
        </div>
        <div>
            <div style={inputPadDesc}><label >Description:</label></div>
            <textarea style={textAreaPadding} type="text" name="description" value={description} rows={10} onChange={(event) => setDescription(event.target.value)}></textarea>
        </div>
        
        <button style={buttonStyle} type="submit">Add New Product</button>
        </form> */}
    </div>
 )
}

export default EditProduct;