import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./Styles";
import { Header} from "./Styles";
import { Title } from "./Styles";
import { NavItem } from "./Styles";
import { CarrosselContainer } from "./Styles";
import { StyledImage } from "./Styles";
import { StyledArrowContainer } from "./Styles";
import { ImageContainer } from "./Styles";
import { MdKeyboardArrowRight } from "react-icons/md";
import React ,{useState} from "react";


function Home(){
    const navigate = useNavigate();
    const[currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <div>

            <HeaderContainer>
                <Header>cpe</Header>
                <NavItem to="/">HOME</NavItem>
                <NavItem to="/perfil">PERFIL</NavItem>
                <NavItem to="/usuarios">USUÁRIOS</NavItem>
            </HeaderContainer>

            <Title> HOME </Title>
            <CarrosselContainer>
                <ImageContainer>
                    <StyledImage src='https://imgworldsofadventure.com/themes/front/image/ticket-list.jpg'/>
                </ImageContainer>
                <StyledArrowContainer>
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