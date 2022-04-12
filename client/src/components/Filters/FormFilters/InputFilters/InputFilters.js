import React from 'react'
import { InputFilter } from './InputFilters.styled';

const InputFilters = ({type, handleChangeTypeFood}) => {
    return ( 
        <InputFilter>
            <input type="radio" name="typeOfFood" id={type} value={type} onClick={handleChangeTypeFood}/>
            <label htmlFor={type}>{type}</label>
        </InputFilter>
     );
}
 
export default InputFilters;