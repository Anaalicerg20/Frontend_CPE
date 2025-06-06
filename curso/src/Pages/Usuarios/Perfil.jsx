import React from 'react';
import { HeaderContainer } from './Styles.js';
import { Header } from './Styles.js';
import { NavItem } from './Styles.js';
import { useNavigate } from "react-router-dom";
import BotaoLogout from '../../Componentes/BotaoLogout.jsx';
import { Container, Dados, Dado, Nome, Valor } from './Styles.js';
import log from '../log/log.jsx';
import useAuthStores from "../../stores/auth.js"

function Perfil() {

 const usuario = useAuthStores((state) => state.usuario); 

  return (
    <>
    <HeaderContainer>
        <Header to= "/">cpe</Header>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/perfil">PERFIL</NavItem>
        <NavItem to="/log">USUÁRIOS</NavItem>
        <BotaoLogout />
    </HeaderContainer>

    <Container>
      <h1> Perfil </h1>
      <Nome>{usuario?.nome}</Nome>
      <Dados>
        <Dado> 
          Email: <Valor>{usuario?.email}</Valor>
        </Dado>
        <Dado> 
          Cargo: <Valor>{usuario?.cargo} </Valor>
        </Dado>
        <Dado> 
          Status: <Valor>{usuario?.status} </Valor>
        </Dado>
      </Dados>
    </Container>

    </>
   

  );

}
export default Perfil;