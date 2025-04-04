import { Button, ListMusic, ListSingerFollower, ModalSinger, TableSong } from "../../components";
import ButtonCircle from "../../components/ButtonCricle";
import icons from "../../util/icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZingMusic } from "../../util/iconSgv";

const {BiSolidRightArrow, IoCheckmark, MdOutlineArrowForwardIos} = icons

const SingerDetail = () => {
    const dispatch = useDispatch();
    const {slug} =  useParams();
    useEffect(() => {
        dispatch(actions.getSingerDetail(slug))
    }, [slug, dispatch])
    const {singerSuggest, singerDetail, songsForSinger,albumForSinger,album2ForSinger,top100ForSinger, mv} = useSelector(state => state.app);
    const part1 = songsForSinger?.slice(0,3);
    const part2 = songsForSinger?.slice(3,6);
    const part3 = mv?.slice(0,3);
    return (
        <div className="w-full">
            <div className="w-full h-[300px] relative overflow-hidden">
                <div className={`absolute w-full h-full bg-cover bg-center z-10 bg-no-repeat blur-[200px] bg-[url(https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/avatars/e/e/9/b/ee9b669745d05cb80be5cf63434d6e10.jpg)]`}>

                </div>
                <div className="w-full h-full bg-[rgba(191,219,219,0.8)] z-20 flex items-end justify-end">
                    <div className="w-full flex pb-6 items-center gap-5 px-[59px] z-20">
                        <img src={singerDetail?.img} 
                            alt=""
                            className="w-[140px] h-[140px] rounded-[50%]"
                        />
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <h1 className="text-6xl font-bold capitalize">{singerDetail?.stagename}</h1>
                                <ButtonCircle className={"!h-14 !w-14 !bg-[#0e8080] mt-2"}>
                                    <BiSolidRightArrow className="text-2xl text-white"/>
                                </ButtonCircle>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <h5 className="text-gray-600 text-sm font-medium">
                                    449.957 người quan tâm
                                </h5>
                                <Button className={"uppercase !py-1 gap-1 bg-transparent border border-[rgba(0,0,0,0.1)] text-gray-600 text-sm !font-[400]"}>
                                    <IoCheckmark className="text-lg"/>
                                    đã quan tâm
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-[59px] mt-10">
                <div className={`w-full flex justify-between`}>
                    <h2 className='capitalize text-2xl font-medium '>
                        bài hát nổi bật
                    </h2>
                    <div className="flex gap-2.5 items-center text-[15px] text-gray-500 cursor-pointer font-[500]">
                        <h5 className='uppercase'>tất cả</h5>
                        <MdOutlineArrowForwardIos/>
                    </div>
                </div>
                <div className="w-full flex gap-10">
                    <TableSong 
                        isHeader={"hidden"} 
                        data={part1}
                        classSong={"w-7/10"}
                        isAlbum={"hidden"}
                        isIndex={"hidden"}
                    />
                    <TableSong 
                        isHeader={"hidden"} 
                        data={part2}
                        classSong={"w-7/10"}
                        isAlbum={"hidden"}
                        isIndex={"hidden"}
                    />
                </div>
                <ListMusic 
                    data={albumForSinger}
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"Single & EP"}
                    type={"album"}
                />
                <ListMusic 
                    data={album2ForSinger}
                    classCard={"!w-1/5"}
                    isFan={"hidden"}
                    nameList={"Album"}
                    type={"album"}
                    isSinger={"hidden"}
                />
                <ListMusic
                    nameList={"Mv"}
                    data={part3}
                    classCard={"!w-1/3"}
                    isFan={"hidden"}
                    classIcon={"gap-10"}
                    type={"mv"}
                />
                <ListMusic 
                    data={top100ForSinger}
                    classCard={"!w-1/5"}
                    isFan={"hidden"}
                    nameList={"tuyển tập"}
                    type={"album"}
                    isSinger={"hidden"}
                />
                <ListSingerFollower 
                    data={singerSuggest} 
                    isIcon={"hidden"} 
                    name={"có thể bạn sẽ thích"} 
                    className={"!text-2xl capitalize mt-10"}
                    isShuffle={"hidden"}
                />
                <div className="w-full mt-10">
                    <h2 className="text-2xl font-medium">Về {singerDetail?.stagename}</h2>
                    <div className="w-full flex gap-10 mt-7">
                        <div className="w-1/2 aspect-[3/2]">
                            <img 
                                src={singerDetail?.imginfor} 
                                alt={singerDetail?.name} 
                                className="h-full w-full object-cover object-[50%_20%] rounded-lg" 
                            />
                        </div>
                        <div className="flex-1 flex flex-col text-justify">
                            <p className="line-clamp-6 leading-8 text-sm text-gray-500 whitespace-pre-line">
                                {singerDetail?.description}
                            </p>
                            <div className="w-full">
                                <ModalSinger data={singerDetail}/>
                            </div>
                            <div className="flex items-center gap-8 mt-8">
                                <div className="text-sm">
                                    <div className="text-2xl font-medium">
                                        2.566.278
                                    </div>
                                    <div className="text-gray-500 line-clamp-1 mt-1">
                                        Người quan tâm
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <div className="text-2xl font-medium">
                                        3
                                    </div>
                                    <div className="text-gray-500 line-clamp-1 mt-1">
                                        Giải thưởng
                                    </div>
                                </div>
                                <div className="h-11 w-[42px]">
                                    <ZingMusic/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingerDetail