import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from '../components';
import * as actions from '../store/actions';
import { toast } from 'react-toastify';
import icons from '../util/icons';
const { IoMdClose } = icons;
import PropTypes from 'prop-types';

const Modal = ({className}) => {
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch();
    const { message, loginError } = useSelector(state => state.app);

    const handleClose = () => {
        setIsShow(false)
    }

    const handleOpen = () => {
        setIsShow(true)
    }
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(actions.login(formData));
    }

    useEffect(() => {
        if(message){
            toast.success(message);
            dispatch(actions.resetMessage());
        }
    }, [message, dispatch])

    return (
        <>
            <Button 
                onClick={handleOpen}
                type="button"
                className={`!bg-[#218888] text-white mb-3 w-full ${className}`}
            >
                Đăng nhập
            </Button>
            <div 
                className={`${isShow ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#00000086] bg-opacity-25`}
                onClick={handleClose}
            >
                <div className="relative p-4 w-full max-w-md max-h-full" onClick={e => e.stopPropagation()}>
                    <div className="relative bg-[#e0ebeb] rounded-lg shadow-sm py-5 px-[30px] flex items-center justify-center flex-col">
                        <IoMdClose 
                            className='absolute top-5 right-5 text-lg text-gray-600 cursor-pointer'
                            onClick={handleClose}
                        />
                        <div className="w-[247.15px] h-[132px] flex items-center">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/login.png" alt="" />
                        </div>
                        <div className="mt-5 mb-2.5">
                            <h3 className='capitalize text-[20px] text-gray-700 font-medium'>
                                đăng nhập zing mp3
                            </h3>
                        </div>
                        <form className='w-full' onSubmit={handleSubmit}>
                            <div className="mt-5 w-full">
                                <input 
                                    onChange={handleChange}
                                    type="text"
                                    name='username' 
                                    placeholder="Username"
                                    className='w-full h-10 px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#fff] text-sm outline-none transition-all'
                                />
                            </div>
                            <div className="mt-5 w-full">
                                <input 
                                    onChange={handleChange}
                                    type="password"
                                    name='password' 
                                    placeholder="Password"
                                    className='w-full h-10 px-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#fff] text-sm outline-none transition-all'
                                />
                            </div>
                            <h6 className='text-red-500 text-[12px] text-left'>{loginError ? "Sai tài khoản hoặc mật khẩu" : ""}</h6>
                            <Button type="submit" className={"mt-5 !bg-[#218888] text-white w-full"}>
                                Đăng nhập
                            </Button>
                        </form>
                        <div className="mt-5 font-[400] text-center text-sm text-gray-600">
                            Bằng cách đăng nhập tài khoản, bạn đã đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của Zing MP3
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    className: PropTypes.node.isRequired
}

export default Modal