import ButtonCircle from "./ButtonCricle";
import { Button } from './index';
import icons from "../util/icons";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

const {BiSolidRightArrow, PiShuffle, BsPersonPlus, IoCheckmark} = icons

const ListSingerFollower = ({data, name, isIcon, className, isShuffle, isButton}) => {
    const dispatch = useDispatch();
    const {currentUser, favoriteSinger} = useSelector(state => state.user);
    const handleFavoriteSinger = async (singer, user) => {
        try {
            const isFavorite = favoriteSinger?.some(item => item._id === singer._id);
            if (isFavorite) {
                await dispatch(actions.deleteFavoriteSinger({ singerId: singer._id }, user));
            } else {
                await dispatch(actions.updateFavoriteSinger({ singerId: singer._id }, user));
            }
        } catch (error) {
            toast.error(error);
        }
    }
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
            setLimitData(2);
        }else if (width < 800) {
            setLimitData(3);
        }else if (width < 1000) {
            setLimitData(5);
        }else {
            setLimitData(9);
        }
    }, [width]);
    return (
        <div className="w-full">
            <div className="flex items-center gap-3">
                <h2 className={`text-[44px] font-[600] ${className} max-[650px]:text-2xl max-[450px]:text-lg`}>
                    {name || "Thư viện"}
                </h2>
                <ButtonCircle className={`bg-white shadow ${isIcon} max-[650px]:h-8 max-[650px]:w-8`}>
                    <BiSolidRightArrow className="ml-[2px] text-[18px]"/>
                </ButtonCircle>
            </div>
            <div className="w-full flex items-center gap-10 mt-8 max-[750px]:mt-3">
                {data?.slice(0, limitData).map(item => (
                    <div className="w-1/5 relative max-[500px]:!w-1/2 max-[650px]:!w-1/3 max-[800px]:!w-1/4 max-[1000px]:!w-1/5" key={item._id}>
                        <NavLink to={`/singer/${item.slug}`}>
                            <div className="w-full relative rounded-[50%] overflow-hidden group">
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                                />
                                <div className={`top-0 bottom-0 left-0 right-0 absolute bg-[#0002] 
                                items-center justify-center gap-3 flex transform scale-0 transition-transform 
                                duration-500 ease-in-out group-hover:scale-100 rounded-[50%]`}>
                                </div>
                            </div>
                        </NavLink>
                        <ButtonCircle className={`absolute bg-white bottom-[24%] right-0 h-12 w-12 shadow 
                            ${isShuffle} max-[750px]:h-9 max-[750px]:w-9 max-[750px]:bottom-[30%]`}>
                            <PiShuffle className="text-2xl text-gray-600 max-[750px]:text-base"/>
                        </ButtonCircle>
                        <div className="mt-4 line-clamp-1 text-center font-medium text-gray-600 max-[750px]:text-sm">
                            {item.name}
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-2.5">
                            <div className="text-sm text-gray-500 max-[750px]:text-[12px]">30k quan tâm</div>
                            <Button 
                                onClick={() => handleFavoriteSinger(item, currentUser?._id)}
                                className={`${isButton} uppercase max-[1100px]:text-[12px] text-sm !py-1 max-[450px]:text-[10px]
                                gap-1.5 ${favoriteSinger?.some(singer => singer._id === item._id) 
                                ? '!bg-transparent !text-gray-600 border border-gray-400' 
                                : '!bg-[#0e8080]'} !font-[400] text-white`}
                            >
                                {favoriteSinger?.some(singer => singer._id === item._id) ? (
                                    <>
                                        <IoCheckmark className="text-[17px] max-[1100px]:text-sm  max-[450px]:hidden"/>
                                        đã quan tâm
                                    </>
                                ) : (
                                    <>
                                        <BsPersonPlus className="text-[17px] max-[1100px]:text-sm max-[450px]:hidden"/>
                                        quan tâm
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

ListSingerFollower.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    isIcon: PropTypes.string,
    className: PropTypes.string,
    isShuffle: PropTypes.string,
    isButton: PropTypes.node,
}

export default ListSingerFollower;