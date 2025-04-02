import { Top100Banner } from "../../util/iconSgv";
import { useSelector } from "react-redux";
import { ListMusic } from "../../components";
const Top100 = () => {
    const {top100} = useSelector(state => state.app)
    return (
        <div className="w-full px-[59px]">
            <div className="w-full flex items-center justify-center mt-10">
                <Top100Banner />
            </div>
            <div className="mt-10">
                <ListMusic 
                    data={top100}
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"nổi bật"}
                />
            </div>
        </div>
    )
}

export default Top100