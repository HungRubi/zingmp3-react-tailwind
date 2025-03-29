import {Button} from '../components'
import icons from '../util/icons'
import PropTypes from 'prop-types'

const {RiResetRightFill,FaPlay, FaHeart, BsThreeDots,MdOutlineArrowForwardIos} = icons

const ListMusicSize9 = ({nameList, isReset, isAll, isTab,data}) => {
    return (
        <div className="w-full mt-10">
            <div className="w-full flex justify-between">
                <h2 className='capitalize text-2xl font-medium'>
                    {nameList}
                </h2>
                <div className={`flex gap-2.5 items-center text-[15px] text-gray-500 cursor-pointer font-[500] ${isReset}`}>
                    <Button className={"!bg-[#218888] uppercase gap-2 text-white !py-1"}>
                        <RiResetRightFill />
                        làm mới
                    </Button>
                </div>
                <div className={`flex gap-2.5 items-center text-[15px] text-gray-500 cursor-pointer font-[500] ${isAll}`}>
                    <h5 className='uppercase'>tất cả</h5>
                    <MdOutlineArrowForwardIos/>
                </div>
            </div>
            <div className={`w-full flex items-center gap-3 mt-5 ${isTab}`}>
                <Button className={"!py-[2px] uppercase text-[12px] !font-[600] text-white !bg-[#218888]"}>
                    tất cả
                </Button>
                <Button className={"!py-[1.5px] uppercase text-[12px] !font-[600] text-gray-500 !bg-transparent border border-gray-400 transition duration-300 hover:!bg-[#218888] hover:!text-white"}>
                    việt nam
                </Button>
                <Button className={"!py-[1.5px] uppercase text-[12px] !font-[600] text-gray-500 !bg-transparent border border-gray-400 transition duration-300 hover:!bg-[#218888] hover:!text-white"}>
                    quốc tế
                </Button>
            </div>
            <div className="w-full flex mt-5">
                <div className="w-full flex gap-5 flex-wrap">
                    {data.map(item => (
                        <div key={item._id}
                        className="w-[calc(100%/3-14px)] p-2.5 rounded-[5px] flex text-left gap-2.5 items-center group hover:bg-[hsla(0,0%,100%,0.3)]">
                            <div className="h-15 w-15 relative overflow-hidden rounded-lg">
                                <img 
                                    src={item.img}
                                    alt={item.name} 
                                    className="w-full object-cover"
                                />
                                <div className="top-0 bottom-0 left-0 right-0 absolute bg-hover-music items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                    <FaPlay className="text-white text-2xl"/>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h5 className='capitalize line-clamp-1 font-medium text-gray-800 transition duration-300 hover:text-[#1F8686]'>
                                    {item.name}
                                </h5>
                                <h6 className='capitalize text-sm text-gray-500 font-[500]'>
                                    {item.singer}
                                </h6>
                            </div>
                            <div className="flex flex-none items-center gap-8">
                                <FaHeart className='text-[#1F8686] hidden group-hover:block'/>
                                <BsThreeDots className='text-[#1F8686] hidden group-hover:block'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

ListMusicSize9.propTypes = {
    nameList: PropTypes.node.isRequired,
    isReset: PropTypes.node.isRequired,
    isAll: PropTypes.node.isRequired,
    isTab: PropTypes.node.isRequired,
    data: PropTypes.array.isRequired,
}

export default ListMusicSize9