import api from "./api"

//usuarios
export async function GetUsuarios(){
    const { data } = await api.get(`/usuarios`);
    return data;
}

export async function CreateUsuario(body){
    console.log("cheguei no endpoint");
    const { data } = await api.post(`/usuarios`, body);
    console.log(data);
    return data;
}

export async function UpdateUsuario(id, body){
    const { data } = await api.put(`/usuarios:${id}`, body);
    return data;
}

export async function DeleteUsuario(){
    const { data } = await api.delete(`/usuarios:${id}`);
    return data;
}