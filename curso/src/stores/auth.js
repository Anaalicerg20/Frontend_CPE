import { get } from 'react-hook-form'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { jwtDecode } from "jwt-decode";

const useAuthStores = create(
    persist(
        (set) => ({
            token: null,
            usuario: null,
            setToken:(token) => {
                const usuario = jwtDecode(token);

                set({ token, usuario });
            },

            setUsuario: (usuario) => set({ usuario }),
            clearAuth: () => set({ token: null, usuario: null}),
         }),
        {
            name:"auth",
        }
    )
)
export default useAuthStores;