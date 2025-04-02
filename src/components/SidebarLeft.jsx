import logo from '../assets/logo.svg';
import { menuSide, menuSide2, menuSide3 } from '../util/menu.js';
import { NavLink } from 'react-router-dom';
import {Button, ButtonCricle, Modal} from '../components';
import icons  from '../util/icons.js';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
const {LuPlus} = icons

const notActive = 'py-[12px] px-[25px] flex items-center gap-[12px] text-[#32323D]';
const active = 'py-[12px] px-[25px] flex items-center gap-[12px] text-[#0F7070]';
const SidebarLeft = () => {
    const {currentUser} = useSelector(state => state.app);

    const [isScrolled, setIsScrolled] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            const scrollTop = scrollContainer.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='bg-[#DDE4E4] h-[calc(100vh-90px)] flex flex-col'>
            <div className="w-full px-[25px] py-5 flex justify-start items-center">
                <img src={logo} alt="logo" className='w-[120px] h-10'/>
            </div>
            <div className="flex flex-col">
                {menuSide.map(item => (
                    <NavLink 
                    key={item.text} 
                    className={({isActive}) => isActive ? active : notActive}
                    to={item.path}>
                        <item.icons className='size-[24px]'/> 
                        <span className='font-medium text-[15px] capitalize'>{item.text}</span>
                    </NavLink>
                ))}
            </div>
            <div className="flex-1 relative">
                <div 
                    ref={scrollContainerRef}
                    className={`absolute inset-0 overflow-y-auto pb-[54px] transition-shadow duration-300 ${
                        isScrolled ? 'is-mark' : ''
                    } [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#0000001a] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]`}
                >
                    <div className="px-[25px]">
                        <div className="border-t border-[#00000021]"></div>
                    </div>
                    <div className="mt-3 flex flex-col">
                        {menuSide2.map(item => (
                            <NavLink 
                            key={item.text} 
                            className={({isActive}) => isActive ? active : notActive}
                            to={item.path}>
                                <item.icons className='size-[24px]'/> 
                                <span className='font-medium text-[15px] capitalize'>{item.text}</span>
                            </NavLink>
                        ))}
                    </div>
                    <div className="my-4 py-[15px] px-[8px] rounded-lg mx-[20px] bg-radient">
                        <h6 className="text-[12px] line-clamp-2 text-center mb-2.5 font-medium text-white">
                            {currentUser ? "Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM" : "Đăng nhập để khám phá playlist dành riêng cho bạn"}
                        </h6>
                        {currentUser ? (
                            <Button className={"!bg-[#ffdb00] uppercase text-[12px] !font-[600] text-gray-600"}>
                                Nâng cấp tài khoản
                            </Button>
                        ) : (
                            <Modal className={"!mb-0 !py-1 !bg-[#ffdd00d5]"}/>
                        )}
                        
                    </div>
                    {currentUser ? (
                        <>
                            <div className="flex flex-col">
                                {menuSide3.map(item => (
                                    <NavLink 
                                    key={item.text} 
                                    className={"py-[12px] px-[25px] flex items-center gap-[12px] text-[#32323D]"}
                                    to={item.path}>
                                        <item.icons className='size-[24px]'/> 
                                        <span className='font-medium text-[15px] capitalize'>{item.text}</span>
                                    </NavLink>
                                ))}
                            </div>
                            <div className="px-[25px] my-3">
                                <div className="border-t border-[#00000021]"></div>
                            </div>
                            <div className="w-full px-[24px]">
                                <div className="h-[32px] line-clamp-1 text-sm cursor-pointer">
                                    <h5>hùng dz</h5>
                                </div>
                                <div className="h-[32px] line-clamp-1 text-sm cursor-pointer">
                                    <h5>thịnh óc cho</h5>
                                </div>
                                <div className="h-[32px] line-clamp-1 text-sm cursor-pointer">
                                    <h5>vmu</h5>
                                </div>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[54px] px-[24px] cursor-pointer flex items-center border-t border-[rgba(0,0,0,0.1)] bg-[#DDE4E4]">
                    <ButtonCricle className={"!bg-[#0000001a] shadow !h-7 !w-7"}>
                        <LuPlus className="ml-[2px] text-[18px] text-white"/>
                    </ButtonCricle>
                    <h5 className='ml-2.5 text-gray-700'>Tạo playlist mới</h5>
                </div>
            </div>
        </div>
    )
}

export default SidebarLeft