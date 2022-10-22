//absolute i positions

import { useContext, useEffect, useState } from "react"
import PostContext from "../../store/post-context"
import { LogoutInfoDiv } from "../styles/logoutInfo/logoutInfoStyled"
import { useNavigate } from "react-router"

const LogoutInfo = () => {
    const [logoutInfoMove,setLogoutInfoMove] = useState(false)
    const navigate = useNavigate();

    const postCtx = useContext(PostContext)

  let logoutMoveHandler;
  
  const logoutMove = ()=>{
   setLogoutInfoMove(prevState=>!prevState);

  }

  useEffect(() => {
        if(postCtx.isLoggedOut){
        logoutMoveHandler = setInterval(logoutMove,1000);
        return()=>{
            clearInterval(logoutMoveHandler);
        }
    }

  },[]);

   

    

    const loggedOutCancelHandler = () => {
        postCtx.loggedOutCancelHandler();
        clearInterval(logoutMoveHandler);

    }

    const loggedOutOkHandler = () => {
        postCtx.loggedOutOkHandler();
        navigate("/login");
        clearInterval(logoutMoveHandler);
    }
    return (
        
            <LogoutInfoDiv logoutInfoMove={logoutInfoMove} cancelClicked ={postCtx.sLoggedOut}>
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