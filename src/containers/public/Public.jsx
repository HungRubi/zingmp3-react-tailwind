import { Outlet } from "react-router-dom"
import { Player, SidebarLeft, SidebarRight } from "../../components"
const Public = () => {
    return (
        <div className="w-full flex flex-col h-full">
            <div className="w-full flex h-full">
                <div className="w-[240px] flex-none">
                    <SidebarLeft/>
                </div>
                <div className="flex-auto bg-[#CED9D9] h-[calc(100vh-90px)] 
                    overflow-y-scroll [&::-webkit-scrollbar]:hidden pb-10">
                    <Outlet />
                </div>
                <div className="w-[329px] flex-none">
                    <SidebarRight/>
                </div>
            </div>
            <div className="flex-none h-[90px] bg-main-300 border-player">
                <Player/>
            </div>
        </div>
    )
}
export default Public