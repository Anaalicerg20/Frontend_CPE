import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./Styles";
import { Header} from "./Styles";
import { NavItem } from "./Styles";
import { CarrosselContainer } from "./Styles";
import { StyledImage } from "./Styles";
import { StyledArrowContainer } from "./Styles";
import { ImageContainer } from "./Styles";
import { forwardImageAnimation } from "./Styles";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState } from "react";

import first from "./images/first.png";
import second from "./images/second.webp";
import third from "./images/third.jpg";
import forth from "./images/forth.jpg";
import fifth from "./images/fifth.jpg";
import sixth from "./images/sixth.jpg";
import seventh from "./images/seventh.jpg";
import eighth from "./images/eighth.jpg";
import { keyframes } from "styled-components";

const images = [first, second, third, forth, fifth, sixth, seventh, eighth];

function Home(){

    const navigate = useNavigate();

    const[currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
};

    const preImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    }


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
            
            <BotaoPadrao
            onClick={() => navigate("/cadastro")}>
            </BotaoPadrao>
        </div>
    )
}
export default Home; 