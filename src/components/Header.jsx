import icons from '../util/icons'
import {Search, ButtonCricle, Button, Modal} from '../components'
import {Basic, Download, Plus, Premium} from '../util/iconSgv'
import TrinhPhatNhac from '../util/iconSgv/TrinhPhatNhac'
import GiaoDien from '../util/iconSgv/GiaoDien'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import * as actions from '../store/actions'
import { toast } from 'react-toastify'

const { GoArrowRight, GoArrowLeft, IoSettingsOutline, 
    MdBlockFlipped, RxUpload, FiLogOut, GoChevronRight,
    HiOutlineInformationCircle, PiFileTextLight, MdOutlinePrivacyTip,
    PiFlagLight, IoCallOutline } = icons

const Header = () => {
    const {currentUser, message} = useSelector(state => state.user)
    const [showSettingMenu, setShowSettingMenu] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(false)
    const settingRef = useRef(null)
    const userRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingRef.current && !settingRef.current.contains(event.target)) {
                setShowSettingMenu(false)
            }
            if (userRef.current && !userRef.current.contains(event.target)) {
                setShowUserMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    const handleMenuClick = (e) => {
        e.stopPropagation() // Ngăn sự kiện lan truyền
    }
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(actions.logoutPersist());
        dispatch(actions.logoutMusic());
    }
    useEffect(() => {
        if(message){
            toast.success(message);
            dispatch(actions.resetMessage());
        }
    }, [])
    return(
        <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center gap-8">
                <div className="flex items-center">
                    <span className='text-[24px] mr-5 cursor-pointer opacity-40'>
                        <GoArrowLeft/>
                    </span>
                    <span className='text-[24px] cursor-pointer opacity-40'>
                        <GoArrowRight/>
                    </span>
                </div>
                <div className="w-[440px]">
                    <Search/>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2.5">
                <Button className="!bg-[#218888] !text-white">
                    Nâng cấp tài khoản
                </Button>
                <Button>
                    <Download/>
                    <span className='ml-1.5'>Tải bản Windows</span>
                </Button>
                <div ref={settingRef}>
                    <ButtonCricle 
                        className={"relative"} 
                        onClick={() => setShowSettingMenu(!showSettingMenu)}
                    >
                        <IoSettingsOutline className='text-[20px] opacity-80'/>
                        <div onClick={handleMenuClick}   
                        className={`absolute p-[6px] rounded-sm w-[300px] ${showSettingMenu ? '' : 'hidden'} bg-[#e0ebeb] shadow-[0_0_5px_rgba(0,0,0,0.2)] top-[120%] right-0`}>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <TrinhPhatNhac/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Trình phát nhạc</h5>
                                </div>
                                <GoChevronRight className='text-2xl group-hover:text-[#0e8080]'/>
                            </div>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <GiaoDien/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Giao diện</h5>
                                </div>
                                <GoChevronRight className='text-2xl group-hover:text-[#0e8080]'/>
                            </div>
                            <div className=" px-2.5">
                                <div className="bg-[rgba(0,0,0,0.1)] my-2.5 w-full h-[1px]"></div>
                            </div>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <HiOutlineInformationCircle className='text-[22px] text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Giao diện</h5>
                                </div>
                            </div>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <PiFileTextLight className='text-[22px] text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Thỏa thuận sử dụng</h5>
                                </div>
                            </div>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <MdOutlinePrivacyTip className='text-[22px] text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Chính sách bảo mật</h5>
                                </div>
                            </div>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <PiFlagLight className='text-[22px] text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Báo cáo vi phạm</h5>
                                </div>
                            </div>
                            <div className="py-3 px-2.5 h-11 flex group hover:bg-[hsla(0,0%,100%,0.3)] items-center justify-between">
                                <div className='flex items-center gap-2.5'>
                                    <IoCallOutline className='text-[22px] text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Liên hệ</h5>
                                </div>
                            </div>
                        </div>
                    </ButtonCricle>
                </div>
                <div ref={userRef}>
                    <ButtonCricle 
                        className={"relative"}
                        onClick={() => setShowUserMenu(!showUserMenu)}
                    >
                        {currentUser && JSON.stringify(currentUser) !== "{}" ? (
                            <img src={currentUser?.img} alt="" className='rounded-[50%]'/>
                        ) : (
                            <img src="/img/default.png" alt="" className='rounded-[50%]'/>
                        )}
                        {currentUser && JSON.stringify(currentUser) !== "{}" ? (
                            <div onClick={handleMenuClick}
                            className={`absolute p-[6px] ${showUserMenu ? '' : 'hidden'} text-left rounded-sm w-[300px] h-[calc(100vh-200px)] bg-[#e0ebeb] shadow-[0_0_5px_rgba(0,0,0,0.2)] top-[120%] right-0 overflow-y-auto 
                                        [&::-webkit-scrollbar]:w-1 
                                        [&::-webkit-scrollbar-track]:bg-transparent 
                                        [&::-webkit-scrollbar-thumb]:bg-[#0000001a] 
                                        [&::-webkit-scrollbar-thumb]:rounded-full 
                                        hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]`}>
                                <div className="p-2.5 mb-2.5">
                                    <div className="flex flex-col justify-center">
                                        <div className="mb-4 flex items-center gap-2.5 w-full">
                                            <div className="w-16 h-16 rounded-[50%] overflow-hidden">
                                                <img src={currentUser?.img} alt="" className='rounded-[50%]'/>
                                            </div>
                                            <div className="">
                                                <h4 className='capitalize font-medium text-lg text-gray-800 mb-[6px]'>{currentUser?.fullname}</h4>
                                                <Basic/>
                                            </div>
                                        </div>
                                        <Button className={"!font-[400] text-gray-700 text-sm"}>
                                            Nâng cấp tài khoản
                                        </Button>
                                    </div>
                                </div>
                                <div className="px-2.5 mb-2">
                                    <h5 className='font-medium '>Nâng cấp gói</h5>
                                </div>
                                <div className="px-2.5">
                                    <div className="py-4 px-5 rounded-[12px] mb-3 bg_plus">
                                        <div className="text-2xl flex items-center gap-2 text-[#8e4cff] font-medium mb-1">
                                            Zing MP3
                                            <Plus/>
                                        </div>
                                        <div className="text-sm mb-1 text-[#141414] font-medium line-clamp-1">
                                            Chỉ từ 13.000đ/tháng
                                        </div>
                                        <div className="mb-4 text-sm font-[400] line-clamp-2 text-[rgba(20,20,20,.8)]">
                                            Nghe nhạc với chất lượng cao nhất, không quảng cáo
                                        </div>
                                        <Button className={"!bg-[#8e4cff] text-white"}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                    <div className="py-4 px-5 rounded-[12px] mb-3 bg_premium">
                                        <div className="text-2xl flex items-center gap-2 text-[#dca519] font-medium mb-1 ">
                                            Zing MP3
                                            <Premium/>
                                        </div>
                                        <div className="text-sm mb-1 text-[#141414] font-medium line-clamp-1">
                                            Chỉ từ 41.000đ/tháng
                                        </div>
                                        <div className="mb-4 text-sm font-[400] line-clamp-2 text-[rgba(20,20,20,.8)]">
                                            Nghe nhạc với chất lượng cao nhất, không quảng cáo
                                        </div>
                                        <Button className={"!bg-[#dca519] text-white"}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                </div>
                                <div className=" px-2.5">
                                    <div className="bg-[rgba(0,0,0,0.1)] my-2.5 w-full h-[1px]"></div>
                                </div>
                                <div className="pl-2.5 font-medium mb-2">
                                    Cá nhân
                                </div>
                                <div className="py-3 px-2.5 h-11 flex gap-2.5 group hover:bg-[hsla(0,0%,100%,0.3)]">
                                    <MdBlockFlipped className='text-2xl text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Danh sách chặn</h5>
                                </div>
                                <div className="py-3 px-2.5 h-11 flex gap-2.5 group hover:bg-[hsla(0,0%,100%,0.3)]">
                                    <RxUpload className='text-2xl text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Tải lên</h5>
                                </div>
                                <div className=" px-2.5">
                                    <div className="bg-[rgba(0,0,0,0.1)] my-2.5 w-full h-[1px]"></div>
                                </div>
                                <div className="py-3 px-2.5 h-11 flex gap-2.5 group hover:bg-[hsla(0,0%,100%,0.3)]" onClick={handleLogout}>
                                    <FiLogOut className='text-2xl text-gray-600 group-hover:text-[#0e8080]'/>
                                    <h5 className='text-gray-600 font-[400] group-hover:text-[#0e8080]'>Đăng xuất</h5>
                                </div>
                            </div>
                        ) : (
                            <div onClick={handleMenuClick}
                            className={`absolute p-[6px] ${showUserMenu ? '' : 'hidden'} rounded-sm w-[300px] bg-[#e0ebeb] shadow-[0_0_5px_rgba(0,0,0,0.2)] top-[120%] right-0`}>
                                
                                <Modal/>
                                <div className="px-2.5 mb-2">
                                    <h5 className='font-medium '>Nâng cấp gói</h5>
                                </div>
                                <div className="px-2.5">
                                    <div className="py-4 px-5 rounded-[12px] mb-3 bg_plus">
                                        <div className="text-2xl flex items-center gap-2 text-[#8e4cff] font-medium mb-1">
                                            Zing MP3
                                            <Plus/>
                                        </div>
                                        <div className="text-sm mb-1 text-[#141414] font-medium line-clamp-1">
                                            Chỉ từ 13.000đ/tháng
                                        </div>
                                        <div className="mb-4 text-sm font-[400] line-clamp-2 text-[rgba(20,20,20,.8)]">
                                            Nghe nhạc với chất lượng cao nhất, không quảng cáo
                                        </div>
                                        <Button className={"!bg-[#8e4cff] text-white"}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                    <div className="py-4 px-5 mb-3 rounded-[12px] bg_premium">
                                        <div className="text-2xl flex items-center gap-2 text-[#dca519] font-medium mb-1 ">
                                            Zing MP3
                                            <Premium/>
                                        </div>
                                        <div className="text-sm mb-1 text-[#141414] font-medium line-clamp-1">
                                            Chỉ từ 41.000đ/tháng
                                        </div>
                                        <div className="mb-4 text-sm font-[400] line-clamp-2 text-[rgba(20,20,20,.8)]">
                                            Nghe nhạc với chất lượng cao nhất, không quảng cáo
                                        </div>
                                        <Button className={"!bg-[#dca519] text-white"}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ButtonCricle>
                </div>
            </div>
        </div>
    )
}

export default Header