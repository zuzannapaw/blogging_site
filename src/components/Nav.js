import { NavStyled,Logo } from "./styles/Nav.styled";
import { NavbarLink } from "./styles/Nav.styled";

const Nav = (props) => {
    return(
  <NavStyled>
    <Logo src="./images/logo1.png" alt="" />
    <ul>
   <li><NavbarLink to="/">Posts</NavbarLink></li> 
    <li><NavbarLink to="/favorites">Favorite Posts</NavbarLink></li>
    <li><NavbarLink to="/login">Login</NavbarLink></li>
      {/* <li><NavbarLink to="">Add Post</NavbarLink></li> if logged */}
    </ul>
  </NavStyled>
    );
};

export default Nav;
