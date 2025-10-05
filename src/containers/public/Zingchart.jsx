import { TableSong, Button, ModalBxh } from "../../components"

const Zingchart = () => {
    return (
        <div className="w-full px-[59px] max-[1200px]:px-5">
            <TableSong isMusic={"hidden"} isIcon={"!hidden"}/>
            <div className="w-full flex justify-center items-center mt-8">
                <Button className={"!bg-transparent border !border-[#218888] !py-1"}>
                    Xem top 100
                </Button>
            </div>
            <div className="mt-10">
                <h2 className="capitalize text-[45px] text-[#218888] font-[600] max-[650px]:text-3xl mb-5 max-[450px]:text-2xl">
                    bảng xếp hạng tuần
                </h2>
                <div className="w-full flex items-center gap-8 max-[1100px]:flex-wrap">
                    <ModalBxh nameModal={"việt nam"}/>
                    <ModalBxh nameModal={"US-UK"}/>
                    <ModalBxh nameModal={"K-Pop"}/>
                </div>
            </div>
        </div>
    )
}

export default Zingchart