import { Card } from "./Card"
import CardImg from '../assets/icon/CardImg.svg'
import Consulta from '../assets/icon/Consultas.svg'
import Diagnostico from '../assets/icon/Diagnostico.svg'

export const Servicio = () => {
    return(
        <div className="w-full h-full bg-[#F6F6F6] flex flex-col items-center pt-10
                        bg-[url('./assets/img/BackgroundInicio.png')] bg-no-repeat bg-left-bottom
                        pb-44">
            <div className="w-full h-full flex flex-col gap-5">
                <h2 className="text-[#0D193E] text-5xl font-semibold text-center">Tú salud, nuestra prioridad</h2>
                <p className="text-[#6A6A6A] text-center">Lorem ipsum dolor sit amet consectetur. Consectetur nibh lectus sit venenatis id feugiat. <br /> 
                Donec orci vulputate sit adipiscing ipsum sit vitae proin.</p>
            </div>
            <div className="flex gap-12 pt-10">
                <Card img={CardImg} Titulo="Doctores"/>
                <Card img={Consulta}
                red={true}
                white={false}
                Titulo="Consultas Medicas"/>
                <Card img={Diagnostico}
                white={false}
                yellow={true}
                Titulo="Diagnosticos"/>
            </div>
        </div>
    )
}