import { Top100Banner } from "../../util/iconSgv";
import { useDispatch, useSelector } from "react-redux";
import { ListMusic } from "../../components";
import { useEffect } from "react";
import * as actions from '../../store/actions'

const Top100 = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getTop100())
    })
    const { top100NoiBat } = useSelector(state => state.app)
    const part1 = top100NoiBat?.slice(0,5);
    return (
        <div className="w-full px-[59px]">
            <div className="w-full flex items-center justify-center mt-10">
                <Top100Banner />
            </div>
            <div className="mt-10">
                <ListMusic 
                    data={part1}
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"nổi bật"}
                    isSinger={"hidden"}
                    type={"album"}
                />

                <h3 className="mt-10 text-2xl font-medium capitalize">tất cả</h3>
                <ListMusic 
                    classListCard={"flex-wrap"}
                    classWrapper={"!mt-0"}
                    data={top100NoiBat}
                    isFan={"hidden"}
                    isAbum={"hidden"}
                    classCard={"!w-[calc(20%-16px)]"}
                    isSinger={"hidden"}
                    type={"album"}
                />
            </div>
        </div>
    )
}

export default Top100