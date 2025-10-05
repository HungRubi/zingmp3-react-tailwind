import icons from "../util/icons";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { toast } from 'react-toastify';
import ButtonCircle from "./ButtonCricle";

const {PiMusicNotesSimpleBold, FaPlay, FaHeart, FaRegHeart} = icons;

const TableSong = ({classIndex, isIndex, isMusic, isName, isIcon, isHeader, data, className, isAlbum, classSong}) => {
    const dispatch = useDispatch();
    const {isPlaying, currentSongId} = useSelector(state => state.music);
    const {currentUser, favoriteSong} = useSelector(state => state.user);
    

    const handlePlay = (item) => {
        if (currentSongId === item._id) {
            dispatch(actions.play(!isPlaying));
        } else {
            dispatch(actions.setCurrentSongId(item._id));
            dispatch(actions.setCurrentSong(item));
            dispatch(actions.play(true));
            dispatch(actions.addRecentSong(item));
        }
    }

    const handleFavorite = async (item, user) => {
        try {
            const isFavorite = favoriteSong?.some(song => song._id === item._id);
            if (isFavorite) {
                await dispatch(actions.deletePlayList({ songId: item._id }, user));
            } else {
                await dispatch(actions.updatePlaylist({ songId: item._id }, user));
            }
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <div className={`w-full mt-8 ${className} max-[700px]:mt-2`}>
            <div className={`w-full flex items-center text-sm font-medium text-gray-600 border-b 
                border-[rgba(0,0,0,0.05)] h-[46px] p-2.5 ${isHeader} max-[750px]:text-[12px]`}>
                <div className={`w-[40px] ${classIndex} max-[750px]:hidden`}>{isName || ""}</div>
                <div className="w-4/10 uppercase">bài hát</div>
                <div className="w-4/10 uppercase max-[750px]:hidden ">album</div>
                <div className="w-2/10 uppercase text-right max-[750px]:w-full">thời gian</div>
            </div>
            {data?.map((item, index) => (
                <div key={index} 
                className={`w-full flex items-center text-sm font-medium text-gray-600 border-b border-[rgba(0,0,0,0.05)] p-2.5 group hover:bg-[hsla(0,0%,100%,0.3)] transition duration-200 ${currentSongId === item._id && isPlaying ? 'bg-[hsla(0,0%,100%,0.3)]' : ''}`}>
                    <div className={`w-[40px] ${classIndex} max-[750px]:hidden`}>
                        <PiMusicNotesSimpleBold className={`text-[17px] text-gray-400 ${isMusic}`}/>
                        <h4 className={`index_bxh font-bold !text-4xl ${isIndex} ${index === 0 ? "is-top-1" : ""} ${index === 1 ? "is-top-2" : ""} ${index === 2 ? "is-top-3" : ""}`}>
                            {index + 1}
                        </h4>
                    </div>
                    <div className={`w-4/10 flex gap-2 items-center  ${classSong} max-[750px]:w-full`}>
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                            <img 
                                src={item.img}
                                alt={item.name} 
                                className="w-full object-cover"
                            />
                            <div className={`top-0 bottom-0 left-0 right-0 absolute items-center justify-center 
                                gap-3 flex transform transition-transform duration-500 ease-in-out 
                                ${currentSongId === item._id && isPlaying ? 'bg-[#00000052] scale-100' : 
                                'bg-[#00000021] scale-0 group-hover:scale-100'}`}>
                                {currentSongId === item._id && isPlaying ? (
                                    <img 
                                        src="/animation/icon-playing.gif"
                                        alt="button play" 
                                        className="w-5 h-5 object-cover flex-none" 
                                        onClick={() => handlePlay(item)}
                                    />
                                ) : (
                                    <FaPlay className="text-white text-lg cursor-pointer" onClick={() => handlePlay(item)}/>
                                )}
                            </div>
                        </div>
                        <div className="capitalize text-sm pr-5">
                            <h4 className={`text-base font-medium line-clamp-1 max-[550px]:text-sm
                                ${currentSongId === item._id && isPlaying ? 'text-[#1F8686]' : 'text-gray-700'}`}>
                                {item.name}
                            </h4>
                            <h5 className="font-[400] line-clamp-1 max-[550px]:text-[12px]">
                                {item.singer}
                            </h5>
                        </div>
                    </div>
                    <div className={`w-3/10 capitalize font-[400] text-gray-500 line-clamp-1 ${isAlbum} max-[750px]:hidden`}>
                        {item.album}
                    </div>
                    <div className="w-3/10 uppercase text-right flex items-center justify-end gap-6">
                        {favoriteSong?.some(song => song._id === item._id) ? (
                            <ButtonCircle onClick={() => handleFavorite(item,currentUser?._id)}
                            className={"!h-8 !w-8 bg-transparent hover:bg-[#908e8e27] hidden group-hover:flex"}>
                                <FaHeart 
                                    className={`text-[#1F8686] cursor-pointer ${isIcon} mt-[1px]`}
                                />
                            </ButtonCircle>
                        ) : (
                            <ButtonCircle onClick={() => handleFavorite(item,currentUser?._id)}
                            className={"!h-8 !w-8 bg-transparent hover:bg-[#908e8e27] hidden group-hover:flex"}>
                                <FaRegHeart 
                                    className={`text-gray-500 cursor-pointer ${isIcon} mt-[1px]`}
                                />
                            </ButtonCircle>
                        )}
                        <div className="w-[46px] text-sm text-gray-500 font-[400] max-[550px]:text-[12px]">04:08</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

TableSong.propTypes = {
    data: PropTypes.array,
    className: PropTypes.node.isRequired,
    isHeader: PropTypes.node.isRequired,
    isIndex: PropTypes.node.isRequired,
    isMusic: PropTypes.node.isRequired,
    isIcon: PropTypes.node.isRequired,
    isName: PropTypes.string.isRequired,
    isAlbum: PropTypes.node.isRequired,
    classSong: PropTypes.node.isRequired,
    classIndex: PropTypes.node.isRequired,
}

export default TableSong