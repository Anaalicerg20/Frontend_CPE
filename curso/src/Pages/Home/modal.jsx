import { BotaoDoModal, Formulario, StyledModal } from './Styles';
import { BackgroundModal } from './Styles';
import { Perg } from './Styles';
import { Fechar } from './Styles';

import { useCreateSessao } from '../../hooks/sessoes';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

import { Input } from './Styles';
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


function Modal({isOpen, children, setOpenModal}) {

    const navigate = useNavigate();

    const queryClient = useQueryClient();
    //formulario inicia escondido
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    //hooks 
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({});
    
    const { mutate: postSessao, isPending, } = useCreateSessao({
        onSuccess: () => { 
            toast.success("Usuario cadastrado com sucesso");
            queryClient.invalidateQueries({
            queryKey: ["sessoes"]
        })
            // redirecionar ou limpar mensagem de erro, por exemplo:
            navigate("/");
            },
            onError: (error) => { 
                toast.error("deu erro na criação");
               alert(error?.response?.data?.message || "Erro ao criar a sessao"); 
            },
        });
    
    //onSubmit
    const onSubmit = (data) => {
    postSessao(data);
  };
    
    if(!isOpen) return null;

         return (
            <BackgroundModal>
                <StyledModal>
                    <Fechar onClick= {() => setOpenModal(false)}>X</Fechar> 
                    
                    {!mostrarFormulario ? (
                        <>
                            {children}
                            <Perg> Deseja mesmo fazer login?</Perg>
                            <BotaoDoModal onClick= {() => setMostrarFormulario(true)}>Login</BotaoDoModal>
                        </>
                    ) : (
                         <Formulario onSubmit={handleSubmit(onSubmit)}>
                            <Input {...register("membro", { required: true })} placeholder="Membro"/>
                                {errors.membro && <p>Membro é obrigatório.</p>}

                            <Input {...register("chegada", { required: true })} type="datetime-local"/>
                                {errors.chegada && <p>Data/hora de chegada obrigatória.</p>}

                            <Input {...register("tempoInformacao", { required: true })} placeholder="00:10:00" />
                                 {errors.tempoInformacao && <p>Tempo de informação obrigatório.</p>}

                            <BotaoDoModal type="submit" disabled={isPending}> {isPending ? "Enviando..." : "Criar Sessão"} </BotaoDoModal>

                        </Formulario>
                    )}
                    
                </StyledModal>
            </BackgroundModal>
        );
}

export default Modal;
