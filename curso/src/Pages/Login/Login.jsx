import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { Header} from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";
import { StyleBotaoLogin } from "./Styles";

function Login(){
    const navigate = useNavigate();
    return (
        <div>
            <Header> cpe </Header>
                <Title> LOGIN </Title>
                <Formulario>
                    <Input type="email" name="email" placeholder="Email" />
                    <Input type="password" name="senha" placeholder="Senha" />
                    <StyleBotaoLogin  onClick={() => navigate("/cadastro")}> ENTRAR  </StyleBotaoLogin>
                </Formulario>

            <BotaoPadrao
            onClick={() => navigate("/cadastro")}>
            </BotaoPadrao>
        </div>
    )
}
export default Login; 