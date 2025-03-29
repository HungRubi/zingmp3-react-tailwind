import {ButtonPlay} from '../components';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ListMusicSlider = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const part1 = data.slice(0, 3);
    const part2 = data.slice(3, 6);
    const part3 = data.slice(6, 8);
    
    const slides = [part1, part2, part3];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentSlide((prev) => (prev + 1) % slides.length);
                    setIsAnimating(false);
                }, 1000);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [isAnimating, slides.length]);
    
    return (
        <div className="w-full mt-10">
            <h5 className="capitalize text-2xl font-medium">
                BXH nhạc mới
            </h5>
            <div className="w-full flex mt-8 relative overflow-hidden">
                <div className={`w-full flex transition-transform duration-500 ease-in-out ${isAnimating ? 'sliding' : ''}`}
                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((part, index) => (
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
                                            <ButtonPlay className="text-white !h-11 !w-11"/>
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
            </div>
        </div>
    )
}

ListMusicSlider.propTypes = {
    data: PropTypes.array,
}

export default ListMusicSlider