import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cadastro from "../pages/Cadastro/Cadastro"
import Login from "../pages/Login/Login"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes
