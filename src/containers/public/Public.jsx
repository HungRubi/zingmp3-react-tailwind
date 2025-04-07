import { Outlet } from "react-router-dom"
import { Player, SidebarLeft, SidebarRight, Header } from "../../components"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"

const Public = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const mainContainerRef = useRef(null)
    const { currentSongId } = useSelector(state => state.music)
    const { isTabMusic } = useSelector(state => state.user)

    useEffect(() => {
        const mainContainer = mainContainerRef.current
        if (!mainContainer) return

        const handleScroll = () => {
            const scrollPosition = mainContainer.scrollTop
            setIsScrolled(scrollPosition > 0)
        }

        mainContainer.addEventListener('scroll', handleScroll)
        return () => mainContainer.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="w-full flex flex-col h-full">
            <div className="w-full flex h-full">
                <div className={`w-[240px] flex-none ${currentSongId ? 'h-[calc(100vh-90px)]' : 'h-[100vh]'}`}>
                    <SidebarLeft/>
                </div>
                
                <div ref={mainContainerRef} 
                className={`bg-[#CED9D9] ${isTabMusic ? "w-full" : "w-[calc(100%-569px)]"} ${currentSongId ? 'h-[calc(100vh-90px)]' : 'h-[100vh]'} overflow-y-scroll pb-10 relative transition-all duration-800 ease-in-out
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-[#0000001a] 
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]`}
                >
                    <div className={`h-[70px] px-[59px] sticky top-0 z-50 ${isScrolled ? 'scroll_sidebar' : ''}`}>
                        <Header/>
                    </div>
                    <Outlet />
                </div>
                <div className={`${isTabMusic ? "absolute right-0 translate-x-full opacity-0" : "relative translate-x-0 opacity-100"} w-[329px] ${currentSongId ? 'h-[calc(100vh-90px)]' : 'h-[100vh]'} flex-none box-shadow-left transition-all duration-800 ease-in-out`}>
                    <SidebarRight/>
                </div>
            </div>
            <div className={`flex-none h-[90px] bg-main-300 border-player transition-transform duration-500 ease-in-out ${!currentSongId ? 'translate-y-50' : 'translate-y-0'}`}>
                <Player/>
            </div>
        </div>
    )
}
export default Public