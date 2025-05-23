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

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: yellow;
  padding: 40px;

`;

export const CarrosselContainer = styled.div`
  text-align: center;
  color:yellow;
  width: 60%;
  height: 60vh;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const forwardImageAnimation = keyframes`
0%{
  transform: translateX(-100px),
}
100%{
  transform: translateX(0px),
}
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${forwardImageAnimation} 2s ease;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledArrowContainer = styled.div`
  font-size: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
      background-color: #fdfae8;
      border-radius: 50%;
  }
`;