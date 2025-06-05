import api from "./api"

//usuarios
export async function GetUsuarios(){
    const { data } = await api.get(`/usuarios`);
    return data;
}

export async function CreateUsuario(body){

    const { data } = await api.post(`/usuarios`, body);
    console.log(data);
    return data;
}

export async function UpdateUsuario(id, body){
    const { data } = await api.put(`/usuarios:${id}`, body);
    console.log(data);
    return data;
}

export async function DeleteUsuario(){
    const { data } = await api.delete(`/usuarios:${id}`);
    console.log(data);
    return data;
}

export async function LoginUsuario(dados) {
    const { data } = await api.post('/login', dados);
    console.log(dados);
    return data;
}

//sessoes

export async function GetSessoes() {
  console.log("oi")
  const { data } = await api.get(`/sessoes`);
  console.log("tchau")
  return data;
}

export async function CreateSessao(body) {
  const { data } = await api.post(`/sessoes`, body);
  console.log(data);
  return data;
}

export async function DeleteSessao(id) {
  const { data } = await api.delete(`/sessoes/${id}`);
  console.log(data);
  return data;
}