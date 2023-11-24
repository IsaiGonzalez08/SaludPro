import ImgNosotros from '../assets/img/ImgServicio.png'
import Flecha from '../assets/icon/Flecha2.svg'

export const Nosotros = () => {
    return(
        <div className="flex justify-center items-center gap-32 pt-32">
            <div className="">
                <img src={ImgNosotros} alt="Img Nosotros" />
            </div>
            <div className="flex flex-col">
                <p className="text-[#7C7C7C] pb-2">Cuida de ti mismo, empieza con una cita médica.</p>
                <div className="flex">
                    <div className="bg-[#ECECEC] rounded-full w-14 h-14 absolute"></div>
                    <h2 className='text-[#0D193E] text-6xl font-semibold z-30 ml-2 leading-[80px]'>¡Programa la <br /> tuya ahora!</h2>
                </div>
                <p className='pt-5'>Lorem ipsum dolor sit amet consectetur. Urna malesuada nisl sed in <br /> 
                leo nisl. Volutpat maecenas massa sed ac luctus tincidunt interdum <br /> 
                pellentesque. Interdum a enim elementum neque sapien et lectus <br /> 
                natoque. Quis ornare risus pharetra accumsan ut volutpat ut <br /> 
                elementum.
                </p>
                <div className="w-56 h-10 mt-10 flex flex-row items-center relative cursor-pointer">
                        <div className="w-10 h-10 rounded-full overflow-hidden ml-4">
                            <div className="absolute bg-[#ECECEC] w-10 h-10 rounded-full hover:w-44 transition-width duration-300 ml-5"></div>
                        </div>
                        <h2 className='text-[#0D193E] relative z-10 pt-1 font-semibold'>Generar cita</h2>
                        <img className='pl-2 relative z-11 pt-1' src={Flecha} alt="Flecha" />
                </div>
            </div>
        </div>
    )
}