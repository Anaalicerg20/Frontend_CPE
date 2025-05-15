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
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: yellow;
  padding: 40px;

`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
padding-inline: 400px;

`;

export const Input = styled.input`
padding: 0.5rem;
margin-bottom: 3rem;
border: 1px solid #aaa;
border-radius: 4px;
font-size: 1rem;
background-color: white;
border-radius: 20px;
color: black; 
`;

export const Redirecionamento = styled.h2`
font-size: 16px;
color: white; 
text-align: center; 
font-style: italic;
margin-bottom: 40px;
`;

export const BotaoRedirecionar = styled.button`
border: none; 
color: red; 
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

export const StyleBotaoCadastro = styled.button`
display: inline-block;
  padding: 12px 24px;
  text-align: center;
  font-size: 20px;
  color: black;
  background-color: yellow;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 100px;

&:hover{
    background-color: yellowgreen;
  }
`;

export default Header;

