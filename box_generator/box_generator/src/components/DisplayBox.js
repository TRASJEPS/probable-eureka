import React from 'react';

const DisplayBox = ({ color }) => {
    const boxProps = {
        backgroundColor: [color],
        width: "70px",
        height: "70px",
        display: "inline-block",
        border: "3px solid blue",
    }

    return (
        <div className="box m-1" style={ boxProps }></div>
    );
};

export default DisplayBox;