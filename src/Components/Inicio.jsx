import Flecha from '../assets/icon/Flecha.svg'
import ImgInicio from '../assets/icon/ImageInicio.svg'
//import Doctores from '../assets/icon/Doctors.svg'

export const Inicio = () => {
    return(
        <div className="flex flex-col items-center pt-12 pb-40"> 
            <div className='flex justify-center'>
                <h2 className='font-bold text-7xl text-center'>
                    Cuando necesitas respuestas,<br/> 
                    <img src='' alt="" /> ¿sabes a quién consultar?
                </h2>
            </div>
            <div className="flex gap-32 pt-5">
                <div className="flex flex-col pt-14">
                    <h2>Lorem ipsum dolor sit amet consectetur. Dui massa a <br /> 
                    tempor amet sodales augue adipiscing enim at. Eget <br /> 
                    est diam convallis fringilla vestibulum sed vivamus <br /> bibendum.
                    </h2>
                    <div className="flex pt-3">
                        <button className='w-[220px] bg-[#0D193E] h-[35px] text-[#FFFFFF] font-medium
                                            hover:scale-105 hover:duration-300'>
                            Comenzar
                        </button>
                        <button className="flex w-[220px] h-[35px] justify-center items-center font-semibold">
                            Saber más <img src={Flecha} alt="Flecha saber más" />
                        </button>
                    </div>
                    <div className='flex justify-center gap-24 pt-20'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-[#1D388A] text-7xl font-semibold'>+5K</h2>
                            <p className='text-[#434343] font-semibold'>Pacientes felices</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-[#1D388A] text-7xl font-semibold'>+10K</h2>
                            <p className='text-[#434343] font-semibold'>Casos exitosos</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='h-[450px]' src={ImgInicio} alt="Img Inicio" />
                </div>
            </div>
        </div>
    )
}