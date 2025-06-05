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

export const TableContainer = styled.div`
.ant-table-wrapper {
    background-color: #000000; /* cor de fundo geral */
  }
.ant-table {
    background-color: #4F4F4F; /* corpo da tabela */
  }
  .ant-table-thead > tr > th {
    background-color: yellow; /* cabeçalho */
    color: #000; /* texto do cabeçalho */
    font-weight: bold;
  }
  .ant-table-tbody > tr > td {
    background-color: #363636; /* cor das linhas */
    color: white;
  }

 .ant-table-tbody > tr:hover > td {
    background-color: #f5f5f5 !important; /* impede mudança de cor ao passar o mouse */
  }

  text-align: center;
  margin: 8%;
`;

export const BotaoModal = styled.button`
  padding: 10px 20px;
  background-color: yellow;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 1100px;
`;

export const StyledModal = styled.div`
color: black;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 5%;
background-color: white;
border-radius: 10px;
text-align: center;
`;
export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; 
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const BotaoDoModal = styled.button`
  background-color: black;
  color: yellow;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 20px;
`;

export const Perg = styled.h2`
  background-color: white;
  color: black;
`;

export const Fechar = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 30px;

  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
padding-inline: 400px;
color: yellow;
padding: 15%;
font-size: 16px;
`;

export const Input = styled.input`
padding: 0.5rem;
margin: 1rem;
border: 1px solid #aaa;
border-radius: 4px;
font-size: 1rem;
background-color: white;
border-radius: 20px;
color: black; 
`;
