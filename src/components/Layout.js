import Nav from "./Nav";
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <>
      <Nav></Nav>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
