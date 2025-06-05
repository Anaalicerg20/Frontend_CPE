import { useQuery, useMutation } from "@tanstack/react-query";
import { GetSessoes, CreateSessao, DeleteSessao } from "../service/api/endpoints";

export function useGetSessoes({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: async () => {
      const raw = await GetSessoes();
      return raw.map((sessao, index) => ({
        key: index,
        membro: sessao.id_usuario?.nome || "Nome não encontrado",
        chegada: new Date(sessao.createdAt).toLocaleString("pt-BR"),
        tempo: new Date(sessao.updatedAt).toLocaleString("pt-BR"),
      }));
    },
    onSuccess,
    onError,
  });
}

export function useCreateSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: CreateSessao,
    onSuccess,
    onError,
  });
}

export function useDeleteSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: DeleteSessao,
    onSuccess,
    onError,
  });
}