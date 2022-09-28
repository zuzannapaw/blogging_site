import Nav from "./Nav";

const Layout = (props) => {
  return (
    <>
      <Nav></Nav>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
