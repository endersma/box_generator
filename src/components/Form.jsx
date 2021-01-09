import React, {useState} from 'react';

const Form = (props) => {
    const {color, setColor} = props;
    const [newColor, setNewColor] = useState([]);

    const addColor = (e) => {
        e.preventDefault();
        setColor([ ...color, newColor])
    }

    return(
        <div className="container mt-5">
            <form onSubmit={ addColor }>
                <div className={"row g-1"}>
                    <label 
                        className={"col-sm-2 col-form-label"} 
                        htmlFor={'setColor'}
                    >Color
                    </label>
                    <div className="col-sm-6">
                        <input 
                            className="form-control"
                            type="text"
                            name="setColor"
                            onChange={(e) => setNewColor(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button 
                            type="submit"
                            className="btn btn-primary"
                        >Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;