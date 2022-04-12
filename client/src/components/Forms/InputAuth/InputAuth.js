import React from 'react';
import { StyledFormController } from './InputAuth.styled';

const InputAuth = ({ type, name, value, id, handleInputsChange }) => {
    return (
        <StyledFormController>
            <input type={type} name={name} onChange={handleInputsChange} placeholder={id} value={value} required/>
        </StyledFormController>
    );
}

export default InputAuth;