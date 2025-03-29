import icons from '../util/icons'
 
const {GoSearch} = icons

const Search = () => {
    return (
        <form className="w-full gap-2.5 bg-[hsla(0,0%,100%,0.3)] relative px-2.5 h-10 flex items-center rounded-[20px]">
            <button type='submit'>
                <GoSearch className='text-[20px] opacity-60'/>
            </button>
            <input type="text" placeholder='Tìm kiếm bài hát, nghệ sĩ...'
            className='w-full border-none bg-none outline-none'/>
        </form>
    )
}

export default Search