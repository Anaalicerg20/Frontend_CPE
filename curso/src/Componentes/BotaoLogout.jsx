import { useNavigate } from "react-router-dom";
import useAuthStores  from "../stores/auth";

function BotaoLogout() {
  const navigate = useNavigate();

  const  clearAuth = useAuthStores((state) => state.clearAuth);

  const handleLogout = () => {
    clearAuth();
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
      Sair
    </button>
  );
}

export default BotaoLogout;