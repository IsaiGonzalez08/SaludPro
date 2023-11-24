import { CardLogin } from "../Components/CardLogin"
import { images } from "../assets/img"

const LoginPage =()=>{
    return(
        <>
        <div className="w-full h-full">
            <div className="grid grid-cols-2">
             <div>
                <img src={images.LoginImage}></img>
            
             </div>
             <div className="mt-[209px]">
             <CardLogin/>

             </div>
            </div>
        </div>
        </>
    )

}

export default LoginPage