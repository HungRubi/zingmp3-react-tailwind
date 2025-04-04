import {getArrSlider} from '../util/fn';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Slider = () => {
    const {banners} = useSelector(state => state.app);

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-items')
        let min = 0
        let max = 2
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)
            for (let i = 0; i < sliderEls.length; i++) {
                // Delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

                // Hide or Show images
                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`
                } else {
                    sliderEls[i].style.cssText = `display: none`
                }
            }
            // Add animation by adding classnames
            list.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
        }, 3000)
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [])
    return (
        <div className="flex items-center justify-between w-full overflow-hidden pt-8 gap-4">
            {banners?.map((item, index) => (
                <img 
                    key={index}
                    src={item.thumbnail} 
                    alt="slider frist" 
                    className=" flex-1 object-contain w-[calc(100%/3-11px)] rounded-lg slider-items" 
                />
            ))}
        </div>
    )
}

export default Slider