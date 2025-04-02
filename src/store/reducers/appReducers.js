import actionType from "../actions/actionTypes";

const initState = {
    banners: [],
    songSuggest: [],
    songNew: [],
    randumSinger: {},
    songForFan: [],
    top100: [],
    canSonglisten: [],
    albumHot: [],
    partnor: [],
    radio: [],
    albumChill: [],
    topSong: [],
    currentUser: null,
    favoriteSong: [],
    favoriteAlbum: [],
}

const appReducer = (state = initState, action) => {
    switch (action.type){
        case actionType.GET_HOME:
            return {
                ...state,
                banners: action.payload?.banners,
                songSuggest: action.payload?.songSuggest,
                songNew:  action.payload?.songNew,
                randumSinger: action.payload?.randumSinger,
                songForFan: action.payload?.songForFan,
                top100: action.payload?.top100,
                canSonglisten: action.payload?.canSonglisten,
                albumHot: action.payload?.albumHot,
                partnor: action.payload?.partnor,
                radio: action.payload?.radio,
                albumChill: action.payload?.albumChill,
                topSong: action.payload?.topSong,
            }

        case actionType.LOGIN:
            return {
                ...state,
                currentUser: action.payload?.user || null,
                message: action.payload?.message || null,
                favoriteSong: action.payload?.favoriteSongs || [],
                favoriteAlbum: action.payload?.favoriteAlbums || [],
                loginError: null
            }
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                message: null,
                loginError: action.payload || null,
            }
        default:
            return state
    }
}

export default appReducer