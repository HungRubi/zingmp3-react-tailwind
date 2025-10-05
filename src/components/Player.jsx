import icons from '../util/icons';
import {ButtonPlay} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
const {FaRegHeart, BsThreeDots,MdSkipNext,FaPlay,BsFillPauseFill,
        MdSkipPrevious,PiShuffle,PiRepeatLight, PiPlaylistBold, 
        IoVolumeMediumOutline, VscChromeRestore, BsVolumeMute} = icons;

const Player = () => {
    const dispatch = useDispatch();
    const {isPlaying, currentSongId, autoPlay, recentSongs, isShuffle, isRepeat} = useSelector(state => state.music);
    const {allSongs} = useSelector(state => state.app);
    const {isTabMusic} = useSelector(state => state.user);
    const audioRef = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(100);

    // Find current song from allSongs
    const currentSong = allSongs?.find(song => song._id === currentSongId);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying && currentSong?.music) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSongId, currentSong]);

    const handlePlayPause = () => {
        dispatch(actions.play(!isPlaying));
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    }

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    }

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        if (audioRef.current) {
            audioRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleShuffle = () => {
        dispatch(actions.setShuffle(!isShuffle));
    }

    const handleRepeat = () => {
        dispatch(actions.setRepeat(!isRepeat));
    }

    const getNextSong = () => {
        if (isRepeat) {
            return currentSong;
        }

        if (isShuffle) {
            const availableSongs = [...recentSongs];
            if (autoPlay) {
                const unplayedSongs = allSongs.filter(song => 
                    !recentSongs.some(recentSong => recentSong._id === song._id)
                );
                availableSongs.push(...unplayedSongs);
            }
            
            if (availableSongs.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableSongs.length);
                return availableSongs[randomIndex];
            }
            return null;
        }

        // Normal play order
        const currentIndex = recentSongs.findIndex(song => song._id === currentSongId);
        
        if (currentIndex !== -1 && currentIndex < recentSongs.length - 1) {
            return recentSongs[currentIndex + 1];
        } else if (autoPlay) {
            const unplayedSong = allSongs.find(song => 
                !recentSongs.some(recentSong => recentSong._id === song._id)
            );
            return unplayedSong;
        }
        return null;
    }

    const getPreviousSong = () => {
        if (isRepeat) {
            return currentSong;
        }

        if (isShuffle) {
            const availableSongs = [...recentSongs];
            if (autoPlay) {
                const unplayedSongs = allSongs.filter(song => 
                    !recentSongs.some(recentSong => recentSong._id === song._id)
                );
                availableSongs.push(...unplayedSongs);
            }
            
            if (availableSongs.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableSongs.length);
                return availableSongs[randomIndex];
            }
            return null;
        }

        // Normal play order
        const currentIndex = recentSongs.findIndex(song => song._id === currentSongId);
        
        if (currentIndex > 0) {
            return recentSongs[currentIndex - 1];
        }
        return null;
    }

    const handleNext = () => {
        const nextSong = getNextSong();
        if (nextSong) {
            dispatch(actions.setCurrentSongId(nextSong._id));
            dispatch(actions.setCurrentSong(nextSong));
            if (!recentSongs.some(song => song._id === nextSong._id)) {
                dispatch(actions.addRecentSong(nextSong));
            }
            dispatch(actions.play(true));
        }
    }

    const handlePrevious = () => {
        const prevSong = getPreviousSong();
        if (prevSong) {
            dispatch(actions.setCurrentSongId(prevSong._id));
            dispatch(actions.setCurrentSong(prevSong));
            if (!recentSongs.some(song => song._id === prevSong._id)) {
                dispatch(actions.addRecentSong(prevSong));
            }
            dispatch(actions.play(true));
        } else if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseInt(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    }

    // Handle song ended
    useEffect(() => {
        const handleEnded = () => {
            if (isRepeat) {
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
            } else {
                const nextSong = getNextSong();
                if (nextSong) {
                    dispatch(actions.setCurrentSongId(nextSong._id));
                    dispatch(actions.setCurrentSong(nextSong));
                    if (!recentSongs.some(song => song._id === nextSong._id)) {
                        dispatch(actions.addRecentSong(nextSong));
                    }
                    dispatch(actions.play(true));
                } else {
                    dispatch(actions.play(false));
                }
            }
        };

        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [currentSongId, recentSongs, allSongs, autoPlay, isShuffle, isRepeat, dispatch]);

    const hanleTabMusic = () => {
        dispatch(actions.isTabMusic(!isTabMusic));
    }
    return (
        <div className={`w-full h-full px-5 flex transition-transform duration-500 ease-in-out 
        ${!currentSongId ? 'translate-y-50' : 'translate-y-0'} max-[750px]:gap-5`}>
            <audio 
                ref={audioRef}
                src={currentSong?.music}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <div className="w-3/10 flex items-center gap-2.5 max-[750px]:w-auto">
                <div className="w-[64px] h-[64px] max-[1200px]:w-14 max-[1200px]:h-14 flex-none">
                    <img 
                        src={currentSong?.img} 
                        alt="Player"
                        className={`w-full object-cover rounded-[50%] ${isPlaying ? 'animate-spin' : ''}`}
                        style={{ animationDuration: '8s' }}
                    />
                </div>
                <div className="leading-5 w-1/3 max-[750px]:hidden">
                    <h5 className="capitalize font-medium text-gray-700 line-clamp-1
                    max-[1200px]:text-sm">
                        {currentSong?.name}
                    </h5>
                    <span className="text-gray-500 text-sm line-clamp-1
                    max-[1200px]:text-[12px]">
                        {currentSong?.singer}
                    </span>
                </div>
                <div className="flex gap-8 justify-center max-[1200px]:gap-4 max-[750px]:hidden">
                    <FaRegHeart className="text-base text-gray-600 cursor-pointer
                    max-[1200px]:text-sm"/>
                    <BsThreeDots className="text-base text-gray-600 cursor-pointer
                    max-[1200px]:text-sm"/>
                </div>
            </div>
            <div className="w-4/10 flex flex-col items-center justify-center gap-1 max-[750px]:w-full">
                <div className="flex gap-8 items-center">
                    <PiShuffle 
                        className={`text-[20px] cursor-pointer hover:text-[#218888] 
                            transition-colors max-[1200px]:text-lg ${isShuffle ? 'text-[#218888]' : ''}`}
                        onClick={handleShuffle}
                    />
                    <MdSkipPrevious 
                        className={'text-2xl cursor-pointer hover:text-[#218888] transition-colors max-[1200px]:text-xl'} 
                        onClick={handlePrevious}
                    />
                    <ButtonPlay onClick={handlePlayPause} className={"hover:text-[#218888] transition-colors"}>
                        {isPlaying ? (
                            <BsFillPauseFill className={`text-[22px]
                            max-[1200px]:text-sm`} />
                        ) : (
                            <FaPlay className={`text-lg ml-[2px]
                            max-[1200px]:text-sm`} />
                        )}
                    </ButtonPlay>
                    <MdSkipNext 
                        className='text-2xl cursor-pointer hover:text-[#218888] transition-colors max-[1200px]:text-xl'
                        onClick={handleNext}
                    />
                    <PiRepeatLight 
                        className={`text-[20px] cursor-pointer hover:text-[#218888] 
                            transition-colors max-[1200px]:text-lg ${isRepeat ? 'text-[#218888]' : ''}`}
                        onClick={handleRepeat}
                    />
                </div>
                <div className="w-full flex items-center gap-2.5">
                    <h5 className="text-[15px] text-gray-500 font-medium
                    max-[1200px]:text-[12px]">
                        {formatTime(currentTime)}
                    </h5>
                    <div className="flex-1 relative h-[5px] mx-[10px] rounded-[50px] bg-[rgba(246,246,252,0.322)]">
                        <div 
                            className="absolute h-full rounded-[50px] bg-[#218888] left-0"
                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        />
                        <input 
                            type="range"
                            id="seek"
                            className="absolute w-full h-[10px] cursor-pointer z-[999] opacity-0 transition-[0.3s_linear]"
                            min={0}
                            max={100}
                            value={duration ? (currentTime / duration) * 100 : 0}
                            onChange={handleSeek}
                        />
                    </div>
                    <h5 className="text-[15px] text-gray-500 font-medium
                    max-[1200px]:text-[12px]">
                        {formatTime(duration)}
                    </h5>
                </div>
            </div>
            <div className="w-3/10 flex justify-end gap-4 items-center max-[750px]:w-auto max-[600px]:hidden">
                <NavLink to={`/mv`} className='text-[8px] uppercase border-[2px] cursor-pointer 
                border-gray-400 text-gray-500 rounded-[6px] font-medium p-[2px]
                max-[1200px]:text-[6px] max-[950px]:hidden'>
                    mv
                </NavLink>
                <VscChromeRestore className='text-[20px] text-gray-500 cursor-pointer max-[1200px]:text-lg max-[950px]:hidden'/>
                <div className="flex gap-2.5 items-center max-[950px]:gap-[2px]">
                    {volume === 0 ? (
                        <BsVolumeMute className='text-[26px] text-gray-500 cursor-pointer
                        max-[1200px]:text-xl'/>
                    ) : (
                        <IoVolumeMediumOutline className='text-2xl text-gray-500 cursor-pointer
                        max-[1200px]:text-xl'/>
                    )}
                    <div className="relative h-[5px] w-[75px] max-[950px]:mx-[2px] mx-[10px] rounded-[50px] bg-[rgba(246,246,252,0.322)] max-[950px]:w-[50px]">
                        <div 
                            className="absolute h-full rounded-[50px] bg-[#218888] left-0"
                            style={{ width: `${volume}%` }}
                        />
                        <input 
                            type="range"
                            className="absolute w-full h-[10px] cursor-pointer z-[999] opacity-0 
                            max-[1200px]:h-[8px] max-[950px]:h-[6px] transition-[0.3s_linear]"
                            min={0}
                            max={100}
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>
                <div className="h-8 border border-[rgba(0,0,0,0.05)] max-[1200px]:h-7"></div>
                <button 
                    onClick={hanleTabMusic} 
                    title='danh sách phát'
                    className={`h-8 flex items-center justify-center w-8 rounded-sm bg-[#0E8088] cursor-pointer 
                    ${isTabMusic ?  'bg-[hsla(0,0%,100%,.1)] !text-gray-500' : 'bg-[#218888] text-white'} 
                    max-[1200px]:h-7 max-[1200px]:w-7 max-[1200px]:text-sm`}
                >
                    <PiPlaylistBold className='text-lg max-[1200px]:text-sm'/>
                </button>
            </div>
        </div>
    )
}

export default Player