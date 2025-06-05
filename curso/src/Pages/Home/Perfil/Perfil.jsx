import React from 'react';
import { HeaderContainer } from './Styles';
import { Header } from './Styles';
import { NavItem } from './Styles';

function Perfil() {
  return (
   <HeaderContainer>
        <Header to= "/">cpe</Header>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/perfil">PERFIL</NavItem>
        <NavItem to="/usuarios">USUÁRIOS</NavItem>
    </HeaderContainer>
  );
}

export default Perfil;