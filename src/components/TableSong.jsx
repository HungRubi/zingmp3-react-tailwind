import icons from "../util/icons";
import ButtonMv from "./ButtonMv";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

const {PiMusicNotesSimpleBold, FaPlay, FaHeart} = icons;

const TableSong = ({classIndex, isIndex, isMusic, isName, isIcon, isHeader, data, className, isAlbum, classSong}) => {
    const dispatch = useDispatch();
    const {isPlaying, currentSongId} = useSelector(state => state.music);

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

    return (
        <div className={`w-full mt-8 ${className}`}>
            <div className={`w-full flex items-center text-sm font-medium text-gray-600 border-b border-[rgba(0,0,0,0.05)] h-[46px] p-2.5 ${isHeader}`}>
                <div className={`w-[40px] ${classIndex}`}>{isName || ""}</div>
                <div className="w-4/10 uppercase">bài hát</div>
                <div className="w-4/10 uppercase">album</div>
                <div className="w-2/10 uppercase text-right">thời gian</div>
            </div>
            {data?.map((item, index) => (
                <div key={index} 
                className={`w-full flex items-center text-sm font-medium text-gray-600 border-b border-[rgba(0,0,0,0.05)] p-2.5 group hover:bg-[hsla(0,0%,100%,0.3)] transition duration-200 ${currentSongId === item._id && isPlaying ? 'bg-[hsla(0,0%,100%,0.3)]' : ''}`}>
                    <div className={`w-[40px] ${classIndex}`}>
                        <PiMusicNotesSimpleBold className={`text-[17px] text-gray-400 ${isMusic}`}/>
                        <h4 className={`index_bxh font-bold !text-4xl ${isIndex} ${index === 0 ? "is-top-1" : ""} ${index === 1 ? "is-top-2" : ""} ${index === 2 ? "is-top-3" : ""}`}>
                            {index + 1}
                        </h4>
                    </div>
                    <div className={`w-4/10 flex gap-2 items-center  ${classSong}`}>
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                            <img 
                                src={item.img}
                                alt={item.name} 
                                className="w-full object-cover"
                            />
                            <div className={`top-0 bottom-0 left-0 right-0 absolute items-center justify-center gap-3 flex transform transition-transform duration-500 ease-in-out ${currentSongId === item._id && isPlaying ? 'bg-[#00000052] scale-100' : 'bg-[#00000021] scale-0 group-hover:scale-100'}`}>
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
                            <h4 className={`text-base font-medium line-clamp-1 ${currentSongId === item._id && isPlaying ? 'text-[#1F8686]' : 'text-gray-700'}`}>{item.name}</h4>
                            <h5 className="font-[400] line-clamp-1">{item.singer}</h5>
                        </div>
                    </div>
                    <div className={`w-3/10 capitalize font-[400] text-gray-500 line-clamp-1 ${isAlbum}`}>
                        {item.album}
                    </div>
                    <div className="w-3/10 uppercase text-right flex items-center justify-end gap-2.5">
                        <ButtonMv className={`hidden group-hover:block ${isIcon}`}/>
                        <FaHeart className={`${currentSongId === item._id && isPlaying ? 'text-[#1F8686]' : 'text-[#218787] ml-10'} ${isIcon}`}/>
                        <div className="w-[46px] text-sm text-gray-500 font-[400]">04:08</div>
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