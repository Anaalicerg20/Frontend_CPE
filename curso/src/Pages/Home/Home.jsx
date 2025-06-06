import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";


import { HeaderContainer, Header, NavItem, CarrosselContainer, StyledImage, StyledArrowContainer, ImageContainer, TableContainer, BotaoModal } from "./Styles";
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
import { useGetUsuarios } from "../../hooks/usuario";
import { useQueryClient } from '@tanstack/react-query';


//CARROSSEL
const images = [first, second, third, forth, fifth, sixth, seventh, eighth];

function Home(){
 
//GET TABELA
const { data: sessoes, isLoading } = useGetSessoes({});
const { data: usuarios } = useGetUsuarios({});

const navigate = useNavigate();
const queryClient = useQueryClient();

//CARROSSEL
    const[currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
};

    const preImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    }

// Função para calcular o tempo desde o login
  function calcularTempo(createdAt) {
    if (!createdAt) return "";
    const agora = new Date();
    const inicio = new Date(createdAt);
    const diffMs = agora - inicio;
    const diffMin = Math.floor(diffMs / 60000);
    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;
    return `${horas}h ${minutos}min`;
  }

  // Atualizar a tabela a cada minuto para atualizar o tempo logado
  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: ["sessoes"] });
    }, 60000); // 60 segundos

    return () => clearInterval(interval);
  }, [queryClient]);


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
console.log("Sessoes:", sessoes);

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
               <BotaoModal onClick={() => setOpenModal(true)}>
                 {" "}
                  Fazer Login{" "}
                </BotaoModal>
             <Modal isOpen={openModal} setOpenModal={setOpenModal} usuarios={usuarios} />
              ;
              <Table
              dataSource={sessoes?.map((s) => ({
              key: s._id, 
              membro: s.id_usuario?.nome || "Desconhecido",
              chegada: new Date(s.createdAt).toLocaleString("pt-BR"),
              tempo: calcularTempo(s.createdAt),
              }))}
              columns={columns}
              loading={isLoading}
              />
      </TableContainer>
            
            <BotaoPadrao
            onClick={() => navigate("/cadastro")}>
            </BotaoPadrao>
            
        </div>
    )
}
export default Home; 