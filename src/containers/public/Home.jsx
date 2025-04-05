import { useSelector } from 'react-redux'
import {Advertisement, ListMusic, ListMusicSize9, ListMusicSlider, ListRadio, Slider} from '../../components'

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
    return (
        <>
            <div className="w-full px-[59px] backgroundColor-main-100">
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
                    classCard={"!w-1/5"} 
                    classIcon={"!gap-5"}
                    isAbum={"hidden"}
                    type={"song"}
                    isSinger={"hidden"}
                />
                <ListMusic 
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"top 100"}
                    data={top100}
                    type={"album"}
                    isSinger={"hidden"}
                />
                <ListMusic 
                    data={canSonglisten}
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"có thể bạn muốn nghe"}
                    isSinger={"hidden"}
                    type={"album"}
                />
                <ListMusic 
                    data={albumChill}
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"chill"}
                    isSinger={"hidden"}
                    type={"album"}
                />
                <ListMusicSize9 
                data={songNew} 
                nameList={"mới phát hành"}
                isReset={"hidden"}/>
                <ListMusicSlider data={topSong}/>
                <div className="w-full flex items-center gap-5 mt-10">
                    <div className="w-1/3 relative rounded-lg overflow-hidden group">
                        <img 
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg" 
                            alt="sky" 
                            className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                        />
                    </div>
                    <div className="w-1/3 relative rounded-lg overflow-hidden group">
                        <img 
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg" 
                            alt="sky" 
                            className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                        />
                    </div>
                    <div className="w-1/3 relative rounded-lg overflow-hidden group">
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
                    classCard={"!w-1/5"}
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
                            <div key={item._id} className="w-[calc(100%/8-18px)] bg-white rounded-lg flex items-center justify-center">
                                <img src={item.img}
                                className='object-contain w-1/2' 
                                alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home