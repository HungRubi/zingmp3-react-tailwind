import actionType from "../actions/actionTypes";

const initState = {
    currentUser: null,
    favoriteSong: null,
    favoriteAlbum: null,
}

const userReducers = (state = initState, action) => {
    switch (action.type){
        case actionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user || null,
                favoriteSong: action.song || null,
                favoriteAlbum: action.album || null
            }
        
        case actionType.LOGOUT_PERSIST:
            return {
                ...state,
                message: action.message,
                currentUser: null,
                favoriteSong: null,
                favoriteAlbum: null,
            }
        default:
            return state
    }
}

export default userReducers