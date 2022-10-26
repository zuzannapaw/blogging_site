import { useContext } from "react";
import PostContext from "../../../store/post-context";
import { NavStyled, Logo, NavbarLink } from "../../styles/nav/Nav.styled";
import { FaUser } from "react-icons/fa";


const Nav = (props) => {
  const postCtx = useContext(PostContext)

  let welcomeName;

  if (postCtx.currAccount) {
    const nameArray = postCtx.currAccount.owner.split(" ")
    welcomeName = `Hello, ${nameArray[0]}`
  }

  const handleHover = function (e) {
    if (e.target.classList.contains("nav-link")) {
      const link = e.target;
      const siblings = link.closest(".nav-list").querySelectorAll(".nav-link");


      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
    }
  };

  return (
    <NavStyled onMouseOver={handleHover.bind(0.4)} onMouseOut={handleHover.bind(1)}>
      <Logo src="../../../images/logo1.png" alt="" />
      {postCtx.currAccount && <p className="welcome-name"> <FaUser className="icon-user"/> {welcomeName}</p>}
      <ul className="nav-list">
        <li><NavbarLink className="nav-link" to="/">Posts</NavbarLink></li>
        {postCtx.currAccount && <li><NavbarLink className="nav-link" to="/favorites">Favorite Posts</NavbarLink></li>}
        {postCtx.currAccount && <li><NavbarLink className="nav-link" to="/add">Add Post</NavbarLink></li>}
        {postCtx.currAccount ? <li><NavbarLink className="nav-link" onClick={postCtx.onLogout} to="/">Logout</NavbarLink></li> : <li><NavbarLink className="nav-link" to="/login">Login</NavbarLink></li>}
      </ul>
    </NavStyled>
  );
};

export default Nav;
