import { styled } from "styled-components";

export const Header = styled.header`
   font-size: 4rem;
    color: black;
    border: solid;
    border-color: black;
    background-color: yellow;
    font-style: oblique;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: yellow;

`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
padding: 0.5rem;
border: 1px solid #aaa;
border-radius: 4px;
font-size: 1rem;
`;

export default Header;
