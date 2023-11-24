import Logo from '../assets/icon/Logo.svg'

export const Header = () => {
    return(
        <header className="w-full h-[100px] flex justify-around items-center gap-32">
            <div className="flex items-center gap-3">
                <img src={Logo} alt="Logo header" />
                <h2 className="flex">
                    <span className="text-[#0D193E] font-light">Salud</span>
                    <span className="text-[#0D193E] font-bold">Pro</span>
                </h2>
            </div>
            <div className='flex gap-10'>
                <a className="text-[#6A6A6A] hover:font-bold hover:duration-300" href="">Inicio</a>
                <a className="text-[#6A6A6A] hover:font-bold hover:duration-300" href="">Servicio</a>
                <a className="text-[#6A6A6A] hover:font-bold hover:duration-300" href="">Nosotros</a>
            </div>
            <div>
                <button className='text-[#FFFFFF] bg-[#0D193E] 
                w-[120px] h-[35px] text-sm font-medium
                hover:scale-105 hover:duration-300'>
                Comenzar
                </button>
            </div>
        </header>
    )
}