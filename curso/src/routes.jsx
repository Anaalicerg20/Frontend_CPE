import{
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./Pages/Home/Home"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Login from "./Pages/Login/Login"
import Perfil from "./Pages/Home/Perfil";
import Usuarios from "./Pages/Home/Usuarios ";
import PrivateRoute from "./PrivateRoute";

import { AppLayout } from "./layouts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout />}>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                 <Route index element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                } />

                <Route path="perfil" element={
                    <PrivateRoute> 
                        <Perfil /> 
                     </PrivateRoute> 
                } />
                <Route path="usuarios" element={
                    <PrivateRoute>  
                        <Usuarios />  
                    </PrivateRoute>
                } />
            </Route>
        </Route>
    )
)

export default function Routes() {
    return <RouterProvider router={router} />
}