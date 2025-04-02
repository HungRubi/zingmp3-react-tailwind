import {Button} from '../components'
import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

const ListHub = ({data, nameList}) => {
    const [showAll, setShowAll] = useState(false)
    const containerRef = useRef(null)
    const [hasMultipleRows, setHasMultipleRows] = useState(false)

    useEffect(() => {
        const checkRows = () => {
            if (!containerRef.current) return
            const containerWidth = containerRef.current.offsetWidth
            const itemWidth = containerWidth / 4 - 20 // 20px là gap
            const itemsPerRow = Math.floor(containerWidth / itemWidth)
            setHasMultipleRows(data.length > itemsPerRow)
        }

        checkRows()
        window.addEventListener('resize', checkRows)
        return () => window.removeEventListener('resize', checkRows)
    }, [data.length])

    const displayData = showAll ? data : data.slice(0, 4)

    return (
        <div ref={containerRef} className="w-full flex flex-wrap gap-5 px-[59px] mt-10">
            <div className="w-full">
                <h5 className='text-2xl font-medium capitalize text-gray-700'>
                    {nameList}    
                </h5>
            </div>
            {displayData.map(item => (
                <div key={item.text} className="w-[calc(100%/4-15px)] rounded-2xl relative">
                    <img src={item.src} 
                    alt="bxh" className="w-full rounded-2xl"/>
                    <h5 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-medium capitalize whitespace-nowrap">
                        {item.text}
                    </h5>
                </div>
            ))}
            {hasMultipleRows && (
                <div className="w-full flex items-center justify-center">
                    <Button 
                        onClick={() => setShowAll(!showAll)}
                        className={`uppercase border border-[#0000001e] !py-[5px] bg-transparent text-gray-500 text-sm ${showAll ? '!text-[#0E8080]' : ''}`}
                    >
                        {showAll ? 'thu gọn' : 'tất cả'}
                    </Button>
                </div>
            )}
        </div>
    )
}

ListHub.propTypes = {
    data: PropTypes.array.isRequired,
    nameList: PropTypes.string.isRequired
}   

export default ListHub