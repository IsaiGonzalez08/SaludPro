import { CardDoctores } from "./CardDoctores"
import Doctor from '../assets/img/Doctor.png'
import Doctor2 from '../assets/img/Doctor2.png'
import Doctor3 from '../assets/img/Doctor3.png'

export const Doctores = () => {
    return(
        <div className="flex flex-col items-center pt-40">
            <h2 className="text-[#0D193E] font-medium text-5xl">Conoce a nuestros doctores</h2>
            <p className="text-center text-[#6A6A6A] pt-3">Lorem ipsum dolor sit amet consectetur. Amet duis lacus semper risus rhoncus orci pretium lectus et. Enim <br /> 
            egestas id tincidunt viverra egestas amet netus in. </p>
            <div className="flex flex-row gap-14">
                <CardDoctores Nombre="Dr. Robert DeNiro" Puntuaje="4.8(450)" Pacientes="+5500 pacientes" Ubicacion="Suchiapa,Chis" Doctor={Doctor}/>
                <CardDoctores Nombre="Dr. Jhon Kennedy" Puntuaje="4.3(230)" Pacientes="+1100 Pacientes" Ubicacion="Suchiapa,Chis" Doctor={Doctor2}/>
                <CardDoctores Nombre="Dra. Esther Sola" Puntuaje="4.7(530)" Pacientes="+2300 Pacientes" Ubicacion="Suchiapa,Chis" Doctor={Doctor3}/>
            </div>
        </div>
    )
}