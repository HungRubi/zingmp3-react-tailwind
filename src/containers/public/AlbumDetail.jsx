import { useDispatch, useSelector } from 'react-redux';
import {Button, ButtonPlay, ListMusic, ListSingerFollower, TableSong} from '../../components';
import ButtonCircle from '../../components/ButtonCricle';
import icons from '../../util/icons';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as actions from '../../store/actions'
import { toast } from 'react-toastify';

const {FaPlay, FaRegHeart, FaHeart, BsThreeDots} = icons

const AlbumDetail = () => {
    const dispatch = useDispatch();
    const {slug} = useParams();
    const {currentUser, favoriteAlbum} = useSelector(state => state.user);
    const {detailAlbum, songForAlbum, singerForAlbum, singerSuggest, albumSuggest} = useSelector(state => state.app);
    const {isPlaying, currentSongId} = useSelector(state => state.music);

    useEffect(() => {
        dispatch(actions.getAlbumDetail(slug))
    }, [slug, dispatch])

    const handleFavoriteAlbum = async (album, user) => {
        try {
            const isFavorite = favoriteAlbum?.some(item => item._id === album._id);
            if (isFavorite) {
                await dispatch(actions.deleteFavoriteAlbum({ albumId: album._id }, user));
            } else {
                await dispatch(actions.updateFavoriteAlbum({ albumId: album._id }, user));
            }
        } catch (error) {
            toast.error(error);
        }
    }

    const handlePlay = (song) => {
        if (currentSongId === song._id) {
            dispatch(actions.play(!isPlaying));
        } else {
            dispatch(actions.setCurrentSongId(song._id));
            dispatch(actions.setCurrentSong(song));
            dispatch(actions.play(true));
            dispatch(actions.addRecentSong(song));
        }
    }

    const handleRandomPlay = () => {
        if (songForAlbum?.length > 0) {
            const randomIndex = Math.floor(Math.random() * songForAlbum.length);
            const randomSong = songForAlbum[randomIndex];
            handlePlay(randomSong);
        }
    }

    const isCurrentSongInAlbum = songForAlbum?.some(song => song._id === currentSongId);
    const iconIsNotPlaying = "top-0 bottom-0 left-0 right-0 absolute bg-hover-music items-center justify-center gap-8 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100";
    const iconIsPlaying = "top-0 bottom-0 left-0 right-0 absolute bg-[#0000004a] items-center justify-center gap-8 flex";

    return (
        <>
            <div className="w-full mt-10 px-[59px] flex">
                <div className="w-[300px] pb-7.5">
                    <div className="w-full relative rounded-lg overflow-hidden group shadow-[0_5px_8px_0_rgba(0,0,0,0.2)]">
                        <img 
                            src={detailAlbum?.img}
                            alt={detailAlbum?.name} 
                            className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                        />
                        <div className={isCurrentSongInAlbum && isPlaying ? iconIsPlaying : iconIsNotPlaying}>
                            <ButtonPlay 
                                onClick={() => songForAlbum?.length > 0 && handlePlay(songForAlbum[0])}
                                className="text-white !h-15 !w-15"
                            >
                                {isCurrentSongInAlbum && isPlaying ? (
                                    <img 
                                        src="/animation/icon-playing.gif"
                                        alt="button play" 
                                        className="w-6 h-6 object-cover flex-none" 
                                    />
                                ) : (
                                    <FaPlay className="text-2xl ml-0.5"/>
                                )}
                            </ButtonPlay>
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-3 items-center justify-center px-2">
                        <h3 className='text-[20px] font-[600] line-clamp-2 text-center capitalize leading-8'>
                            {detailAlbum?.name}
                        </h3>
                        <div className="text-[12px] leading-5 text-gray-500 text-center my-1">
                            Cập nhật: {detailAlbum?.format} <br />
                            Ca sĩ: 
                            {singerForAlbum?.map(item => (
                                <span key={item._id} className='ml-1'>
                                    {item.stagename}
                                </span>
                            ))} <br />
                            418K người yêu thích
                        </div>
                        <Button 
                            onClick={handleRandomPlay}
                            className={"gap-2 uppercase mt-2 text-white !bg-[#0D7373]"}
                        >
                            {isCurrentSongInAlbum && isPlaying ? (
                                <>
                                    <img 
                                        src="/animation/icon-playing.gif"
                                        alt="button play" 
                                        className="w-4 h-4 object-cover flex-none" 
                                    />
                                    tạm dừng
                                </>
                            ) : (
                                <>
                                    <FaPlay/>
                                    phát ngẫu nhiên
                                </>
                            )}
                        </Button>
                        <div className="mt-4 flex gap-3">
                            <ButtonCircle onClick={() => handleFavoriteAlbum(detailAlbum, currentUser?._id)}>
                                {favoriteAlbum?.some(item => item._id === detailAlbum?._id) ? (
                                    <FaHeart className='text-[#218888]'/>
                                ) : (
                                    <FaRegHeart className='text-gray-500'/>
                                )}
                            </ButtonCircle>
                            <ButtonCircle>
                                <BsThreeDots className='text-gray-500'/>
                            </ButtonCircle>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ml-7.5">
                    <div className="text-sm mb-2.5 text-gray-600 line-clamp-1 font-medium">
                        {detailAlbum?.description}
                    </div>
                    <TableSong 
                        isHeader={"text-[12px]"} 
                        data={songForAlbum} 
                        isIndex={"hidden"}
                        className={"!mt-4"}
                    />
                </div>
            </div>
            <div className="w-full px-[59px] mt-8">
                <ListSingerFollower 
                    data={singerSuggest} 
                    isIcon={"hidden"} 
                    name={"nghệ sĩ tham gia"} 
                    className={"!text-2xl capitalize"}
                    isShuffle={"hidden"}
                />

                <ListMusic 
                    data={albumSuggest}
                    classCard={"!w-1/5"}
                    isFan={"hidden"}
                    nameList={"Có thể bạn muốn nghe"}
                    type={"album"}
                    isSinger={"hidden"}
                />
            </div>
        </>
    )
}

export default AlbumDetail