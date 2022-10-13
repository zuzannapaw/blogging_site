import Nav from "./Nav";
import Footer from "../Footer/Footer"
import { Container, MainStyled } from "../../styles/nav/Nav.styled";

const Layout = (props) => {
  return (
    <Container>
      <Nav></Nav>
      <MainStyled>{props.children}</MainStyled>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
