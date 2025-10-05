import { useSelector } from 'react-redux';
import {Button, TableSong} from '../../components'
import { useState } from 'react'

const MySong = () => {
    const [activeButton, setActiveButton] = useState('favorite')
    const active = "!py-1 text-sm uppercase text-white !bg-[#218888] font-normal";
    const normal = "!py-1 text-sm uppercase !bg-transparent font-normal !border !border-[#00000021] text-gray-600"

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType)
    }
    const { favoriteSong } = useSelector(state => state.user);
    return (
        <div className="w-full mt-5 max-[700px]:!mt-0">
            <div className="flex items-center gap-5">
                <Button 
                    className={activeButton === 'favorite' ? active : normal}
                    onClick={() => handleButtonClick('favorite')}
                >
                    yêu thích
                </Button>
                <Button 
                    className={activeButton === 'uploaded' ? active : normal}
                    onClick={() => handleButtonClick('uploaded')}
                >
                    đã tải lên
                </Button>
            </div>
            {activeButton === "favorite" ? 
                (<TableSong isIndex={"hidden"} data={favoriteSong}/>) : 
                (
                <div className="w-full">
                    <div className="w-full p-[15px] bg-[hsla(0,0%,100%,0.3)] mt-5 flex items-center ">
                        <div className="w-1/2">
                            <h5 className='text-sm line-clamp-1'>
                                Đã tải lên: 1/200
                            </h5>
                            <input type="range" 
                                className='w-2/3 border-transparent' 
                                min={1} max={100} value={1}
                            />
                        </div>
                        <div className="w-1/2 flex items-center justify-end gap-3">
                            <h5 className='italic line-clamp-1 text-gray-600'>Bạn muốn tải lên nhiều hơn?</h5>
                            <Button className={"uppercase !font-[400] text-gray-700 !bg-[#f8e71c]"}>
                                nâng cấp tài khoản
                            </Button>
                        </div>
                    </div>
                    <TableSong isIndex={"hidden"}/>
                </div>
                )
            }
        </div>
    )
}

export default MySong