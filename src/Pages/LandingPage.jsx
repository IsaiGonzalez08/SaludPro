import { Doctores } from "../Components/Doctores"
import { Header } from "../Components/Header"
import { Inicio } from "../Components/Inicio"
import { Nosotros } from "../Components/Nosotros"
import { Servicio } from "../Components/Servicio"

export const LandingPage = () => {
    return(
        <div className="w-full h-full"> 
            <Header></Header>
            <Inicio></Inicio>
            <Servicio></Servicio>
            <Nosotros></Nosotros>
            <Doctores></Doctores>
        </div>
    )
}