import ButtonCircle from "./ButtonCricle";
import Button from "./Button";
import icons from "../util/icons";
import PropTypes from "prop-types";
const {FaPlay} = icons

const ModalBxh = ({nameModal}) => {
    return (
        <div className="w-full rounded-2xl py-5 px-2.5 bg-[hsla(0,0%,100%,0.5)] mt-8">
            <div className="w-full flex p-2.5">
                <div className="w-[40px]"></div>
                <h3 className="capitalize text-[26px] font-medium text-[#218888]">
                    {nameModal}
                </h3>
                <ButtonCircle className={"!bg-[#218888] ml-2.5"}>
                    <FaPlay className="text-white ml-[1px]"/>
                </ButtonCircle>
            </div>

            <div className="w-full flex py-2.5 items-center group">
                <div className="w-[40px]">
                    <h5 className="index_bxh">
                        1
                    </h5>
                </div>
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
                    <h5 className="text-gray-700 capitalize font-medium line-clamp-1">
                        chạy ngay đi
                    </h5>
                    <h6 className="text-sm capitalize line-clamp-1 text-gray-500">
                        sơn tùng MTP
                    </h6>
                </div>
                <div className="w-[46px]">
                    <h6 className="text-sm text-gray-500">04:08</h6>
                </div>
            </div>

            <div className="w-full flex justify-center mt-5">
                <Button className={"border border-[#218888] !bg-transparent !py-[7px]"}>
                    Xem tất cả
                </Button>
            </div>
        </div>
    )
}

ModalBxh.propTypes = {
    nameModal: PropTypes.string.isRequired,
}

export default ModalBxh