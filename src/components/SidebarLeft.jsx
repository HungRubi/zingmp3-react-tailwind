import { menuSide, menuSide2, menuSide3 } from '../util/menu.js';
import { NavLink } from 'react-router-dom';
import {Button, ButtonCricle, Modal} from '../components';
import icons  from '../util/icons.js';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions'
const {LuPlus, FaChevronLeft, FaChevronRight} = icons

const notActive = 'py-[12px] px-[25px] flex items-center gap-[12px] text-[#32323D] transition-all duration-300 ease-in-out';
const active = 'py-[12px] px-[25px] flex items-center gap-[12px] text-[#0F7070] transition-all duration-300 ease-in-out';
const SidebarLeft = () => {
    const {currentUser, isTabLeftMobie} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1130);
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

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1130);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const toggleTabLeftMobie = () => {
        dispatch(actions.isSidebarLeftMobie(!isTabLeftMobie));
    }
    return (
        <div className='bg-[#DDE4E4] h-full flex flex-col'>
            <div className={`w-full px-[25px] py-5 flex justify-start items-center max-[1130px]:p-0 max-[1130px]:h-[70px] max-[1130px]:justify-center
                ${isTabLeftMobie && '!justify-start !px-[25px]'}`}>
                    <img 
                        src={(isDesktop && !isTabLeftMobie) || isTabLeftMobie ? "/img/logo.svg" : "/img/logo_mobie.svg"} 
                        alt="logo" 
                        className={`w-[120px] h-10`}
                    />
            </div>
            <div className="flex flex-col">
                {menuSide.map(item => (
                    <NavLink 
                        key={item.text} 
                        className={({isActive}) => isActive ? active : notActive}
                        to={item.path}
                    >
                        <item.icons className='size-[24px] max-[1130px]:size-[18px]'/> 
                        <span className={`font-medium text-[15px] capitalize max-[1130px]:hidden 
                        transition-all duration-300 ease-in-out max-[1130px]:text-[13px]
                            ${isTabLeftMobie && '!block'}`}>
                            {item.text}
                        </span>
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
                                to={item.path}
                            >
                                <item.icons className='size-[24px] max-[1130px]:size-[18px]'/> 
                                <span className={`font-medium text-[15px] capitalize max-[1130px]:hidden 
                                transition-all duration-300 ease-in-out max-[1130px]:text-[13px] 
                                ${isTabLeftMobie && '!block'}`}>
                                    {item.text}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                    <div className={`my-4 py-[15px] px-[8px] rounded-lg mx-[20px] bg-radient transition-all duration-300 ease-in-out
                        max-[1130px]:hidden ${isTabLeftMobie && '!block'}`}>
                        <h6 className="text-[12px] line-clamp-2 text-center mb-2.5 font-medium text-white">
                            {currentUser && JSON.stringify(currentUser) !== "{}" ? "Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM" : "Đăng nhập để khám phá playlist dành riêng cho bạn"}
                        </h6>
                        {currentUser && JSON.stringify(currentUser) !== "{}" ? (
                            <Button className={"!bg-[#ffdb00] uppercase text-[12px] !font-[600] text-gray-600"}>
                                Nâng cấp tài khoản
                            </Button>
                        ) : (
                            <Modal className={"!mb-0 !py-1 !bg-[#ffdd00d5]"}/>
                        )}
                        
                    </div>
                    {currentUser && JSON.stringify(currentUser) !== "{}" ? (
                        <>
                            <div className="flex flex-col">
                                {menuSide3.map(item => (
                                    <NavLink 
                                        key={item.text} 
                                        className={"py-[12px] px-[25px] flex items-center gap-[12px] text-[#32323D]"}
                                        to={item.path}
                                    >
                                        <item.icons className='size-[24px] max-[1130px]:size-[18px]'/> 
                                        <span className={`font-medium text-[15px] capitalize max-[1130px]:hidden 
                                        transition-all duration-300 ease-in-out max-[1130px]:text-[13px]
                                            ${isTabLeftMobie && '!block'}`}>
                                            {item.text}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                            <div className={`px-[25px] my-3 transition-all duration-300 ease-in-out ${isTabLeftMobie ? 'block' : 'max-[1130px]:hidden'}`}>
                                <div className="border-t border-[#00000021]"></div>
                            </div>
                            <div className={`w-full px-[24px] transition-all duration-300 ease-in-out max-[1130px]:text-sm ${isTabLeftMobie ? 'block' : 'max-[1130px]:hidden'}`}>
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
                <div className="absolute bottom-0 left-0 right-0 h-[54px] px-[24px] cursor-pointer 
                flex items-center border-t border-[rgba(0,0,0,0.1)] bg-[#DDE4E4] max-[1130px]:px-0 
                max-[1130px]:justify-center">
                    <ButtonCricle className={`!bg-[#0000001a] shadow !h-8 !w-8 flex-none max-[1130px]:!h-7 max-[1130px]:!w-7 
                        ${isTabLeftMobie ? 'min-[1130px]:flex' : 'max-[1130px]:hidden'}`}>
                        <LuPlus className="text-[18px] text-white "/>
                    </ButtonCricle>
                    <h5 className={`ml-2.5 text-gray-700 max-[1130px]:hidden transition-all max-[1130px]:text-sm 
                        duration-300 ease-in-out ${isTabLeftMobie ? '!block' : 'max-[1130px]:hidden'}`}>
                        Tạo playlist mới
                    </h5>
                    <ButtonCricle onClick={toggleTabLeftMobie}
                    className={`!bg-[#0000001a] shadow !h-8 !w-8 flex-none hidden max-[1130px]:flex 
                    ${isTabLeftMobie ? 'ml-2.5' : 'ml-0'} max-[1130px]:!h-7 max-[1130px]:!w-7`}>
                        {isTabLeftMobie ? <FaChevronLeft className="text-[15px] text-white"/> : 
                        <FaChevronRight className="text-[15px] text-white"/>}
                    </ButtonCricle>
                </div>
            </div>
        </div>
    )
}

export default SidebarLeft