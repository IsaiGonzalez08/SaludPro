import { icons } from "../assets/icon"

export const CardLogin = () => {
    return(
       <>
       <div className="w-full h-full">
            <div className="flex flex-col justify-center items-center "> 
            <div>
            <h1 className="font-extrabold text-[#0D193E] text-4xl text-center ">Bienvenido de vuelta</h1>
            <p className="font-light text-base text-center mt-2">Acompaña tu salud con los mejores </p>
            <p className="font-light text-base text-center"> profesional en la salud</p>
            </div>
         <div className="form mt-12">

            <div className="">
            <p className="font-medium text-base">Correo Electrónico</p>
            <input
            type="text"
            className="border border-[#0D193E80] bg-white rounded-lg w-[466px] h-[50px] hover:border-[#0D193E]  mt-4">
            </input>
            </div>


            <div className="mt-4">
            <p className="font-medium text-base">Contraseña</p>
            <input
            type="text"
            className="border border-[#0D193E80] bg-white rounded-lg w-[466px] h-[50px] hover:border-[#0D193E] mt-4">
            </input>

            </div>

            <div className="flex flex-row ">
            <input
            type="checkbox"
            className="border border-[#0D193E80] bg-white rounded-md w-5 h-5 hover:border-[#0D193E] mt-2">
            </input>
            <p className="font-medium text-base mt-2 ml-2">Recuerda mi contraseña</p>
            </div>

            <div className="mt-12">
                <button className="rounded-xl bg-[#0D193E] w-[466px] h-[50px] text-white mt-2">
                    Iniciar Sesión
                </button>
                <p className="text-center mt-4">O</p>
                <button className="rounded-xl bg-[#0D193E] w-[466px] h-[50px] text-white mt-2">
                   <div className=" flex justify-center items-center gap-2">
                     <img src={icons.google} className="w-6 h-6 p-1"></img>
                   <p className="">
                    Continuar con Google
                </p>

            </div>
                  
                </button>
                <p className="text-center text-[#0D193E] mt-2">¿Olvidaste la contraseña?</p>
            </div>
         </div>


     </div>
       </div>

       </>
    )
}