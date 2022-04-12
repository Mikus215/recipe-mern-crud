import React, { useState } from "react"
import InputAuth from "../InputAuth/InputAuth";
import { useDispatch } from "react-redux"
import { createUser, loginUser } from "../../../actions/userActions";
import { FormContainer, FormBox, FormHaveAccount, FormButton, ErrorMessages } from "./FormAuth.styled";
import { useNavigate } from 'react-router-dom'

const LoginRegisterForm = () => {

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    const [loginModal, setLoginModal] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleInputsChange = e => {
        setFormData(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const login = () => {
        setErrorMessage("")
        dispatch(loginUser(formData, navigation))
    }

    const register = () => {
        if (formData.name === "") return setErrorMessage("Empty name")
        if (formData.password !== formData.confirmPassword) return setErrorMessage("Passwords are not the same")
        setErrorMessage("")
        dispatch(createUser(formData, navigation))
    }

    const handleChangeForm = () => {
        setLoginModal(prevState => !prevState)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (formData.password === "") return;
        if (!emailRegex.test(formData.email) || formData.email === "") return setErrorMessage("Email is not valid")
        if (loginModal === true) return login();
        if (loginModal === false) return register();
    }

    return (
        <FormContainer>
            <h1>{loginModal ? "Login Form" : "Register Form"}</h1>
            <form onSubmit={handleSubmit}>

                <FormBox>
                    {!loginModal ? (<InputAuth type="text" name="name" value={formData.name} id="Name" handleInputsChange={handleInputsChange} />) : null}
                    <InputAuth type="text" name="email" value={formData.email} id="Email" handleInputsChange={handleInputsChange} />
                </FormBox>
                <FormBox>
                    <InputAuth type="password" name="password" value={formData.password} id="Password" handleInputsChange={handleInputsChange} />
                    {!loginModal ? (<InputAuth type="password" name="confirmPassword" value={formData.confirmPassword} id="Confirm Password" handleInputsChange={handleInputsChange} />) : null}
                </FormBox>

                <FormButton type="submit">{loginModal ? "Login" : "Register"}</FormButton>
            </form>
            <FormHaveAccount>
                <span>{loginModal ? "Dont't have account?" : "Already Have Account?"}</span> <button onClick={handleChangeForm}>{loginModal ? "Resgister Now" : "Login Now"}</button>
            </FormHaveAccount>
            <ErrorMessages>
                {errorMessage}
            </ErrorMessages>
        </FormContainer>
    );
}

export default LoginRegisterForm;