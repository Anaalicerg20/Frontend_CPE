import { useQuery, useMutation } from "@tanstack/react-query";
import { GetUsuarios, LoginUsuario, CreateUsuario, UpdateUsuario, DeleteUsuario } from "../service/api/endpoints";

export function useGetUsuarios({ onSuccess = () => {}, onError = () => {}, } = {} ){
   return useQuery({ 
        queryKey: ["usuarios"],
        queryFn: GetUsuarios, 
        onSuccess, 
        onError, 
    });  
}
export function useCreateUsuario({ onSuccess = () => {}, onError = () => {}, } = {} ) {
    return useMutation({ mutationFn: CreateUsuario, onSuccess, onError }); 
}

export function useUpdateUsuario({ onSuccess = () => {}, onError = () => {}, } = {} ) {
    return useMutation({ mutationFn: UpdateUsuario, onSuccess, onError }); 
}

export function useDeleteUsuario({ onSuccess = () => {}, onError = () => {}, } = {} ) {
    return useMutation({ mutationFn: DeleteUsuario, onSuccess, onError }); 
}

export function useLoginUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
    return useMutation({ mutationFn: LoginUsuario, onSuccess, onError });
}