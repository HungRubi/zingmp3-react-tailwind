import {ButtonCricle, TableSong} from "../../components"
import icons from "../../util/icons";

const {BiSolidRightArrow} = icons

const BangXepHang = () => {
    return (
        <div className="w-full px-[59px] mt-10">
            <div className="flex items-center gap-3">
                <h2 className="text-[44px] font-[600]">
                    Thư viện
                </h2>
                <ButtonCricle className={"bg-white shadow"}>
                    <BiSolidRightArrow className="ml-[2px] text-[18px]"/>
                </ButtonCricle>
            </div>
            <TableSong isHeader={"hidden"} isMusic={"hidden"}/>
        </div>
    )
}
export default BangXepHang