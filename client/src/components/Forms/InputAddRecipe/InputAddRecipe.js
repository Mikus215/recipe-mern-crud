import React from 'react';

const InputAddRecipe = ({ type, name, value, id, handleInputsChange }) => {
    return (
        <>
            <label htmlFor={id}>{id}</label>
            <input type={type} name={name} onChange={handleInputsChange} id={id} value={value} required/>
        </>
    );
}

export default InputAddRecipe;