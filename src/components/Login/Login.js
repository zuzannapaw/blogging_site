import LoginForm from "./LoginForm";
import { LoginContainer, LoginCardStyled } from "../styles/login/LoginStyled.styled";


const Login = (props) => {

    return (
        <LoginContainer>
            <LoginCardStyled>
                <LoginForm />
            </LoginCardStyled>
        </LoginContainer>
    )

}

export default Login