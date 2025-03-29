import {ButtonCricle} from '../components';
import icons from '../util/icons'

const {TfiAlarmClock, BsThreeDots} = icons;

const SidebarRight = () => {
    return (
        <div className="bg-[#CED9D9] h-full box-shadow-left">
            <div className="flex h-[70px] items-center justify-between px-2 w-full gap-2">
                <div className="flex-1 rounded-[999px] bg-[hsla(0,0%,100%,0.3)] p-[3px] flex">
                    <div className="w-1/2 grow rounded-[999px] py-[5px] cursor-pointer text-[#32323d] font-[500] text-[12px] text-center">
                        Danh sách phát
                    </div>
                    <div className="w-1/2 grow rounded-[999px] py-[5px] cursor-pointer text-[#218888] font-[500] text-[12px] text-center bg-[hsla(0,0%,100%,0.3)] btn_active">
                        Danh sách phát
                    </div>
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
        </div>
    )
}

export default SidebarRight