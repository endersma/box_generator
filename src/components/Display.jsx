import React from 'react';

const Display = (props) => {
    const { color } = props;

    const boxStyle = {
        height: "100px",
        width: "100px",
        backgroundColor: [color],
        display: "inline-block",
    };

    return (
        <div className="container mt-3">
            <h3>Colors</h3>
            { color.map((color, index) => (
                <div style={boxStyle} className="m-2" key={index}>
                    {color}
                </div> 
            ))}
        </div>
    )
}

export default Display;