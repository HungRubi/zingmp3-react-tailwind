import { TableSong, Button, ModalBxh } from "../../components"

const Zingchart = () => {
    return (
        <div className="w-full px-[59px]">
            <TableSong isMusic={"hidden"} isIcon={"!hidden"}/>
            <div className="w-full flex justify-center items-center mt-8">
                <Button className={"!bg-transparent border !border-[#218888] !py-1"}>
                    Xem top 100
                </Button>
            </div>
            <div className="mt-10">
                <h2 className="capitalize text-[45px] text-[#218888] font-[600]">
                    bảng xếp hạng tuần
                </h2>
                <div className="w-full flex items-center gap-8">
                    <ModalBxh nameModal={"việt nam"}/>
                    <ModalBxh nameModal={"US-UK"}/>
                    <ModalBxh nameModal={"K-Pop"}/>
                </div>
            </div>
        </div>
    )
}

export default Zingchart