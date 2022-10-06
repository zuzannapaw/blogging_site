import { useNavigate } from "react-router";
import useInput from "../../hooks/use-input"
import { LoginFormStyled } from "../styles/login/LoginStyled.styled"
import { useContext, useState } from "react";
import PostContext from "../../store/post-context";

const LoginForm = (props) => {

    const postCtx = useContext(PostContext)

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






    const submitHandler = (e) => {
        e.preventDefault();
        if (!formIsValid) {
            setFormValidInfo(<p>Enter valid mail and password</p>)
            return;
        } else {
            postCtx.onLogin({email:enteredEmail,password:enteredPassword})

            navigate("/")
        }
        passwordReset();
        emailReset();
    };


    return (
        <LoginFormStyled onSubmit={submitHandler} passwordError={passwordHasError} emailError={emailHasError}>
            <label htmlFor="email">e-mail</label>
            {emailHasError && <p>Must includes '@'.</p>}
            <input
                className="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
            />
            <label htmlFor="password">password</label>
            {passwordHasError && <p>Min. 6 characters.</p>}
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