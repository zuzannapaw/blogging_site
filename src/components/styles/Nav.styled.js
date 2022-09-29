import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 0.5rem;

  ul {
    display: flex;
    flex 2;
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
    margin: 0 3%;
  }

  li:hover {
    background-color: #3a3a3a;
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
  height: 15%;
`;
