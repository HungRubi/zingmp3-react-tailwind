import { useState } from 'react'
import { ListMusicSlider, TableSong } from '../../components';

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
    return (
        <>
            <div className="w-full mt-8 border-b border-[#0003] uppercase">
                <div className="flex px-[59px] h-13 gap-5 items-center">
                    <h1 className="capitalize h-full text-3xl font-[600] text-gray-800 pr-5 border-r border-[#0002] whitespace-nowrap">
                        kết quả tìm kiếm
                    </h1>
                    <div className="w-full flex gap-10 h-full">
                        {tabs.map((item, index) => (
                            <h5 key={index} className={`text-[16px] leading-11 h-full font-[500] text-gray-600 cursor-pointer hover:text-gray-900 ${index === 0 ? 'border-b-2 border-[#218888]' : 'border-b-2 border-transparent'}`}>
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
            <div className="w-full px-[59px] mt-8">
                <ListMusicSlider 
                    data={[]} 
                    nameList={"Nổi bật"} 
                />

                <TableSong
                    isHeader={"hidden"}
                    isIndex={"hidden"}
                    isMusic={"hidden"}
                />
            </div>
        </>
        
    )
}

export default Search