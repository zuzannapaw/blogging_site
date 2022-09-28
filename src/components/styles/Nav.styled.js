import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 1.5rem;

  ul {
    display: flex;
    flex:2;
    align-items: center;
    justify-content: space-around;
    list-style: none;
  }

  li {
    color: white;
  }
`;

export const NavbarLink = styled(NavLink)`
 color:white;
 text-decoration: none;
 `

export const Logo = styled.img`
  align-self: right;
  width:10%;
  height:10%;
`;
