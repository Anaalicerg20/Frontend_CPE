import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
color: black;
border: solid;
border-color: black;
background-color: yellow;
display: flex;
align-items: center;
z-index: 1000;
`;

export const Header = styled.header`
font-size: 4rem;
font-style: oblique;
background-color: yellow;
margin: 0;
`;

export const NavItem = styled(Link)`
  font-family: 'Arial', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  margin-left: 300px;
  padding: 8px 12px;
  background-color: yellow;
  cursor: pointer;
position: relative;

&::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;