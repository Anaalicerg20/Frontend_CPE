import { useNavigate } from "react-router-dom";

function BotaoLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token JWT
    // Limpar outros dados se necessário, como:
    // localStorage.removeItem("usuario");

    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
      Sair
    </button>
  );
}

export default BotaoLogout;