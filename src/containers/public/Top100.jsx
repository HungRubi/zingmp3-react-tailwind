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
        <div className="w-full px-[59px] max-[1200px]:px-5">
            <div className="w-full flex items-center justify-center mt-10 max-[750px]:mt-0">
                <Top100Banner />
            </div>
            <div className="mt-10 max-[750px]:mt-5">
                <ListMusic 
                    data={part1}
                    isFan={"hidden"}
                    classCard={"w-1/5"}
                    nameList={"nổi bật"}
                    isSinger={"hidden"}
                    type={"album"}
                />

                <h3 className="mt-10 text-2xl font-medium capitalize max-[750px]:mt-5">tất cả</h3>
                <ListMusic 
                    classListCard={"flex-wrap"}
                    classWrapper={"!mt-0"}
                    data={top100NoiBat}
                    isFan={"hidden"}
                    isAbum={"hidden"}
                    classCard={"w-[calc(20%-16px)] max-[1000px]:w-[calc(25%-16px)] max-[800px]:w-[calc(100%/3-14px)] max-[650px]:w-[calc(100%/2-10px)] max-[500px]:w-[calc(100%/2-11px)]"}
                    isSinger={"hidden"}
                    type={"album"}
                />
            </div>
        </div>
    )
}

export default Top100