import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";

import { Header} from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";
import { Redirecionamento } from "./Styles";
import { BotaoRedirecionar } from "./Styles";
import { StyleBotaoCadastro } from "./Styles";

import { useForm } from "react-hook-form";
import {useCreateUsuario } from "../../hooks/usuario";

function Cadastro(){

   //hooks 
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({});

    const { mutate: postUsuario, inPending, } = useCreateUsuario({});


    //onSubmit
    function response(data){

        postUsuario(data);
        console.log(data);
    }

    const navigate = useNavigate();
    return (
        <div>
            <Header> cpe </Header>
            <Title>CADASTRO</Title>
            <Formulario 
            onSubmit={handleSubmit(response)}>
                <Input {...register("nome")} type="text" name="nome" placeholder="Nome" />
                <Input {...register ("email")}type="email" name="email" placeholder="Email" />
                <Input {...register("cargo")}type="text" name="cargo" placeholder="Cargo" />
                <Input {...register("senha")}type="password" name="senha" placeholder="Senha" />
                <Input {...register("repetirSenha")}type="password" name="repetirSenha" placeholder="Repetir senha"/>
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
