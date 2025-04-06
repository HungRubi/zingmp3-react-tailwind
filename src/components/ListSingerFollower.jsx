import ButtonCircle from "./ButtonCricle";
import { Button } from './index';
import icons from "../util/icons";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { toast } from 'react-toastify';

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

    return (
        <div className="w-full">
            <div className="flex items-center gap-3">
                <h2 className={`text-[44px] font-[600] ${className}`}>
                    {name || "Thư viện"}
                </h2>
                <ButtonCircle className={`bg-white shadow ${isIcon}`}>
                    <BiSolidRightArrow className="ml-[2px] text-[18px]"/>
                </ButtonCircle>
            </div>
            <div className="w-full flex items-center gap-10 mt-8">
                {data?.map(item => (
                    <div className="w-1/5 relative" key={item._id}>
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
                        <ButtonCircle className={`absolute bg-white bottom-[24%] right-0 h-12 w-12 shadow ${isShuffle}`}>
                            <PiShuffle className="text-2xl text-gray-600"/>
                        </ButtonCircle>
                        <div className="mt-4 line-clamp-1 text-center font-medium text-gray-600">
                            {item.name}
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-2.5">
                            <div className="text-sm text-gray-500">30k quan tâm</div>
                            <Button 
                                onClick={() => handleFavoriteSinger(item, currentUser?._id)}
                                className={`${isButton} uppercase text-sm !py-1 gap-1.5 ${favoriteSinger?.some(singer => singer._id === item._id) ? '!bg-transparent !text-gray-600 border border-gray-400' : '!bg-[#0e8080]'} !font-[400] text-white`}
                            >
                                {favoriteSinger?.some(singer => singer._id === item._id) ? (
                                    <>
                                        <IoCheckmark className="text-[17px]"/>
                                        đã quan tâm
                                    </>
                                ) : (
                                    <>
                                        <BsPersonPlus className="text-[17px]"/>
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