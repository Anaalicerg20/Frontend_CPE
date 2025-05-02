import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    return (
        <div>
            Essa é a página Login 
            <BotaoPadrao
            onClick={() => navigate("/")}>
            </BotaoPadrao>

        </div>
    )
}
export default Login; 