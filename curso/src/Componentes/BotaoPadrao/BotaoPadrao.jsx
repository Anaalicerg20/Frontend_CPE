import { StyleBotaoPadrao } from "./Styles";

function BotaoPadrao(props){

    return(
        <div>
            <StyleBotaoPadrao onClick={props.onClick}>
            </StyleBotaoPadrao>
        </div>
    )
}

export default BotaoPadrao