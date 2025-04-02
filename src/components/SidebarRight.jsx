import { useState } from 'react';
import {ButtonCricle} from '../components';
import icons from '../util/icons';
const {FaPlay} = icons

const {TfiAlarmClock, BsThreeDots, FaHeart, FaToggleOn} = icons;

const SidebarRight = () => {
    const notActive = "w-1/2 grow rounded-[999px] py-[5px] cursor-pointer text-[#32323d] font-[500] text-[12px] text-center";
    const active = "w-1/2 grow rounded-[999px] py-[5px] cursor-pointer text-[#218888] font-[500] text-[12px] text-center bg-[hsla(0,0%,100%,0.3)] btn_active";
    const [isPlay, setIsPlay] = useState("danh sách phát");
    return (
        <div className="bg-[#CED9D9] h-full flex flex-col">
            <div className="flex h-[70px] items-center justify-between px-2 w-full gap-2">
                <div className="flex-1 rounded-[999px] bg-[hsla(0,0%,100%,0.3)] p-[3px] flex">
                    <button onClick={() => setIsPlay("danh sách phát")}
                    className={isPlay === "danh sách phát" ? active : notActive}>
                        Danh sách phát
                    </button>
                    <button onClick={() => setIsPlay("nghe gần đây")}
                    className={isPlay === "nghe gần đây" ? active : notActive}>
                        Nghe gần đây
                    </button>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <ButtonCricle>
                        <TfiAlarmClock className='text-[20px] opacity-70'/>
                    </ButtonCricle>
                    <ButtonCricle>
                        <BsThreeDots className='text-[20px] opacity-70'/>
                    </ButtonCricle>
                </div>
            </div>
            {isPlay === "danh sách phát" ? (
                <div className="flex-1 px-2">
                    <div className="w-full flex p-2 items-center group bg-[#218888] rounded-sm">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/6/8/b/a68b0bd411adc076ba6c3fb00203a1ee.jpg"
                                alt="test" 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg"/>
                            </div>
                        </div>
                        <div className="flex-auto ml-2.5">
                            <h5 className="capitalize font-medium line-clamp-1 text-white text-sm">
                                chạy ngay đi
                            </h5>
                            <h6 className="text-sm capitalize line-clamp-1 text-gray-300 text-[12px] mt-[1px]">
                                sơn tùng MTP
                            </h6>
                        </div>
                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                            <FaHeart className='text-white '/>
                            <BsThreeDots className='text-white'/>
                        </div>
                    </div>
                    <div className="px-2 flex mt-2.5">
                        <h5 className='font-medium '>Tiếp theo</h5>
                    </div>
                    <div className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/6/8/b/a68b0bd411adc076ba6c3fb00203a1ee.jpg"
                                alt="test" 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex-auto ml-2.5">
                            <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                chạy ngay đi
                            </h5>
                            <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                sơn tùng MTP
                            </h6>
                        </div>
                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                            <FaHeart className='text-[#218888] cursor-pointer'/>
                            <BsThreeDots className='text-[#218888] cursor-pointer'/>
                        </div>
                    </div>
                    <div className="w-full flex p-2 items-center justify-between">
                        <div className="">
                            <h5 className='font-medium text-gray-800'>Tự động phát</h5>
                            <h6 className='text-sm text-gray-600'>Danh sách bài hát gợi ý</h6>
                        </div>
                        <FaToggleOn className='mr-2 text-[#218888] text-3xl cursor-pointer'/>
                    </div>
                    <div className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/6/8/b/a68b0bd411adc076ba6c3fb00203a1ee.jpg"
                                alt="test" 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex-auto ml-2.5">
                            <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                chạy ngay đi
                            </h5>
                            <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                sơn tùng MTP
                            </h6>
                        </div>
                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                            <FaHeart className='text-[#218888] cursor-pointer'/>
                            <BsThreeDots className='text-[#218888] cursor-pointer'/>
                        </div>
                    </div>
                    <div className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/6/8/b/a68b0bd411adc076ba6c3fb00203a1ee.jpg"
                                alt="test" 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex-auto ml-2.5">
                            <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                chạy ngay đi
                            </h5>
                            <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                sơn tùng MTP
                            </h6>
                        </div>
                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                            <FaHeart className='text-[#218888] cursor-pointer'/>
                            <BsThreeDots className='text-[#218888] cursor-pointer'/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 px-2">
                    <div className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/6/8/b/a68b0bd411adc076ba6c3fb00203a1ee.jpg"
                                alt="test" 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex-auto ml-2.5">
                            <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                chạy ngay đi
                            </h5>
                            <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                sơn tùng MTP
                            </h6>
                        </div>
                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                            <FaHeart className='text-[#218888] cursor-pointer'/>
                            <BsThreeDots className='text-[#218888] cursor-pointer'/>
                        </div>
                    </div>
                    <div className="w-full flex p-2 items-center group rounded-sm hover:bg-[hsla(0,0%,100%,0.3)]">
                        <div className="h-10 w-10 relative overflow-hidden rounded-sm">
                            <img 
                                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/6/8/b/a68b0bd411adc076ba6c3fb00203a1ee.jpg"
                                alt="test" 
                                className="w-full object-cover"
                            />
                            <div className="top-0 bottom-0 left-0 right-0 absolute bg-[#00000021] items-center justify-center gap-3 flex transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100">
                                <FaPlay className="text-white text-lg cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex-auto ml-2.5">
                            <h5 className="capitalize font-medium line-clamp-1 text-gray-800 text-sm">
                                chạy ngay đi
                            </h5>
                            <h6 className="text-sm capitalize line-clamp-1 text-gray-600 text-[12px] mt-[1px]">
                                sơn tùng MTP
                            </h6>
                        </div>
                        <div className="mr-2 items-center gap-8 hidden group-hover:flex">
                            <FaHeart className='text-[#218888] cursor-pointer'/>
                            <BsThreeDots className='text-[#218888] cursor-pointer'/>
                        </div>
                    </div>
                </div>
            )}
                
        </div>
    )
}

export default SidebarRight