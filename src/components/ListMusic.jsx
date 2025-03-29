import {ButtonCricle, ButtonPlay} from '../components'
import PropTypes from 'prop-types';
import icons from "../util/icons"
const { FaRegHeart,BsThreeDots,MdOutlineArrowForwardIos } = icons

const ListMusic = ({classCard, nameList, classIcon, isAbum, isFan, dataSinger, data}) => {
    return (
        <div className="w-full mt-10">
            <div className="w-full flex justify-between">
                <div className={`w-full flex justify-between ${isAbum}`}>
                    <h2 className='capitalize text-2xl font-medium '>
                        {nameList || "nghe gần đây"}
                    </h2>
                    <div className="flex gap-2.5 items-center text-[15px] text-gray-500 cursor-pointer font-[500]">
                        <h5 className='uppercase'>tất cả</h5>
                        <MdOutlineArrowForwardIos/>
                    </div>
                </div>
                <div className={`w-full flex items-center gap-2.5 ${isFan}`}>
                    <div className="w-[50px] h-[50px] rounded-sm overflow-hidden">
                        <img src={dataSinger?.img}
                        alt="avatar singer" 
                        className='w-full object-cover'/>
                    </div>
                    <div className="text-[14px]">
                        <h6 className='uppercase text-gray-500'>
                            dành cho fan
                        </h6>
                        <h5 className="capitalize text-[18px] font-medium">
                            {dataSinger?.stagename}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center flex-nowrap gap-5 mt-5">
                {data?.map(item => (
                    <div key={item._id} className={`w-1/7 flex flex-col gap-2.5 ${classCard}`}>
                        <div className="w-full relative rounded-lg overflow-hidden group">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                            />
                            <div className={`top-0 bottom-0 left-0 right-0 absolute bg-hover-music 
                            items-center justify-center gap-3 flex transform scale-0 transition-transform 
                            duration-500 ease-in-out group-hover:scale-100 ${classIcon}`}>
                                <ButtonCricle className="bg-transparent transition duration-300 hover:bg-white/30">
                                    <FaRegHeart className="text-lg text-white"/>
                                </ButtonCricle>
                                <ButtonPlay className="text-white !h-11 !w-11"/>
                                <ButtonCricle className="bg-transparent transition duration-300 hover:bg-white/30">
                                    <BsThreeDots className="text-lg text-white"/>
                                </ButtonCricle>
                            </div>
                        </div>
                        <div className="w-full">
                            <h5 className='line-clamp-1 font-medium'>
                                {item.name}
                            </h5>
                            <h6 className='line-clamp-1 text-sm text-gray-500'>
                                {item.singer}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

ListMusic.propTypes = {
    classCard: PropTypes.node.isRequired,
    nameList: PropTypes.string.isRequired,
    classIcon: PropTypes.node.isRequired,
    isAbum: PropTypes.node.isRequired,
    isFan: PropTypes.node.isRequired,
    dataSinger: PropTypes.object,
    data: PropTypes.array,
}

export default ListMusic