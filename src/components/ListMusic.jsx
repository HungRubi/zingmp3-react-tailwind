import {ButtonCricle, ButtonPlay} from '../components'
import PropTypes from 'prop-types';
import icons from "../util/icons"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { toast } from 'react-toastify';
const { FaRegHeart, FaHeart, BsThreeDots, MdOutlineArrowForwardIos, FaPlay } = icons

const ListMusic = ({isSinger, classCard, classListCard, classSub, nameList, classIcon, isAbum, isFan, dataSinger, data, type, classWrapper}) => {
    const dispatch = useDispatch();
    const {currentUser, favoriteAlbum, favoriteSong} = useSelector(state => state.user);
    const { currentSongId, isPlaying } = useSelector(state => state.music);
    
    const handleFavoriteAlbum = async (item, user) => {
        try {
            const isFavorite = favoriteAlbum?.some(album => album._id === item._id);
            if (isFavorite) {
                await dispatch(actions.deleteFavoriteAlbum({ albumId: item._id }, user));
            } else {
                await dispatch(actions.updateFavoriteAlbum({ albumId: item._id }, user));
            }
        } catch (error) {
            toast.error(error);
        }
    }

    const handlePlaySong = (song) => {
        dispatch(actions.setCurrentSongId(song._id));
        dispatch(actions.play(true));
    }

    const renderActionButton = (item) => {
        if (type === 'album') {
            return (
                <NavLink to={`/album/${item.slug}`}>
                    <ButtonPlay className="text-white !h-11 !w-11 flex-none">
                        <FaPlay className={`text-lg ml-1`} />
                    </ButtonPlay>
                </NavLink>
            )
        } else if (type === 'mv') {
            return (
                <NavLink to={`/mv/${item.slug}`}>
                    <ButtonPlay className="text-white !h-11 !w-11 flex-none">
                        <FaPlay className={`text-lg ml-1`} />
                    </ButtonPlay>
                </NavLink>
            )
        } else {
            return (
                <ButtonPlay 
                    onClick={() => handlePlaySong(item)} 
                    className={`text-white !h-11 !w-11 flex-none`}
                >
                    {currentSongId === item._id ? (
                        <img src="/animation/icon-playing.gif" alt="pause" className="w-5 h-5" />
                    ) : (
                        <FaPlay className={`text-lg ml-1`} />
                    )}
                    
                </ButtonPlay>
            )
        }
    }
    return (
        <div className={`w-full mt-10 ${classWrapper}`}>
            <div className="w-full flex justify-between">
                <div className={`w-full flex justify-between ${isAbum}`}>
                    <h2 className='capitalize text-2xl font-medium '>
                        {nameList || "nghe gần đây"}
                    </h2>
                    <div className="flex gap-2.5 items-center text-[15px] text-gray-500 cursor-pointer font-[500]">
                        <h5 className='uppercase'>tất cả</h5>
                        <MdOutlineArrowForwardIos/>
                    </div>
                </div>
                <div className={`w-full flex items-center gap-2.5 ${isFan}`}>
                    <div className="w-[50px] h-[50px] rounded-sm overflow-hidden">
                        <img src={dataSinger?.img}
                        alt="avatar singer" 
                        className='w-full object-cover'/>
                    </div>
                    <div className="text-[14px]">
                        <h6 className='uppercase text-gray-500'>
                            dành cho fan
                        </h6>
                        <h5 className="capitalize text-[18px] font-medium">
                            {dataSinger?.stagename}
                        </h5>
                    </div>
                </div>
            </div>
            <div className={`w-full flex items-center flex-nowrap gap-5 mt-5 ${classListCard}`}>
                {data?.map(item => (
                    <div key={item._id} className={`w-1/7 flex flex-col gap-2.5 ${classCard} ${currentSongId === item._id ? 'text-[#218888]' : ''}`}>
                        <div className="w-full relative rounded-lg overflow-hidden group">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                            />
                            <div className={`top-0 bottom-0 left-0 right-0 absolute bg-hover-music 
                            items-center justify-center gap-3 flex transform transition-transform 
                            duration-500 ease-in-out ${classIcon} ${currentSongId === item._id && isPlaying ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}>
                                {type === 'album' ? (
                                    <ButtonCricle 
                                        onClick={() => handleFavoriteAlbum(item, currentUser?._id)}
                                        className="bg-transparent transition duration-300 hover:bg-white/30"
                                    >
                                        {type === 'album' || type === 'mv' ? (
                                            favoriteAlbum?.some(album => album._id === item._id) ? (
                                                <FaHeart className="text-lg text-[#218888]"/>
                                            ) : (
                                                <FaRegHeart className="text-lg text-white"/>
                                            )
                                        ) : (
                                            favoriteSong?.some(song => song._id === item._id) ? (
                                                <FaHeart className="text-lg text-[#218888]"/>
                                            ) : (
                                                <FaRegHeart className="text-lg text-white"/>
                                            )
                                        )}
                                    </ButtonCricle>
                                ) : (
                                    <ButtonCricle className="bg-transparent transition duration-300 hover:bg-white/30">
                                        <FaRegHeart className="text-lg text-white"/>
                                    </ButtonCricle>
                                )}
                                {renderActionButton(item)}
                                <ButtonCricle className="bg-transparent transition duration-300 hover:bg-white/30">
                                    <BsThreeDots className="text-lg text-white"/>
                                </ButtonCricle>
                            </div>
                        </div>
                        <div className="w-full flex items-center">
                            <img src={dataSinger?.img} alt="" className={`w-10 h-10 rounded-[50%] mr-2.5 ${isSinger}`}/>
                            <div className={`${classSub}`}>
                                <h5 className='line-clamp-1 font-medium capitalize'>
                                    {item.name}
                                </h5>
                                <h6 className='line-clamp-1 text-sm text-gray-500 capitalize'>
                                    {item.singer}
                                </h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

ListMusic.propTypes = {
    classCard: PropTypes.node.isRequired,
    nameList: PropTypes.string.isRequired,
    classIcon: PropTypes.node.isRequired,
    isAbum: PropTypes.node.isRequired,
    isFan: PropTypes.node.isRequired,
    dataSinger: PropTypes.object,
    data: PropTypes.array,
    type: PropTypes.string,
    classWrapper: PropTypes.node,
    classSub: PropTypes.node,
    classListCard: PropTypes.node,
    isSinger:PropTypes.node,
}

export default ListMusic