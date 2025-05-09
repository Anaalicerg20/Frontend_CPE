import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { Header} from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";
import { Redirecionamento } from "./Styles";
import { BotaoRedirecionar } from "./Styles";
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
                    <Redirecionamento> Não tem login? Faça seu cadastro <BotaoRedirecionar  onClick={() => navigate("/cadastro")}> aqui </BotaoRedirecionar></Redirecionamento>
                    <StyleBotaoLogin  onClick={() => navigate("/cadastro")}> ENTRAR  </StyleBotaoLogin>
                </Formulario>

            <BotaoPadrao
            onClick={() => navigate("/")}>
            </BotaoPadrao>
        </div>
    )
}
export default Login; 