import { useState } from 'react';
import icons from '../util/icons';
const { IoMdClose } = icons;
import PropTypes from 'prop-types';
import { formatString } from '../util//formatText';
const Modal = ({className, data}) => {
    const [isShow, setIsShow] = useState(false)

    const handleClose = () => {
        setIsShow(false)
    }

    const handleOpen = () => {
        setIsShow(true)
    }
    
    return (
        <>
            <span 
                onClick={handleOpen}
                type="button"
                className={`uppercase bg-transparent ${className} text-[12px] font-medium text-[#218888] cursor-pointer`}
            >
                xem thêm
            </span>
            <div 
                className={`${isShow ? 'flex' : 'hidden'} overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#00000086] bg-opacity-25`}
                onClick={handleClose}
            >
                <div className="relative p-4  max-w-md max-h-full" onClick={e => e.stopPropagation()}>
                    <div className="relative w-[480px] bg-[#e0ebeb] rounded-t-lg py-5 px-[30px] flex items-center justify-center flex-col">
                        <IoMdClose 
                            className='absolute top-4 right-3 text-lg text-gray-600 cursor-pointer z-90'
                            onClick={handleClose}
                        />
                        <div className="absolute top-0 right-0 left-0 bottom-0 blur-[50px] w-full bg-no-repeat bg-cover bg-center bg-[position-y:20%] bg-[url(https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/avatars/5/9/6/9/59696c9dba7a914d587d886049c10df6.jpg)]">
                        </div>
                        <div className="w-full flex flex-col items-center z-20">
                            <img src={data?.img} alt="" className="w-[110px] h-[110px] rounded-[50%]" />
                            <h4 className='text-2xl capitalize font-[600] mt-2.5'>
                                {data?.stagename}
                            </h4>
                        </div>
                    </div>
                    <div className="w-[480px] p-6 bg-[#e0ebeb] rounded-b-lg">
                        <div className="leading-7 text-gray-600 max-h-[218px] 
                            overflow-y-auto text-sm whitespace-pre-line
                            [&::-webkit-scrollbar]:w-1 
                            [&::-webkit-scrollbar-track]:bg-transparent 
                            [&::-webkit-scrollbar-thumb]:bg-[#0000001a] 
                            [&::-webkit-scrollbar-thumb]:rounded-full 
                            hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]">
                            {formatString(data?.description)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    className: PropTypes.node.isRequired,
    data: PropTypes.node.isRequired
}

export default Modal