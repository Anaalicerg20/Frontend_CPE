import React from 'react';
import { Header } from './Styles';
import { HeaderContainer } from './Styles';
import { NavItem } from './Styles';

function Usuarios() {
  return (
   <HeaderContainer>
        <Header>cpe</Header>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/perfil">PERFIL</NavItem>
        <NavItem to="/usuarios">USUÁRIOS</NavItem>
    </HeaderContainer>
  );
}

export default Usuarios;