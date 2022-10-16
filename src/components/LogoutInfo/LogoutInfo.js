//absolute i positions

import { useContext, useState } from "react"
import PostContext from "../../store/post-context"
import { LogoutInfoDiv } from "../styles/logoutInfo/logoutInfoStyled"
import { useNavigate } from "react-router"
import CSSTransition from "react-transition-group/CSSTransition";


const animationTiming = {
    exit: 400,
  };

const LogoutInfo = () => {
    const [cancelWasClicked, setCancelWasClicked] = useState(false);
    const navigate = useNavigate();

    const postCtx = useContext(PostContext);

    const loggedOutCancelHandler = () => {
        // setCancelWasClicked(false);
        postCtx.loggedOutCancelHandler();

    }

    const loggedOutOkHandler = () => {
        postCtx.loggedOutOkHandler();
        navigate("/login")
    }
    return (
        
            <LogoutInfoDiv cancelClicked ={postCtx.sLoggedOut}>
                <div className="container">
                    <h1>You have been logged out</h1>
                    <p>Click Cancel to stay on this page or Ok to log again.</p>
                    <div className="button-container">
                        <button onClick={loggedOutCancelHandler}>Cancel</button>
                        <button onClick={loggedOutOkHandler}>Ok</button>
                    </div>
                </div>
            </LogoutInfoDiv>
      
    )
}

export default LogoutInfo

// cancelClicked={cancelWasClicked}