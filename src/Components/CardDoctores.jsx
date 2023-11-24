import PropTypes from 'prop-types'
import Star from '../assets/icon/Star.svg'


export const CardDoctores = ({Nombre, Puntuaje, Pacientes, Ubicacion, Doctor}) => {
    return(
        <div className="flex flex-col pt-20 pb-20">
            <div className="bg-[#F2F2F2] rounded-xl w-[380px] h-[250px]">
                <div className='flex flex-row justify-around pt-8'>
                    <h2 className='text-[#363636] font-semibold text-xl'>{Nombre}</h2>
                    <div className='flex items-center'>
                        <img src={Star} alt="Star" />
                        <h2>{Puntuaje}</h2>
                    </div>
                </div>
                <div className='flex flex-row justify-around pt-5'>
                    <div className='bg-[#5E7EDD] rounded-3xl w-[170px] h-[30px] flex items-center justify-center'>
                        <h2 className='text-[#FFFFFF] font-medium'>Medico General</h2>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[#363636] text-sm font-medium'>{Pacientes}</h2>
                        <p className='font-thin text-center text-xs'>{Ubicacion}</p>
                    </div>
                </div>
                <div className='flex justify-center pt-5'>
                    <div className='bg-[#FFFFFF] rounded-full w-[200px] h-[200px] z-30 flex items-center justify-center'>
                        <img className='w-[170px]' src={Doctor} alt="Doctor Img" />
                    </div>
                </div>
            </div>
            <div className="bg-[#FFFFFF] w-[380px] h-[100px]"></div>
        </div>
    )
}

CardDoctores.propTypes = {
    Nombre: PropTypes.string.isRequired,
    Puntuaje: PropTypes.string.isRequired,
    Pacientes: PropTypes.string.isRequired,
    Ubicacion: PropTypes.string.isRequired,
    Doctor: PropTypes.string.isRequired,
}