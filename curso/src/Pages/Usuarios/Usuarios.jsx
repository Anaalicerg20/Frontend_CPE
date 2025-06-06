import React from 'react';
import { Header } from './Styles.js';
import { HeaderContainer } from './Styles.js';
import { NavItem } from './Styles.js';

import BotaoLogout from '../../Componentes/BotaoLogout.jsx';
function Usuarios() {
  return (
   <HeaderContainer>
        <Header>cpe</Header>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/perfil">PERFIL</NavItem>
        <NavItem to="/usuarios">USUÁRIOS</NavItem>
         <BotaoLogout />
    </HeaderContainer>
  );
}

export default Usuarios;