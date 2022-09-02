import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Carrinho } from "./pages/Carrinho";
import { Home } from "./pages/Home";
;
import { Success } from "./pages/Success";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/carrinho/sucesso" element={<Success/>}/>
            </Route>
        </Routes>
    )
}