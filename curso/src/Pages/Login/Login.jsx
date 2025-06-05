import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { Header} from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";
import { Redirecionamento } from "./Styles";
import { BotaoRedirecionar } from "./Styles";
import { StyleBotaoLogin } from "./Styles";

import { useForm } from "react-hook-form";

import { useLoginUsuario } from "../../hooks/usuario";
import useAuthStores from "../../stores/auth";

function Login(){

    const setToken = useAuthStores((state) => state.setToken);

 //hooks 
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({});

    const navigate = useNavigate();

const { mutate: loginUsuario, isPending } = useLoginUsuario({

    onSuccess: (data) => {
     //   console.log("Token JWT recebido:", data.token);
       // const usuarioDecodificado = jwtDecode(data.token);
       // console.log("Usuário decodificado:", usuarioDecodificado);

    localStorage.setItem("token", data.token); // salva o token
   // setToken(data.token);
     navigate("/"); // redireciona para rota protegida (ajuste se necessário)
    },
    onError: (error) => {
    alert(error?.response?.data?.message || "Erro ao fazer login");
    }
  });


    //onSubmit
function response(data) {
   loginUsuario(data);
 }

    return (
        <div>
            <Header> cpe </Header>
                <Title> LOGIN </Title>
                <Formulario onSubmit={handleSubmit(response)}>
                    <Input {...register ("email")}type="email" name="email" placeholder="Email"/>
                    <Input {...register("senha")}type="password" name="senha" placeholder="Senha" />
                
            <Redirecionamento> Não tem login? Faça seu cadastro <BotaoRedirecionar  onClick={() => navigate("/cadastro")}> aqui </BotaoRedirecionar></Redirecionamento>
            <StyleBotaoLogin type="submit" disabled={isPending}> ENTRAR  </StyleBotaoLogin>
            </Formulario>
            
            <BotaoPadrao
            onClick={() => navigate("/cadastro")}>
            </BotaoPadrao>
        </div>
    )
}
export default Login; 