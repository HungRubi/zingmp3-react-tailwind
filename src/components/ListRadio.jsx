import icons from "../util/icons";
import {ButtonPlay} from '../components'
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const {MdOutlineArrowForwardIos, FaPlay} = icons;

const ListRadio = ({data, isName}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [limitData, setLimitData] = useState(9);

    useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth); // luôn update width mới nhất
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if(width < 500) {
            setLimitData(2);
        }else if (width < 650) {
            setLimitData(3);
        }else if (width < 800) {
            setLimitData(5);
        }else if (width < 1000) {
            setLimitData(6);
        }else {
            setLimitData(9);
        }
    }, [width]);
    return (
        <div className="w-full mt-10 max-[550px]:mt-5">
            <div className={`w-full flex items-center justify-between ${isName}`}>
                <h2 className={`capitalize text-2xl font-medium`}>
                    radio nổi bật
                </h2>
                <div className={`flex gap-2.5 items-center text-[15px] text-gray-500 cursor-pointer font-[500] max-[550px]:text-[12px]`}>
                    <h5 className='uppercase'>tất cả</h5>
                    <MdOutlineArrowForwardIos/>
                </div>
            </div>
            <div className="w-full mt-8 flex items-center gap-10 max-[550px]:mt-2">
                {data?.slice(0, limitData).map(item => (
                    <div key={item._id} className="w-1/6 max-[500px]:w-1/2 max-[650px]:w-1/3 max-[800px]:w-1/4 max-[1000px]:w-1/5">
                        <div className="w-full relative">
                            <div className="w-full relative rounded-[50%] overflow-hidden group border-5 border-red-500">
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="w-full object-cover transform transition-transform 
                                    duration-500 ease-in-out group-hover:scale-120"
                                />
                                <div className={`top-0 bottom-0 left-0 right-0 absolute bg-hover-music 
                                items-center justify-center gap-3 flex transform scale-0 transition-transform 
                                duration-500 ease-in-out group-hover:scale-100 rounded-[50%]`}>
                                    <ButtonPlay className="text-white !h-11 !w-11 flex-none">
                                        <FaPlay className="ml-1" />
                                    </ButtonPlay>
                                </div>
                            </div>
                            <div className="bg-red-500 rounded-lg text-center uppercase absolute text-sm px-3 font-medium text-white bottom-[-5px] left-1/2 transform -translate-x-1/2">
                                live
                            </div>
                            <div className="absolute w-[36%] rounded-[50%] top-[55%] left-[75%] transform">
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="rounded-[50%]" 
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-center leading-3">
                            <h5 className="capitalize text-lg font-medium line-clamp-1">{item.name}</h5>
                            <span className="text-sm text-gray-500 line-clamp-2">458 đang nghe</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

ListRadio.propTypes = {
    data: PropTypes.node.isRequired,
    isName: PropTypes.node.isRequired,
}

export default ListRadio