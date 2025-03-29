import icons from '../util/icons'
import {Search, ButtonCricle, Button} from '../components'
import {Download} from '../util/iconSgv'

const {GoArrowRight, GoArrowLeft, IoSettingsOutline} = icons

const Header = () => {
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
                <ButtonCricle>
                    <IoSettingsOutline className='text-[20px] opacity-80'/>
                </ButtonCricle>
                <ButtonCricle>
                    <img src="/img/default.png" alt="" className='rounded-[50%]'/>
                </ButtonCricle>
            </div>
        </div>
    )
}

export default Header