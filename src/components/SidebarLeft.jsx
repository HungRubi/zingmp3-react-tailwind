import logo from '../assets/logo.svg'
import { menuSide } from '../util/menu.js'
import { NavLink } from 'react-router-dom'

const notActive = 'py-2.5 px-[25px] flex items-center gap-[12px] text-[#32323D]';
const active = 'py-2.5 px-[25px] flex items-center gap-[12px] text-[#0F7070]';
const SidebarLeft = () => {
    return (
        <div className='bg-[#DDE4E4] h-full'>
            <div className="w-full px-[25px] py-5 flex justify-start items-center">
                <img src={logo} alt="logo" className='w-[120px] h-10'/>
            </div>
            <div className="flex flex-col">
                {menuSide.map(item => (
                    <NavLink 
                    key={item.text} 
                    className={({isActive}) => isActive ? active : notActive}
                    to={item.path}>
                        <item.icons className='size-[24px]'/> 
                        <span className='font-[500] text-[15px] capitalize'>{item.text}</span>
                    </NavLink>
                ))}
            </div>
            
        </div>
    )
}

export default SidebarLeft