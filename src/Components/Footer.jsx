import Logo from '../assets/icon/Logo.svg';
import Twitter from '../assets/icon/Twitter.svg';
import Linkedln from '../assets/icon/Link.svg';
import Github from '../assets/icon/GitHub.svg';


export const Footer = () => {
    return(
        <footer className="flex flex-row justify-between w-full h-full overflow-hidden bg-[#D9D9D9] pt-36 pb-10">
            <div className="flex flex-col items-end ml-32">
                <div className="flex flex-row justify-around mr-10">
                    <div className="">
                        <img className='' src={Logo}/>
                    </div>
                    <div className="flex items-center">
                        <h2 className='ml-3 text-xl'>
                            <span className='text-[#4B4B4B] font-light'>Salud</span>
                            <span className='text-[#4B4B4B] font-semibold'>Pro</span>
                        </h2>
                    </div>   
                </div>
                <div className="pt-2">
                    <h2 className='text-[#2C2C2C] mr-9 font-light'>Copyright © 2023</h2>
                </div>
                <div className='pt-2 mr-6'>
                    <h4 className='text-[#2C2C2C] font-medium text-xs'>Tú salud, nuestra prioridad</h4>
                </div>
            </div>
            <div className="flex flex-col items-end mt-16 pr-32">
                <div className="flex flex-row"></div>
                <div className='w-[100vh] h-[1px] bg-[#2C2C2C]'></div>
                <div className="flex flex-row">
                    <h4 className='text-[#2C2C2C] pt-4 font-light'>Siguenos en nuestras redes sociales</h4>
                    <div className="flex flex-row pt-3 pl-10 gap-5">
                        <img src={Twitter}/>
                        <img src={Linkedln}/>
                        <img src={Github}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}