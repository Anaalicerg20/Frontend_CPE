import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { Header } from "./Styles";
import { Title } from "./Styles";
import { Formulario } from "./Styles";
import { Input } from "./Styles";
import { Redirecionamento } from "./Styles";
import { BotaoRedirecionar } from "./Styles";
import { StyleBotaoLogin } from "./Styles";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";

import { useLoginUsuario } from "../../hooks/usuario";
import useAuthStores from "../../stores/auth";

function Login() {
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
      localStorage.setItem("token", data.token); // salva o token
      setToken(data.token); // Agora você pode armazenar o token no store
      navigate("/"); // redireciona para a página inicial ou página protegida
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Erro ao fazer login"); // Exibição de erro via toast
    },
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
        <Input
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          {...register("senha")}
          type="password"
          name="senha"
          placeholder="Senha"
        />

        <Redirecionamento>
          {" "}
          Não tem login? Faça seu cadastro{" "}
          <BotaoRedirecionar onClick={() => navigate("/cadastro")}>
            {" "}
            aqui{" "}
          </BotaoRedirecionar>
        </Redirecionamento>
        <StyleBotaoLogin type="submit" disabled={isPending}>
          {isPending ? "Entrando..." : "ENTRAR"}
        </StyleBotaoLogin>
      </Formulario>

      <BotaoPadrao onClick={() => navigate("/cadastro")}></BotaoPadrao>
    </div>
  );
}
export default Login;
