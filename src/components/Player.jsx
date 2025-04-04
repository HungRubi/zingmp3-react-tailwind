import icons from '../util/icons';
import {ButtonPlay} from '../components'
const   {FaRegHeart, BsThreeDots,MdSkipNext,
        MdSkipPrevious,PiShuffle,PiRepeatLight, PiPlaylistBold, 
        IoVolumeMediumOutline, VscChromeRestore} = icons;

const Player = () => {
    return (
        <div className="w-full h-full px-5 flex">
            <div className="w-3/10 flex items-center gap-2.5">
                <div className="w-[64px] h-[64px]">
                    <img 
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/6/9/a/369adae3c5e6ffb93f7d4c6d17b7a3d2.jpg" 
                        alt="Player"
                        className="w-full object-cover rounded-sm" 
                    />
                </div>
                <div className="leading-5 w-1/3">
                    <h5 className="capitalize font-medium text-gray-700 line-clamp-1">Anh sai rồi</h5>
                    <span className="text-gray-500 text-sm line-clamp-1">
                        Sơn Tùng MTP
                    </span>
                </div>
                <div className="flex-none flex gap-8">
                    <FaRegHeart className="text-base text-gray-600 cursor-pointer"/>
                    <BsThreeDots className="text-base text-gray-600 cursor-pointer"/>
                </div>
            </div>
            <div className="w-4/10 flex flex-col items-center justify-center gap-2.5">
                <div className="flex gap-8 items-center">
                    <PiShuffle className={'text-[20px] cursor-pointer'}/>
                    <MdSkipPrevious className={'text-2xl cursor-pointer'}/>
                    <ButtonPlay/>
                    <MdSkipNext className='text-2xl cursor-pointer'/>
                    <PiRepeatLight className={'text-[20px] cursor-pointer'}/>
                </div>
                <div className="w-full flex items-center gap-2.5">
                    <h5 className="text-[13px] text-gray-500">
                        00:05
                    </h5>
                    <input 
                        type="range"
                        className='flex-1 h-[4px] bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[12px] [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0E8080] hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-[12px] [&::-moz-range-thumb]:h-[12px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0E8080] [&::-moz-range-thumb]:cursor-pointer hover:[&::-moz-range-thumb]:scale-110 [&::-moz-range-thumb]:transition-transform'
                        min={0} 
                        max={100} 
                    />
                    <h5 className="text-[13px] text-gray-500 font-medium">
                        04:05
                    </h5>
                </div>
            </div>
            <div className="w-3/10 flex justify-end gap-4 items-center">
                <button className='text-[8px] uppercase border-[2px] cursor-pointer border-gray-400 text-gray-500 rounded-[6px] font-medium p-[2px]'>
                    mv
                </button>
                <VscChromeRestore className='text-[20px] text-gray-500 cursor-pointer'/>
                <div className="flex gap-2.5 items-center">
                    <IoVolumeMediumOutline className='text-2xl text-gray-500 cursor-pointer'/>
                    <input 
                        type="range"
                        className='w-[75px] h-[4px] bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[12px] [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0E8080] hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-[12px] [&::-moz-range-thumb]:h-[12px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0E8080] [&::-moz-range-thumb]:cursor-pointer hover:[&::-moz-range-thumb]:scale-110 [&::-moz-range-thumb]:transition-transform' 
                        min={0} 
                        max={100}
                    />
                </div>
                <div className="h-8 border border-[rgba(0,0,0,0.05)]"></div>
                <button className='h-8 flex items-center justify-center w-8 rounded-sm bg-[#0E8080] cursor-pointer'>
                    <PiPlaylistBold className='text-white text-lg'/>
                </button>
            </div>
        </div>
    )
}

export default Player