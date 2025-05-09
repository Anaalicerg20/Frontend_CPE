import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";

import { Header} from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";
import { Redirecionamento } from "./Styles";
import { BotaoRedirecionar } from "./Styles";
import { StyleBotaoCadastro } from "./Styles";

function Cadastro(){
    const navigate = useNavigate();
    return (
        <div>
            <Header> cpe </Header>
            <Title>CADASTRO</Title>
            <Formulario>
                <Input type="text" name="nome" placeholder="Nome" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="text" name="cargo" placeholder="Cargo" />
                <Input type="password" name="senha" placeholder="Senha" />
                <Input type="password" name="repetirSenha" placeholder="Repetir senha"/>
                <Redirecionamento> Já tem uma conta? Faça seu login <BotaoRedirecionar  onClick={() => navigate("/login")}> aqui </BotaoRedirecionar></Redirecionamento>
                <StyleBotaoCadastro type="submit"> CRIAR CONTA </StyleBotaoCadastro>

            </Formulario>

            <BotaoPadrao
            onClick={() => navigate("/login")}>
            </BotaoPadrao>

        </div>
    )
}
export default Cadastro; 
