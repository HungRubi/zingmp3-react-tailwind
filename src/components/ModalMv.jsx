import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonCircle from './ButtonCricle';
import icons from '../util/icons';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ToggleOn } from '../util/iconSgv';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../store/actions'
import ListMusic from './ListMusic';

const {FaRegHeart, PiMusicNotesSimpleBold, BsThreeDots, IoMdClose, VscChromeRestore,MdPlayArrow} = icons

const Modal = ({className}) => {
    const [isShow, setIsShow] = useState(true)
    const navigate = useNavigate();
    const handleClose = () => {
        setIsShow(false);
        try {
            const previousPath = document.referrer;
            if (!previousPath) {
                navigate(`/singer/${singerForMv?.slug}`);
                setTimeout(() => {
                    dispatch(actions.getSingerDetail(singerForMv?.slug));
                }, 100);
            } else {
                navigate('/');
                setTimeout(() => {
                    dispatch(actions.getHome());
                }, 100);
            }
        } catch (error) {
            console.log(error);
            navigate('/');
            setTimeout(() => {
                dispatch(actions.getHome());
            }, 100);
        }
    }
    const dispatch = useDispatch();
    const {slug} = useParams();
    useEffect(() => {
        dispatch(actions.getMvDetail(slug))
    }, [slug, dispatch])
    const {mvDetail, listMv, singerForMv, mvOfSinger} = useSelector(state => state.app);
    return (
        <>
            <div 
                className={`fixed inset-0 z-50 justify-center 
                    overflow-y-auto bg-[#423f3f] ${className}
                    [&::-webkit-scrollbar]:w-2 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-[#ffffff88] 
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#ffffff33]`}
            >
                <div className="absolute inset-0 bg-[#363636]">
                    <div className="absolute inset-0 bg-[rgba(0,0,0,.1)]"></div>
                    <div 
                        style={{ 
                            backgroundImage: `url(${mvDetail?.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'blur(20px)',
                            opacity: 0.5
                        }}
                        className="absolute inset-0"
                    ></div>
                </div>

                <div className={`relative z-10 w-full h-screen px-[30px] transform transition-transform duration-500 ease-in-out
                    ${isShow ? 'translate-y-0' : 'translate-y-[100%]'}`}>
                    <div className="w-full flex items-center justify-between h-[85px]">
                        <div className="flex items-center h-full">
                            <img 
                                src={singerForMv?.img} 
                                alt="" 
                                className="w-10 h-10 rounded-full object-cover" 
                            />
                            <div className="text-sm capitalize ml-2">
                                <h5 className='text-white font-bold text-lg'>{mvDetail?.name}</h5>
                                <h6 className='text-gray-300'>{mvDetail?.singer}</h6>
                            </div>
                            <div className="flex items-center ml-10">
                                <ButtonCircle className={"!bg-[hsla(0,0%,100%,.1)] text-white"}>
                                    <FaRegHeart/>
                                </ButtonCircle>
                                <ButtonCircle className={"ml-2.5 !bg-[hsla(0,0%,100%,.1)] text-white"}>
                                    <PiMusicNotesSimpleBold/>
                                </ButtonCircle>
                                <ButtonCircle className={"ml-2.5 !bg-[hsla(0,0%,100%,.1)] text-white"}>
                                    <BsThreeDots/>
                                </ButtonCircle>
                            </div>
                        </div>
                        <div className="flex gap-2.5 items-center">
                            <ButtonCircle className={"!bg-[hsla(0,0%,100%,.1)] text-white"}>
                                <VscChromeRestore className='text-lg'/>
                            </ButtonCircle>
                            <div 
                                className="flex items-center justify-center bg-[hsla(0,0%,100%,.1)] h-10 w-10 rounded-full cursor-pointer"
                                onClick={handleClose}
                            >
                                <IoMdClose className='text-lg text-white'/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="flex-1 mr-5 aspect-[16/9]">
                            <iframe 
                                className="h-full w-full rounded-lg" 
                                src={mvDetail?.video}
                                title="Lạc Trôi"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="w-[350px] rounded-lg bg-[hsla(0,0%,100%,.10196078431372549)] flex flex-col max-h-[calc(100vh-81px)]">
                            <div className="p-5 flex justify-between items-center shrink-0">
                                <h5 className='text-white font-bold text-lg capitalize'>
                                    danh sách phát
                                </h5>
                                <div className="flex items-center gap-2">
                                    <div className='text-white text-[12px] font-[400] uppercase'>
                                        tự động phát
                                    </div>
                                    <ToggleOn className={"text-blue-700"}/>
                                </div>
                            </div>
                            <div className="flex flex-col w-full flex-1
                                overflow-y-auto inset-0
                                [&::-webkit-scrollbar]:w-1 
                                [&::-webkit-scrollbar-track]:bg-transparent 
                                [&::-webkit-scrollbar-thumb]:bg-[#ffffff1a] 
                                [&::-webkit-scrollbar-thumb]:rounded-full 
                                hover:[&::-webkit-scrollbar-thumb]:bg-[#ffffff33]"
                            >
                                {listMv?.map(item => (
                                    <div key={item._id} className="w-full hover:bg-[hsla(0,0%,100%,.05)]">
                                        <div className="w-full flex items-center py-[5px] px-5 overflow-y-auto">
                                            <div className="w-30 h-16 relative group overflow-hidden rounded-sm">
                                                <img 
                                                    src={item.img} 
                                                    alt="" 
                                                    className='w-full object-cover transform transition-transform duration300 ease-in-out group-hover:scale-110'
                                                />
                                                <div className={`top-0 bottom-0 left-0 right-0 absolute bg-[#46434344]
                                                items-center justify-center gap-3 flex transform scale-0 transition-transform 
                                                duration-500 ease-in-out group-hover:scale-100`}>
                                                    <NavLink to={`/mv/${item.slug}`}>
                                                        <MdPlayArrow className="text-white !h-11 !w-11"/>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="text-sm ml-2.5 flex-1">
                                                <div className="text-lg text-white font-medium capitalize line-clamp-1">
                                                    {item.name}
                                                </div>
                                                <h6 className='text-gray-300 capitalize line-clamp-1'>
                                                    {item.singer}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10 p-7.5 bg-[#ffffff21]">
                    <h2 className='text-2xl text-white capitalize font-medium'>
                        MV của {singerForMv?.stagename}
                    </h2>
                    <ListMusic 
                        data={mvOfSinger}
                        dataSinger={singerForMv}
                        type={"mv"}
                        classListCard={"flex-wrap"} 
                        isAbum={"hidden"} 
                        isFan={"hidden"} 
                        classWrapper={"!mt-0"}
                        classCard={"!w-[calc(25%-15px)]"}
                        classSub={"!text-white"}
                    />
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    className: PropTypes.node.isRequired,
}

export default Modal