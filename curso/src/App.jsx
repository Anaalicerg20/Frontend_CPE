import "./App.css"
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons"
function App() {

  return (
    <div>
      <div className="div-teste">
        OI
      </div>
      <input>
      </input>
      <div className="div-botao">
        <button
        className ="botao-teste"
        onClick={() => alert("Botão apertado com sucesso")}
        >
          Botão Teste 
      </button>
      </div>
      <div>
        <Button type = "primary" size = "large" shape = "round" icon = {<DownloadOutlined/>}>
          Baixar arquivo 
        </Button>
      </div>

    </div>
    
  )
}

export default App
