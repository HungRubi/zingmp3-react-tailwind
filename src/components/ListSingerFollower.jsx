import ButtonCircle from "./ButtonCricle"
import icons from "../util/icons";

const {BiSolidRightArrow, PiShuffle} = icons

const ListSingerFollower = () => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-3">
                <h2 className="text-[44px] font-[600]">
                    Thư viện
                </h2>
                <ButtonCircle className={"bg-white shadow"}>
                    <BiSolidRightArrow className="ml-[2px] text-[18px]"/>
                </ButtonCircle>
            </div>
            <div className="w-full flex items-center gap-5">
                <div className="w-1/6 mt-8 relative">
                    <div className="w-full relative rounded-[50%] overflow-hidden group">
                        <img 
                            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/9/6/9/59696c9dba7a914d587d886049c10df6.jpg" 
                            alt="Sơn Tùng MTP" 
                            className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-120"
                        />
                        <div className={`top-0 bottom-0 left-0 right-0 absolute bg-[#0002] 
                        items-center justify-center gap-3 flex transform scale-0 transition-transform 
                        duration-500 ease-in-out group-hover:scale-100 rounded-[50%]`}>
                        </div>
                    </div>
                    <ButtonCircle className={"absolute bg-white bottom-[24%] right-0 h-12 w-12 shadow"}>
                        <PiShuffle className="text-2xl text-gray-600"/>
                    </ButtonCircle>
                    <div className="mt-4 line-clamp-1 text-center font-medium text-gray-600">
                        Sơn Tùng MTP
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListSingerFollower