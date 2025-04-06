import { useSelector } from 'react-redux';
import {ListSingerFollower, ListMusic} from '../../components';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { MySong } from '../system';
const MyMusic = () => {
    const {favoriteAlbum, favoriteSinger} = useSelector(state => state.user);
    const formatAlbum = favoriteAlbum?.slice(0, 5);
    const tabs = [
        {
            text: 'bài hát',
            path: '/mymusic/song'
        },
        {
            text: 'album',
            path: '/mymusic/album'
        },
        {
            text: 'mv',
            path: '/mymusic/mv'
        }
    ]
    const active = "uppercase font-medium text-[#218888] border-b-2 border-[#218888] py-3";
    const notActive = "uppercase font-medium text-gray-600 border-b-2 border-transparent py-3";
    return (
        <div className="mt-8 px-[59px] w-full">
            <ListSingerFollower 
                data={favoriteSinger?.slice(0,5)}
                isButton={"hidden"}
            />
            <ListMusic 
                isFan={"hidden"}
                classCard={"!w-1/5"}
                nameList={"PLAYLIST"}
                type={"album"}
                data={formatAlbum}
                isSinger={"hidden"}
            />
            <div className="mt-10 w-full flex items-center gap-10 border-b border-[#0000002c]">
                {tabs.map(item => (
                    <NavLink key={item} to={item.path} 
                    className={({isActive}) => isActive ? active : notActive}>
                        <h4>
                            {item.text}
                        </h4>
                    </NavLink>
                ))}
            </div>
            <div className="mt-8">
                <Routes>
                    <Route path="/" element={<Navigate to="/mymusic/song" replace />} />
                    <Route path="/song" element={<MySong/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default MyMusic