import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";

import { Header} from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";

function Cadastro(){
    return (
        <div>
            <Header> cpe </Header>
            <Title>CADASTRO</Title>
            <Formulario>
                <Input type="text" name="nome"/>
                <Input type="email" name="email" />
                <Input type="text" name="cargo" />
                <Input type="password" name="senha"  />
                <Input type="password" name="repetirSenha"/>
            </Formulario>z
        </div>
    )
}
export default Cadastro; 


//<BotaoPadrao></BotaoPadrao>