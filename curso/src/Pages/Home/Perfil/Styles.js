import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
color: black;
border: solid;
border-color: black;
background-color: yellow;
display: flex;
align-items: center;
z-index: 1000;
`;

export const Header = styled(Link)`
font-size: 4rem;
font-style: oblique;
background-color: yellow;
margin: 0;
color: black;
text-decoration: none;
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: yellow;

  flex-direction: column;
  gap:25px;
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Nome = styled.h1``

export const Dado = styled.h2``
export const Valor = styled.span`
  color: white;
`