import { useSelector } from "react-redux"
import { ListRadio } from "../../components";

const Radio = () => {
    const {radio} = useSelector(state => state.app);
    return (
        <div className="w-full px-[59px] mt-10">
            <h2 className="text-5xl font-medium">
                Radio
            </h2>
            <ListRadio data={radio} isName={"hidden"}/>
        </div>
    )
}

export default Radio