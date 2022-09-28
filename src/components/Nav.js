import { NavStyled,Logo } from "./styles/Nav.styled";
import { NavbarLink } from "./styles/Nav.styled";

const Nav = (props) => {
    return(
  <NavStyled>
    <Logo src="./images/logo.png" alt="" />
    <ul>
   <li><NavbarLink to="">Posts</NavbarLink></li> 
    <li><NavbarLink to="">Favourite Posts</NavbarLink></li>
    <li><NavbarLink to="">Add Post</NavbarLink></li>
    <li><NavbarLink to="">Login</NavbarLink></li>
    </ul>
  </NavStyled>
    );
};

export default Nav;
