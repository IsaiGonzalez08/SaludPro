import PropTypes from 'prop-types';

export const Card = ({img, red=false, yellow=false, white=true, Titulo }) => {
    return(
        <div className="flex flex-col w-[330px] h-[200px] bg-[#FFFFFF] gap-5 rounded-xl shadow-2xl
                        hover:scale-105 hover:duration-300">
            <div className="flex items-center gap-4 pt-5 ml-8">
                {
                    white&&
                <div className="bg-[#F5F5F5] rounded-full w-[74px] h-[74px] flex justify-center items-center">
                    <img className='w-12' src={img} alt="Card img" />
                </div>
                }
                {
                    red&&
                    <div className="bg-[#FFCCC8] rounded-full w-[74px] h-[74px] flex justify-center items-center">
                    <img className='w-12' src={img} alt="Card img" />
                    </div>

                }
                {
                    yellow&&
                    <div className="bg-[#FFF0DA] rounded-full w-[74px] h-[74px] flex justify-center items-center">
                    <img className='w-12' src={img} alt="Card img" />
                    </div>
                }

                <h2 className='font-semibold'>{Titulo}</h2>
            </div>
            <div className='ml-7'>
                <h2 className='text-sm text-[#6A6A6A]'>Lorem ipsum dolor sit amet consectetur. <br /> Consectetur nibh lectus.</h2>
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    Titulo: PropTypes.string.isRequired,
    red: PropTypes.bool,
    yellow: PropTypes.bool,
    white: PropTypes.bool

}