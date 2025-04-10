import {ButtonPlay} from '../components';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import icons from '../util/icons';
import { NavLink } from 'react-router-dom';

const {FaPlay} = icons;

const ListMusicSlider = ({data, nameList, type, dataSinger, dataSong}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const part1 = data?.slice(0, 3);
    const part2 = data?.slice(3, 6);
    const part3 = data?.slice(6, 8);
    const slides = [part1, part2, part3];

    useEffect(() => {
        if (type !== 'slider') return;

        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentSlide((prev) => (prev + 1) % slides.length);
                    setIsAnimating(false);
                }, 1000);
            }
        }, 7000);

        return () => clearInterval(interval);
    }, [isAnimating, slides.length, type]);
    
    return (
        <div className="w-full mt-10">
            <h5 className="capitalize text-2xl font-medium">
                {nameList || 'BXH nhạc mới'}
            </h5>
            <div className="w-full flex mt-8 relative overflow-hidden">
                {type === 'slider' ? (
                    <div className={`w-full flex transition-transform duration-500 ease-in-out ${isAnimating ? 'sliding' : ''}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                   {slides?.map((part, index) => (
                       <div key={index} className="w-full flex flex-none gap-5">
                           {part?.map((item, itemIndex) => (
                               <div key={itemIndex}
                               className="w-1/3 p-2.5 bg-white/30 rounded-sm flex gap-2.5">
                                   <div className="relative rounded-lg overflow-hidden group w-30 h-30">
                                       <img 
                                           src={item.img} 
                                           alt={item.name} 
                                           className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                                       />
                                       <div className={`top-0 bottom-0 left-0 right-0 absolute bg-hover-music 
                                       items-center justify-center gap-3 flex transform scale-0 transition-transform 
                                       duration-500 ease-in-out group-hover:scale-100`}>
                                           <ButtonPlay className="text-white !h-11 !w-11">
                                                  <FaPlay className='text-lg ml-1 text-white'/>
                                           </ButtonPlay>
                                       </div>
                                   </div>
                                   <div className="flex flex-1 flex-col justify-between">
                                       <div className="text-sm capitalize">
                                           <h5 className='font-medium text-base text-gray-800'>
                                               {item.name}
                                           </h5>
                                           <h6 className='text-gray-500 text-sm mt-1'>
                                               {item.singer}
                                           </h6>
                                       </div>
                                       <div className="flex w-full justify-between items-end">
                                           <h2 className='index_bxh'>
                                               #{index * 3 + itemIndex + 1}
                                           </h2>
                                           <span className='text-base text-gray-600'>
                                               {item.format}
                                           </span>
                                       </div>
                                   </div>
                               </div>
                           ))}
                           {index === 2 && (
                               <div className="w-1/3 p-2.5 bg-white/30 rounded-sm flex gap-2.5 items-center justify-center">
                                   <h5 className='text-2xl text-[#208787] font-medium'>Xem tất cả</h5>
                               </div>
                           )}
                       </div>
                   ))}
               </div>
                ) : (
                    <div className={`w-full flex transition-transform duration-500 ease-in-out`}>
                       <div  className="w-full flex flex-none gap-5">
                            <div className="w-1/3 p-2.5 bg-white/30 rounded-sm flex gap-5 items-center">
                                <div className="relative rounded-[50%] overflow-hidden group w-25 h-25 flex-none">
                                    <img 
                                        src={dataSinger[0]?.img}
                                        alt={dataSinger[0]?.name}
                                        className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                                    />
                                    <div className={`top-0 bottom-0 left-0 right-0 absolute bg-hover-music 
                                    items-center justify-center gap-3 flex transform scale-0 transition-transform 
                                    duration-500 ease-in-out group-hover:scale-100 rounded-[50%]`}>
                                        <NavLink to={`/singer/${dataSinger[0]?.slug}`} className="flex items-center justify-center">
                                            <FaPlay className='text-lg ml-1 text-white'/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="text-sm capitalize">
                                        <h6 className='text-[12px] text-gray-500 font-[500] capitalize'>
                                            nghệ sĩ
                                        </h6>
                                        <h5 className='font-medium text-base text-gray-800 mt-1.5 line-clamp-1'>
                                            {dataSinger[0]?.stagename}
                                        </h5>
                                        <h6 className='text-[12px] text-gray-500 font-[500] capitalize mt-1'>
                                            2.5M quan tâm
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {dataSong?.map((item) => (
                                <div className="w-1/3 p-2.5 bg-white/30 rounded-sm flex gap-5 items-center" key={item._id}>
                                    <div className="relative rounded-lg overflow-hidden group w-25 h-25 flex-none">
                                        <img 
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                                        />
                                        <div className={`top-0 bottom-0 left-0 right-0 absolute bg-hover-music 
                                        items-center justify-center gap-3 flex transform scale-0 transition-transform 
                                        duration-500 ease-in-out group-hover:scale-100 rounded-lg`}>
                                            <FaPlay className='text-lg ml-1 text-white'/>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="text-sm capitalize">
                                            <h6 className='text-[12px] text-gray-500 font-[500] capitalize'>
                                                bài hát
                                            </h6>
                                            <h5 className='font-medium text-base text-gray-800 mt-1.5 line-clamp-2'>
                                                {item.name}
                                            </h5>
                                            <h6 className='text-[12px] text-gray-500 font-[500] capitalize mt-1'>
                                                {item.singer}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

ListMusicSlider.propTypes = {
    dataSong: PropTypes.array,
    dataSinger: PropTypes.array,
    data: PropTypes.array,
    nameList: PropTypes.string,
    type: PropTypes.string,
}

export default ListMusicSlider;