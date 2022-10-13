import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 0.5rem;
  height: 4rem;

  ul {
    display: flex;
    flex: 2;
    justify-content: flex-end;
    list-style: none;
    margin-right: 3%;
  }

  li {
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 0.5rem;
    width: 17%;
    border-radius: 20px;
    margin: 0 1.5%;
    letter-spacing: 1px;
  }

  li:hover {
    background-color: #3a3a3a;
  }

  .welcome-name{
    margin-left: 5%;
    color:white;
    font-family:Arimo,sans-serif;
    font-weight: 500;
    font-size:0.9em;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-family: Arimo, sans-serif;
  font-weight: 500;
`;

export const Logo = styled.img`
  align-self: right;
  width: 13%;
  height: 50px;
`;

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const MainStyled = styled.main`
flex:1;
`

