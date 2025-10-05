import { useDispatch, useSelector } from "react-redux";
import {ButtonCricle, TableSong} from "../../components"
import icons from "../../util/icons";
import * as actions from '../../store/actions'
import { useEffect } from "react";

const {BiSolidRightArrow} = icons

const BangXepHang = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getBxh());
    }, [dispatch])
    const { songsBxh } = useSelector(state => state.app);
    return (
        <div className="w-full px-[59px] mt-10 max-[1200px]:px-5">
            <div className="flex items-center gap-3">
                <h2 className="text-4xl font-[600] capitalize max-[650px]:!text-2xl">
                    BXH nhạc mới
                </h2>
                <ButtonCricle className={"bg-white shadow-sm mt-1"}>
                    <BiSolidRightArrow className="ml-[2px] text-[18px]"/>
                </ButtonCricle>
            </div>
            <TableSong 
                isHeader={"hidden"} 
                isMusic={"hidden"} 
                data={songsBxh}
                classIndex={"!w-[80px] text-center"}
            />
        </div>
    )
}
export default BangXepHang