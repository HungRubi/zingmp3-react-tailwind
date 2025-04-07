import { useState, useEffect } from 'react';
import {ButtonCricle} from '../components';
import icons from '../util/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

import { ToggleOff } from '../util/iconSgv';

const {TfiAlarmClock, BsThreeDots, FaHeart, FaToggleOn, FaPlay} = icons;

const SidebarRight = () => {
    const dispatch = useDispatch();
    const {isPlaying, currentSongId, recentSongs, autoPlay} = useSelector(state => state.music);
    const {allSongs} = useSelector(state => state.app);

    useEffect(() => {
        dispatch(actions.getAllSongs());
    }, [dispatch]);

    const notActive = "w-1/2 grow rounded-[999px] py-[5px] cursor-pointer text-[#32323d] font-[500] text-[12px] text-center";
    const active = "w-1/2 grow rounded-[999px] py-[5px] cursor-pointer text-[#218888] font-[500] text-[12px] text-center bg-[hsla(0,0%,100%,0.3)] btn_active";
    const [isPlay, setIsPlay] = useState("danh sách phát");

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

    const handleAutoPlay = () => {
        dispatch(actions.setAutoPlay(!autoPlay));
    }

    // Find current song from all songs if not in recent songs
    const currentSong = allSongs?.find(song => song._id === currentSongId);
    const activeSong = currentSong || recentSongs?.find(song => song._id === currentSongId);
    const otherSongs = recentSongs?.filter(song => song._id !== currentSongId);

    // Filter out songs that haven't been played yet
    const unplayedSongs = allSongs?.filter(song => 
        !recentSongs?.some(recentSong => recentSong._id === song._id) && song._id !== currentSongId
    );

    // Get next song to play
    const getNextSong = () => {
        // First check in recentSongs
        if (otherSongs?.length > 0) {
            return otherSongs[0];
        }
        
        // If no songs in recentSongs and auto-play is on, check unplayed songs
        if (autoPlay && unplayedSongs?.length > 0) {
            return unplayedSongs[0];
        }
        
        return null;
    };

    // Handle song end
    useEffect(() => {
        const handleSongEnd = () => {
            const nextSong = getNextSong();
            if (nextSong) {
                handlePlay(nextSong);
            } else {
                dispatch(actions.play(false));
            }
        };

        const audio = document.querySelector('audio');
        if (audio) {
            audio.addEventListener('ended', handleSongEnd);
            return () => {
                audio.removeEventListener('ended', handleSongEnd);
            };
        }
    }, [currentSongId, otherSongs, unplayedSongs, autoPlay, dispatch]);

    return (
        <div className="bg-[#CED9D9] h-full flex flex-col">
            <div className="flex h-[70px] items-center justify-between px-2 w-full gap-2 flex-none">
                <div className="flex-1 rounded-[999px] bg-[hsla(0,0%,100%,0.3)] p-[3px] flex">
                    <button onClick={() => setIsPlay("danh sách phát")}
                    className={isPlay === "danh sách phát" ? active : notActive}>
                        Danh sách phát
                    </button>
                    <button onClick={() => setIsPlay("nghe gần đây")}
                    className={isPlay === "nghe gần đây" ? active : notActive}>
                        Nghe gần đây
                    </button>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <ButtonCricle>
                        <TfiAlarmClock className='text-[20px] opacity-70'/>
                    </ButtonCricle>
                    <ButtonCricle>
                        <BsThreeDots className='text-[20px] opacity-70'/>
                    </ButtonCricle>
                </div>
            </div>
            <div className="flex-1">
                {isPlay === "danh sách phát" ? (
                    <div className="px-2">
                        {activeSong && (
                            <div className="w-full flex p-2 items-center group bg-[#218888] rounded-sm">
                                <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                                    <img 
                                        src={activeSong.img}
                                        alt={activeSong.name} 
                                        className="w-full object-cover"
                                    />
                                    <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex">
                                        {isPlaying ? (
                                            <img 
                                                src="/animation/icon-playing.gif"
                                                alt="button play" 
                                                className="w-5 h-5 object-cover flex-none" 
                                                onClick={() => handlePlay(activeSong)}
                                            />
                                        ) : (
                                            <FaPlay className="text-white text-lg cursor-pointer" onClick={() => handlePlay(activeSong)}/>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-auto ml-2.5">
                                    <h5 className="capitalize font-medium line-clamp-1 text-white text-sm">
                                        {activeSong.name}
                                    </h5>
                                    <h6 className="text-sm capitalize line-clamp-1 text-gray-300 text-[12px] mt-[1px]">
                                        {activeSong.singer}
                                    </h6>
                                </div>
                                <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                                    <FaHeart className='text-white'/>
                                    <BsThreeDots className='text-white'/>
                                </div>
                            </div>
                        )}
                        <div className="px-2 flex mt-2.5">
                            <h5 className='font-medium'>Tiếp theo</h5>
                        </div>
                        <div className={`${currentSongId ? "h-[calc(100vh-250px)]" : "h-[calc(100vh-50px)]"}  overflow-y-auto [&::-webkit-scrollbar]:w-1 
                                        [&::-webkit-scrollbar-track]:bg-transparent 
                                        [&::-webkit-scrollbar-thumb]:bg-[#0000001a] 
                                        [&::-webkit-scrollbar-thumb]:rounded-full 
                                        hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]`}>
                            <div className="w-full">
                                {otherSongs?.map((item, index) => (
                                    <div key={index} className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                                        <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                                            <img 
                                                src={item.img}
                                                alt={item.name} 
                                                className="w-full object-cover"
                                            />
                                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                                <FaPlay className="text-white text-lg cursor-pointer" onClick={() => handlePlay(item)}/>
                                            </div>
                                        </div>
                                        <div className="flex-auto ml-2.5">
                                            <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                                {item.name}
                                            </h5>
                                            <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                                {item.singer}
                                            </h6>
                                        </div>
                                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                                            <FaHeart className='text-[#218888] cursor-pointer'/>
                                            <BsThreeDots className='text-[#218888] cursor-pointer'/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full flex p-2 items-center justify-between">
                                <div className="">
                                    <h5 className='font-medium text-gray-800'>Tự động phát</h5>
                                    <h6 className='text-sm text-gray-600'>Danh sách bài hát gợi ý</h6>
                                </div>
                                {autoPlay ? (
                                    <FaToggleOn 
                                        className='mr-2 text-[#218888] text-3xl cursor-pointer'
                                        onClick={handleAutoPlay}
                                    />
                                ) : (
                                    <ToggleOff 
                                        className=' text-gray-400 text-3xl cursor-pointer'
                                        onClick={handleAutoPlay}
                                    />
                                )}
                            </div>
                            {unplayedSongs?.slice(0, 20).map((item, index) => (
                                <div key={index} className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                                    <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                                        <img 
                                            src={item.img}
                                            alt={item.name} 
                                            className="w-full object-cover"
                                        />
                                        <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                            <FaPlay className="text-white text-lg cursor-pointer" onClick={() => handlePlay(item)}/>
                                        </div>
                                    </div>
                                    <div className="flex-auto ml-2.5">
                                        <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                            {item.name}
                                        </h5>
                                        <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                            {item.singer}
                                        </h6>
                                    </div>
                                    <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                                        <FaHeart className='text-[#218888] cursor-pointer'/>
                                        <BsThreeDots className='text-[#218888] cursor-pointer'/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="px-2">
                        {activeSong && (
                            <div className="w-full flex p-2 items-center group bg-[#218888] rounded-sm">
                                <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                                    <img 
                                        src={activeSong.img}
                                        alt={activeSong.name} 
                                        className="w-full object-cover"
                                    />
                                    <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex">
                                        {isPlaying ? (
                                            <img 
                                                src="/animation/icon-playing.gif"
                                                alt="button play" 
                                                className="w-5 h-5 object-cover flex-none" 
                                                onClick={() => handlePlay(activeSong)}
                                            />
                                        ) : (
                                            <FaPlay className="text-white text-lg cursor-pointer" onClick={() => handlePlay(activeSong)}/>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-auto ml-2.5">
                                    <h5 className="capitalize font-medium line-clamp-1 text-white text-sm">
                                        {activeSong.name}
                                    </h5>
                                    <h6 className="text-sm capitalize line-clamp-1 text-gray-300 text-[12px] mt-[1px]">
                                        {activeSong.singer}
                                    </h6>
                                </div>
                                <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                                    <FaHeart className='text-white'/>
                                    <BsThreeDots className='text-white'/>
                                </div>
                            </div>
                        )}
                        <div className="h-[calc(100vh-220px)] overflow-y-auto
                                        [&::-webkit-scrollbar]:w-1 
                                        [&::-webkit-scrollbar-track]:bg-transparent 
                                        [&::-webkit-scrollbar-thumb]:bg-[#0000001a] 
                                        [&::-webkit-scrollbar-thumb]:rounded-full 
                                        hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]">
                            {otherSongs?.map((item, index) => (
                                <div key={index} className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                                    <div className="h-10 w-10 relative overflow-hidden rounded-sm flex-none">
                                        <img 
                                            src={item.img}
                                            alt={item.name} 
                                            className="w-full object-cover"
                                        />
                                        <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                            <FaPlay className="text-white text-lg cursor-pointer" onClick={() => handlePlay(item)}/>
                                        </div>
                                    </div>
                                    <div className="flex-auto ml-2.5">
                                        <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                            {item.name}
                                        </h5>
                                        <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                            {item.singer}
                                        </h6>
                                    </div>
                                    <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                                        <FaHeart className='text-[#218888] cursor-pointer'/>
                                        <BsThreeDots className='text-[#218888] cursor-pointer'/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SidebarRight