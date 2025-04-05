import actionType from '../actions/actionTypes';

const initState = {
    currentSongId: null,
    currentSong: null,
    isPlaying: false,
    autoPlay: true,
    recentSongs: []
}

const musicReducers = (state = initState, action) => {
    switch (action.type){
        case actionType.SET_CURRENT_SONG:
            return {
                ...state,
                currentSongId: action.sid !== undefined ? action.sid : state.currentSongId,
                currentSong: action.song || state.currentSong
            }
        case actionType.PLAY:
            return {
                ...state,
                isPlaying: action.flag || false,
            }
        case actionType.SET_AUTO_PLAY:
            return {
                ...state,
                autoPlay: action.flag
            }
        case actionType.ADD_RECENT_SONG: {
            // Kiểm tra xem bài hát đã có trong danh sách chưa
            const isExist = state.recentSongs.some(song => song._id === action.song._id);
            if (isExist) {
                // Nếu đã có, loại bỏ bài hát cũ và thêm vào đầu danh sách
                const filteredSongs = state.recentSongs.filter(song => song._id !== action.song._id);
                return {
                    ...state,
                    recentSongs: [action.song, ...filteredSongs].slice(0, 20) // Giới hạn 20 bài
                };
            }
            // Nếu chưa có, thêm vào đầu danh sách
            return {
                ...state,
                recentSongs: [action.song, ...state.recentSongs].slice(0, 20) // Giới hạn 20 bài
            };
        }
        default:
            return state
    }
}

export default musicReducers