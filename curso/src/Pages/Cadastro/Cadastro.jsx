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
        watch,
        formState: { errors },
    } = useForm({});

    const { mutate: postUsuario, isPending, } = useCreateUsuario({
        onSuccess: (data) => {
        // redirecionar ou limpar mensagem de erro, por exemplo:
        navigate("/login");
        },
        onError: (error) => {
           alert(error?.response?.data?.message || "Erro ao fazer o cadastro"); 
        }
    });


    //onSubmit
    function response(data) {
        postUsuario( data);
    }

    //senha
    const senha = watch("senha");

    const navigate = useNavigate();

    return (
        <div>
            <Header> cpe </Header>
            <Title>CADASTRO</Title>
            <Formulario 
            onSubmit={handleSubmit(response)}>
                <Input {...register("nome", { required: "Nome é obrigatório" })} type="text" name="nome" placeholder="Nome" /> {errors.nome && <p>{errors.nome.message}</p>}
                <Input {...register ("email", {
                        required: "Email é obrigatório",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email inválido",
                        },
                    })}type="email" name="email" placeholder="Email" /> {errors.email && <p>{errors.email.message}</p>}
                <Input {...register("cargo", { required: "Cargo é obrigatório" })}type="text" name="cargo" placeholder="Cargo" />  {errors.cargo && <p>{errors.cargo.message}</p>}
                <Input {...register("senha", {
                        required: "Senha é obrigatória",
                        minLength: {
                            value: 6,
                            message: "Senha deve ter pelo menos 6 caracteres",
                        },
                    })}type="password" name="senha" placeholder="Senha" />  {errors.senha && <p>{errors.senha.message}</p>}
                <Input {...register("repetirSenha", {
                        required: "Confirmação da senha é obrigatória",
                        validate: (value) =>
                            value === senha || "As senhas não coincidem",
                    })}type="password" name="repetirSenha" placeholder="Repetir senha"/> {errors.repetirSenha && <p>{errors.repetirSenha.message}</p>}
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
