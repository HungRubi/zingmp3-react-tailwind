import icons from '../util/icons'
import { useNavigate } from 'react-router-dom'

const {GoSearch} = icons

const Search = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search')
    }
    return (
        <form className="w-full gap-2.5 bg-[hsla(0,0%,100%,0.3)] relative px-2.5 h-10 flex items-center rounded-[20px]"
        onSubmit={handleSubmit}>
            <button type='submit'>
                <GoSearch className='text-[20px] opacity-60'/>
            </button>
            <input type="text" name="s" placeholder='Tìm kiếm bài hát, nghệ sĩ...'
            className='w-full border-none bg-none outline-none'/>
        </form>
    )
}

export default Search