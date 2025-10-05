import { useSelector } from 'react-redux'
import {Advertisement, ListMusic, ListMusicSize9, ListMusicSlider, ListRadio, Slider} from '../../components';
import { useState } from 'react';
import {Button} from '../../components';

const Home = () => {
    const {
        songSuggest, 
        songNew, 
        randumSinger, 
        songForFan, 
        top100, 
        canSonglisten, 
        albumHot, 
        partnor, 
        radio, 
        albumChill, 
        topSong
    } = useSelector(state => state.app);
    const {recentSongs} = useSelector(state => state.music)
    const [isState, setIsState] = useState(0);
    return (
        <div className="w-full px-[59px] backgroundColor-main-100 max-[1200px]:px-5 overflow-x-hidden">
            <Slider/>
            <Advertisement/>
            <ListMusic 
                isFan={"hidden"}
                data={recentSongs?.slice(0, 7)}
                isSinger={"hidden"}  
            />
            <ListMusicSize9
                data={songSuggest} 
                nameList={"gợi ý cho bạn "} i
                isAll={"hidden"}
                isTab={"hidden"}
            />
            <ListMusic
                dataSinger={randumSinger}
                data={songForFan}
                classCard={"w-1/5"} 
                classIcon={"!gap-5"}
                isAbum={"hidden"}
                type={"song"}
                isSinger={"hidden"}
            />
            <ListMusic 
                isFan={"hidden"}
                classCard={"w-1/5"}
                nameList={"top 100"}
                data={top100}
                type={"album"}
                isSinger={"hidden"}
            />
            <ListMusic 
                data={canSonglisten}
                isFan={"hidden"}
                classCard={"w-1/5"}
                nameList={"có thể bạn muốn nghe"}
                isSinger={"hidden"}
                type={"album"}
            />
            <ListMusic 
                data={albumChill}
                isFan={"hidden"}
                classCard={"w-1/5"}
                nameList={"chill"}
                isSinger={"hidden"}
                type={"album"}
            />
            <div className={`w-full flex items-center gap-3 mt-10 -mb-10 max-[550px]:mt-5`}>
                <Button onClick={() => setIsState(0)} 
                className={`!py-[2px] uppercase text-[12px] !font-[600] ${isState === 0 ? "!bg-[#218888] text-white" : "text-gray-500 !bg-transparent border border-gray-400 transition duration-300 hover:!bg-[#218888] hover:!text-white"} `}>
                    tất cả
                </Button>
                <Button onClick={() => setIsState(1)} 
                className={`!py-[2px] uppercase text-[12px] !font-[600] ${isState === 1 ? "!bg-[#218888] text-white" : "text-gray-500 !bg-transparent border border-gray-400 transition duration-300 hover:!bg-[#218888] hover:!text-white"} `}>
                    việt nam
                </Button>
                <Button onClick={() => setIsState(2)} 
                className={`!py-[2px] uppercase text-[12px] !font-[600] ${isState === 2 ? "!bg-[#218888] text-white" : "text-gray-500 !bg-transparent border border-gray-400 transition duration-300 hover:!bg-[#218888] hover:!text-white"} `}>
                    quốc tế
                </Button>
            </div>
            <ListMusicSize9 
            data={songNew} 
            nameList={""}
            isReset={"hidden"}/>
            <ListMusicSlider data={topSong} type={"slider"}/>
            <div className="w-full flex items-center gap-5 mt-10 max-[600px]:flex-col">
                <div className="w-1/3 relative rounded-lg overflow-hidden group max-[600px]:w-full">
                    <img 
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg" 
                        alt="sky" 
                        className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                    />
                </div>
                <div className="w-1/3 relative rounded-lg overflow-hidden group max-[600px]:w-full">
                    <img 
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg" 
                        alt="sky" 
                        className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                    />
                </div>
                <div className="w-1/3 relative rounded-lg overflow-hidden group max-[600px]:w-full">
                    <img 
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg" 
                        alt="sky" 
                        className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                    />
                </div>
            </div>
            <ListMusic 
                data={albumHot}
                isFan={"hidden"}
                classCard={"w-1/5"}
                nameList={"album hot"}
                isSinger={"hidden"}
                type={"album"}
            />
            <ListRadio data={radio}/>

            <div className="mt-10 w-full">
                <div className="text-center">
                    <h4 className='uppercase font-bold text-gray-500 text-[14px]'>
                        đối tác âm nhạc
                    </h4>
                </div>
                <div className="w-full flex flex-wrap gap-5 mt-8">
                    {partnor?.map(item => (
                        <div key={item._id} className="w-[calc(100%/8-18px)] bg-white flex-none h-20 overflow-hidden
                        rounded-lg flex items-center justify-center max-[850px]:!w-[calc(100%/4-18px)] max-[550px]:!w-[calc(100%/2-18px)]">
                            <img src={item.img}
                            className='object-cover w-full' 
                            alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home