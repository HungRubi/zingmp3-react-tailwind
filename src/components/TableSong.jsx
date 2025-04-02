import icons from "../util/icons";
import ButtonMv from "./ButtonMv";
import PropTypes from "prop-types";

const {PiMusicNotesSimpleBold, FaPlay, FaHeart} = icons;

const TableSong = ({isIndex, isMusic, isName, isIcon, isHeader, data}) => {
    return (
        <div className="w-full mt-8">
            <div className={`w-full flex items-center text-sm font-medium text-gray-600 border-b border-[rgba(0,0,0,0.05)] h-[46px] p-2.5 ${isHeader}`}>
                <div className="w-[40px]">{isName || ""}</div>
                <div className="w-4/10 uppercase">bài hát</div>
                <div className="w-4/10 uppercase">album</div>
                <div className="w-2/10 uppercase text-right">thời gian</div>
            </div>
            {data?.map((item, index) => (
                <div key={index} 
                className="w-full flex items-center text-sm font-medium text-gray-600 border-b border-[rgba(0,0,0,0.05)] p-2.5 group hover:bg-[hsla(0,0%,100%,0.3)] transition duration-200">
                    <div className="w-[40px]">
                        <PiMusicNotesSimpleBold className={`text-[17px] text-gray-400 ${isMusic}`}/>
                        <h4 className={`index_bxh !text-4xl ${isIndex}`}>
                            {index + 1}
                        </h4>
                    </div>
                    <div className="w-4/10 flex gap-2 items-center">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src={item.img}
                                alt={item.name} 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg"/>
                            </div>
                        </div>
                        <div className="capitalize text-sm">
                            <h4 className="text-base font-medium text-gray-700 line-clamp-1">{item.name}</h4>
                            <h5 className="font-[400] line-clamp-1">{item.singer}</h5>
                        </div>
                    </div>
                    <div className="w-3/10 capitalize font-[400] text-gray-500 line-clamp-1">
                        {item.album}
                    </div>
                    <div className="w-3/10 uppercase text-right flex items-center justify-end gap-2.5">
                        <ButtonMv className={`hidden group-hover:block ${isIcon}`}/>
                        <FaHeart className={`text-[#218787] ml-10 ${isIcon}`}/>
                        <div className="w-[46px] text-sm text-gray-500 font-[400]">04:08</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

TableSong.propTypes = {
    data: PropTypes.array,
    isHeader: PropTypes.node.isRequired,
    isIndex: PropTypes.node.isRequired,
    isMusic: PropTypes.node.isRequired,
    isIcon: PropTypes.node.isRequired,
    isName: PropTypes.string.isRequired
}

export default TableSong