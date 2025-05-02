import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return (

        <div>
            Essa é a página Home
            <BotaoPadrao
            onClick={() => navigate("/login")}>
            </BotaoPadrao>
        </div>
    )
}
export default Home; 