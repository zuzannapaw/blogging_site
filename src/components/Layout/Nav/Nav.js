import { useContext } from "react";
import PostContext from "../../../store/post-context";
import { NavStyled,Logo,NavbarLink } from "../../styles/nav/Nav.styled";

const Nav = (props) => {
  const postCtx = useContext(PostContext)

  let welcomeName;

  if(postCtx.currAccount){
    const nameArray = postCtx.currAccount.owner.split(" ")
    welcomeName = `Hello, ${nameArray[0]}`
  }

    return(
  <NavStyled>
    <Logo src="./images/logo1.png" alt="" />
    {postCtx.currAccount && <p className="welcome-name">{welcomeName}</p>}
    <ul>
   <li><NavbarLink to="/">Posts</NavbarLink></li> 
    {postCtx.currAccount && <li><NavbarLink to="/favorites">Favorite Posts</NavbarLink></li>}
    {postCtx.currAccount && <li><NavbarLink to="/add">Add Post</NavbarLink></li>}
    {postCtx.currAccount ? <li><NavbarLink onClick={postCtx.onLogout} to="/">Logout</NavbarLink></li> : <li><NavbarLink to="/login">Login</NavbarLink></li>}
    </ul>
  </NavStyled>
    );
};

export default Nav;
