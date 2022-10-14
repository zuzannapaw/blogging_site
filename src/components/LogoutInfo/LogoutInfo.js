//absolute i positions

import { LogoutInfoDiv } from "../styles/logoutInfo/logoutInfoStyled"

const LogoutInfo = () => {
    return (
        <LogoutInfoDiv>
            <div className="container">
                <h1>You have been logged out</h1>
                <p>Click Cancel to stay on this page or Ok to log again.</p>
                <div className ="button-container">
                    <button>Cancel</button>
                    <button>Ok</button>
                </div>
            </div>
        </LogoutInfoDiv>
    )
}

export default LogoutInfo