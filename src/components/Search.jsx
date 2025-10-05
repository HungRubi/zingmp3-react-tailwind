import icons from '../util/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const {GoSearch} = icons

const Search = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const debouncedSearch = debounce((searchValue) => {
        if (searchValue.trim()) {
            setIsLoading(true);
            dispatch(actions.querySearch(searchValue));
            setIsLoading(false);
        }
    }, 500);

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim()) {
            setIsLoading(true);
            dispatch(actions.querySearch(value))
            navigate('/search')
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedSearch(newValue);
    }

    return (
        <form className="w-full gap-2.5 bg-[hsla(0,0%,100%,0.3)] relative 
        px-2.5 h-10 flex items-center rounded-[20px]"
        onSubmit={handleSubmit}>
            <button type='submit' disabled={isLoading}>
                <GoSearch className={`text-[20px] opacity-60 ${isLoading ? 'animate-spin' : ''}`}/>
            </button>
            <input 
                type="text"
                onChange={handleChange} 
                value={value}
                name="s" 
                placeholder='Tìm kiếm bài hát, nghệ sĩ, album...'
                className='w-full border-none bg-none outline-none max-[1200px]:hidden max-[634px]:text-sm max-[634px]:block'
            />
        </form>
    )
}

export default Search