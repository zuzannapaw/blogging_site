import { useNavigate } from "react-router";
import useInput from "../../hooks/use-input"
import { LoginFormStyled } from "../styles/login/LoginStyled.styled"
import { useState } from "react";

const LoginForm = (props) => {

    const [formValidInfo, setFormValidInfo] = useState("")

    const navigate = useNavigate()
    const {
        value: enteredEmail,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput((value) => value !== "" && value.includes('@'));

    const {
        value: enteredPassword,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset,
    } = useInput((value) => value !== "" && value.length > 6);

    let formIsValid = false;

    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }

    const errorEmail = emailHasError;
    const errorPassword = passwordHasError;

    console.log(errorEmail)




    const submitHandler = (e) => {
        e.preventDefault();
        if (!formIsValid) {
            setFormValidInfo(<p>Enter valid mail and password</p>)
            return;
        } else {
            navigate("/")
        }
        passwordReset();
        emailReset();
    };


    return (
        <LoginFormStyled onSubmit={submitHandler} passwordError={errorPassword} emailError={errorEmail}>
            <label htmlFor="email">e-mail</label>
            {emailHasError && <p>E-mail must includes '@'</p>}
            <input
                className="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
            />
            <label htmlFor="password">password</label>
            {passwordHasError && <p>Password must be longer</p>}
            <input
                className="password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
            />
            <button type="submit">Login</button>
            {formValidInfo}
        </LoginFormStyled>
    )



}

export default LoginForm