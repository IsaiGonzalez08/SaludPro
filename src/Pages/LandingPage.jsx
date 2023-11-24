import { Header } from "../Components/Header"
import { Inicio } from "../Components/Inicio"
import { Servicio } from "../Components/Servicio"

export const LandingPage = () => {
    return(
        <div className="w-full h-full"> 
            <Header></Header>
            <Inicio></Inicio>
            <Servicio></Servicio>
        </div>
    )
}