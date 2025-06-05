import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";


import { HeaderContainer } from "./Styles";
import { Header} from "./Styles";
import { NavItem } from "./Styles";
import { CarrosselContainer } from "./Styles";
import { StyledImage } from "./Styles";
import { StyledArrowContainer } from "./Styles";
import { ImageContainer } from "./Styles";
import { TableContainer } from "./Styles";
import { BotaoModal } from "./Styles";

import { forwardImageAnimation } from "./Styles";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import first from "./images/first.png";
import second from "./images/second.webp";
import third from "./images/third.jpg";
import forth from "./images/forth.jpg";
import fifth from "./images/fifth.jpg";
import sixth from "./images/sixth.jpg";
import seventh from "./images/seventh.jpg";
import eighth from "./images/eighth.jpg";
import { keyframes } from "styled-components";

import axios from "axios";

import Modal from './modal';
import React, { useState, useEffect } from "react";
import { BotaoDoModal } from './Styles';

//TABELA SESSOES
import { Button, Table } from "antd";
import { useGetSessoes } from "../../hooks/sessoes";


//CARROSSEL
const images = [first, second, third, forth, fifth, sixth, seventh, eighth];

function Home(){
 
//GET TABELA
const { data: sessoes1, isLoading } = useGetSessoes({});
console.log(sessoes1);


const navigate = useNavigate();

//CARROSSEL
    const[currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
};

    const preImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    }

const columns = [
  {
    title: 'MEMBRO',
    dataIndex: 'membro',
    key: 'membro',
  },
  {
    title: 'CHEGADA',
    dataIndex: 'chegada',
    key: 'chegada',
  },
  {
    title: 'TEMPO',
    dataIndex: 'tempo',
    key: 'tempo',
  },
];

//modal
const [ openModal, setOpenModal ] = useState(false);

//tela
    return (
        <div>
          
            <HeaderContainer>
                <Header>cpe</Header>
                <NavItem to="/">HOME</NavItem>
                <NavItem to="/perfil">PERFIL</NavItem>
                <NavItem to="/usuarios">USUÁRIOS</NavItem>
            </HeaderContainer>

            <CarrosselContainer>
                    <StyledArrowContainer onClick={preImage} >
                        <MdKeyboardArrowLeft />
                    </StyledArrowContainer>
                <ImageContainer>
                    <StyledImage src={images[currentImageIndex]}/>
                </ImageContainer>

                <StyledArrowContainer onClick={nextImage}>
                    <MdKeyboardArrowRight />
                </StyledArrowContainer>
            </CarrosselContainer>

            <TableContainer>
              <BotaoModal onClick={() => setOpenModal(true) }> Fazer Login </BotaoModal>
              <Modal isOpen={ openModal } setOpenModal={setOpenModal}></Modal>
              <Table dataSource={sessoes1} columns={columns} />
              {isLoading ? (
              <p>carregando</p>
              ) : (
              sessoes1?.map((sessao) => (
                <div key={sessao?.id}>
                  {sessao?.timestamps}
                </div>
                ))
              )}
            
            </TableContainer>
            
            <BotaoPadrao
            onClick={() => navigate("/cadastro")}>
            </BotaoPadrao>
            
        </div>
    )
}
export default Home; 