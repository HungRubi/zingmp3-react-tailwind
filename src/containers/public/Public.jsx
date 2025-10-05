import { Outlet } from "react-router-dom"
import { Player, SidebarLeft, SidebarRight, Header } from "../../components"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"

const Public = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const mainContainerRef = useRef(null)
    const { currentSongId } = useSelector(state => state.music)
    const { isTabMusic, isTabLeftMobie } = useSelector(state => state.user)

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
                <div className={`w-[240px] flex-none max-[1130px]:w-[70px]
                ${isTabLeftMobie ? '!absolute !w-[240px] left-0 top-0 z-100' : 'relative'}
                    ${currentSongId ? 'h-[calc(100vh-90px)]' : 'h-[100vh]'} transition-all duration-500 ease-in-out`}>
                    <SidebarLeft/>
                </div>
                
                <div ref={mainContainerRef} 
                className={`bg-[#CED9D9] ${isTabMusic ? "w-full" : "w-[calc(100%-569px)] max-[1400px]:w-full"} 
                    ${currentSongId ? 'h-[calc(100vh-90px)]' : 'h-[100vh]'} overflow-y-scroll pb-10 relative 
                    transition-all duration-800 ease-in-out
                    [&::-webkit-scrollbar]:w-1 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-[#0000001a] 
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#00000033]`}
                >
                    <div className={`h-[70px] px-[59px] sticky top-0 z-50 ${isScrolled ? 'scroll_sidebar' : ''} max-[1200px]:px-5`}>
                        <Header/>
                    </div>
                    <Outlet />
                </div>
                <div className={` ${isTabMusic ? "absolute right-0 translate-x-full opacity-0 " : 
                    "relative translate-x-0 opacity-100 max-[1400px]:absolute max-[1400px]:right-0"} 
                    w-[329px] ${currentSongId ? 'h-[calc(100vh-90px)]' : 'h-[100vh]'} flex-none 
                    box-shadow-left transition-all duration-800 ease-in-out z-90`}>
                    <SidebarRight/>
                </div>
            </div>
            <div className={`flex-none h-[90px] bg-main-300 border-player 
                transition-transform duration-500 ease-in-out 
                ${!currentSongId ? 'translate-y-50' : 'translate-y-0'}`}
            >
                <Player/>
            </div>
        </div>
    )
}
export default Public