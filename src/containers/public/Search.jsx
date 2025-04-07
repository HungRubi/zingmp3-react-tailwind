import { useState } from 'react'
import { ListMusic, ListMusicSlider, ListSingerFollower, TableSong } from '../../components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components';

const Search = () => {
    const tabs = [
        "Tất cả",
        "Bài hát",
        "Playlist/Album",
        "Nghệ sĩ",
        "MV",
    ]
    const [isAdver, setIsAdver] = useState(false);
    const handleClick = () => {
        setIsAdver(true)
    }
    const [isTab, setIsTab] = useState(0);
    const {singerSearch, songsSearch, albumsSearch, mvsSearch, singerSuggest} = useSelector(state => state.app);
    return (
        <>
            <div className="w-full mt-8 border-b border-[#0003] uppercase">
                <div className="flex px-[59px] h-13 gap-5 items-center">
                    <h1 className="capitalize h-full text-3xl font-[600] text-gray-800 pr-5 border-r border-[#0002] whitespace-nowrap">
                        kết quả tìm kiếm
                    </h1>
                    <div className="w-full flex gap-10 h-full">
                        {tabs.map((item, index) => (
                            <h5 key={index} onClick={() => setIsTab(index)}
                            className={`text-[16px] leading-11 h-full font-[500] text-gray-600 cursor-pointer hover:text-gray-900 ${index === isTab ? 'border-b-2 border-[#218888]' : 'border-b-2 border-transparent'}`}>
                                {item}
                            </h5>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className={`mt-8 px-[59px] ${isAdver ? 'hidden' : 'block'}`}>
                <div className="w-full relative overflow-hidden rounded-lg">
                    <img src="/img/adver.jpg" alt="" className="w-full" />
                    <div onClick={handleClick}
                    className={`cursor-pointer absolute top-0 right-0 flex items-center justify-center capitalize text-[12px] text-white bg-[rgba(20,20,20,.6)] rounded-bl-[8px] px-2 py-1`}>
                        đóng
                    </div>
                </div>
            </div>
            {singerSearch.length > 0 || songsSearch.length > 0 || albumsSearch.length > 0 || mvsSearch.length > 0 ? (
                <>
                    {isTab === 0 ?  (
                        <div className="w-full px-[59px] mt-8">
                            <ListMusicSlider
                                dataSinger={singerSearch} 
                                dataSong={songsSearch?.slice(0,2)}
                                data={[]} 
                                nameList={"Nổi bật"} 
                            />
                            <h3 className='-mb-5 capitalize text-2xl font-[600] mt-10'>bài hát</h3>
                            <div className="w-full flex gap-10">
                                <TableSong
                                    data={songsSearch?.slice(0,3)}
                                    isHeader={"hidden"}
                                    isIndex={"hidden"}
                                    isMusic={"hidden"}
                                    classIndex={"hidden"}
                                />
                                <TableSong
                                    data={songsSearch?.slice(3,6)}
                                    isHeader={"hidden"}
                                    isIndex={"hidden"}
                                    isMusic={"hidden"}
                                    classIndex={"hidden"}
                                />

                            </div>
                            <ListMusic
                                nameList={"Playlist/Album"}
                                data={albumsSearch?.slice(0,5)}
                                classCard={"!w-1/5"}
                                isFan={"hidden"}
                                isSinger={"hidden"}
                                type={"album"}
                            />
                            <ListMusic
                                nameList={"MV"}
                                classCard={"!w-1/3"}
                                dataSinger={singerSearch[0]}
                                data={mvsSearch?.slice(0,3)}
                                isFan={"hidden"}
                                type={"mv"}
                            />

                            <div className="mt-10">
                                <ListSingerFollower
                                    name={"Nghệ sĩ/OA"}
                                    data={singerSuggest}
                                    isIcon={"hidden"}
                                    className={"!text-2xl"}
                                    isShuffle={"hidden"}
                                />
                            </div>
                        </div>
                    ) : ("")}
                    {isTab === 1 ? (
                        <div className="mt-10 px-[59px]">
                            <TableSong
                                data={songsSearch}
                                isHeader={"hidden"}
                                isIndex={"hidden"}
                                isMusic={"hidden"}
                                classIndex={"hidden"}
                            />
                        </div>
                    ) : ("")}
                    {isTab === 2 ? (
                        <div className="mt-10 px-[59px]">
                            <ListMusic
                                nameList={"Playlist/Album"}
                                data={albumsSearch}
                                classCard={"!w-[calc(20%-16px)]"}
                                isFan={"hidden"}
                                isSinger={"hidden"}
                                type={"album"}
                                classListCard={"!flex-wrap"}
                            />
                        </div>
                    ) : ("")}
                    {isTab === 3 ? (
                        <>
                            <div className="mt-10 px-[59px]">
                                <ListMusic
                                    dataSinger={singerSearch[0]}
                                    data={songsSearch?.slice(0, 7)}
                                    isAbum={"hidden"}
                                    isSinger={"hidden"}
                                />
                            </div>
                            <div className="mt-10 px-[59px]">
                            
                                <ListSingerFollower
                                    name={"Nghệ sĩ/OA"}
                                    data={singerSuggest}
                                    isIcon={"hidden"}
                                    className={"!text-2xl"}
                                    isShuffle={"hidden"}
                                />
                            </div>
                        </>
                    ) : ("")}
                    {isTab === 4 ? (
                        <div className="mt-10 px-[59px]">
                            <ListMusic
                                nameList={"MV"}
                                classCard={"!w-1/3"}
                                dataSinger={singerSearch[0]}
                                data={mvsSearch?.slice(0,3)}
                                isFan={"hidden"}
                                type={"mv"}
                            />
                        </div>
                    ) : ("")}
                </>

            ) : (
                <div className="w-full flex flex-col items-center py-10 justify-center gap-5">
                    <img src="/animation/404.gif" alt="" className='w-60 opacity-55'/>
                    <NavLink to={"/"} >
                        <Button className={"!bg-[#218888] text-white px-5 py-2"}>
                            Về trang chủ
                        </Button>
                    </NavLink>
                </div>
            )}
            
        </>
        
    )
}

export default Search