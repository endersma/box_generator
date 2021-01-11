import React from 'react';

const Display = (props) => {
    const { color } = props;

    const boxStyle = (boxcolor) => {
        return {
        height: "100px",
        width: "100px",
        backgroundColor: boxcolor,
        display: "inline-block",
        }
    };
    console.log(boxStyle)
    return (
        <div className="container mt-3">
            <h3>Colors</h3>
            { color.map((mapcolor, index) => (
                <div style={boxStyle(mapcolor)} className="m-2" key={index}>
                    {mapcolor}
                </div> 
            ))}
        </div>
    )
}

export default Display;