import actionType from "../actions/actionTypes";

const initState = {
    message: null,
    loginError: null,
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
    favoriteSong: null,
    favoriteAlbum: null,
    detailAlbum : {},
    songForAlbum: [],
    singerForAlbum: [],
    singerSuggest: [],
    albumSuggest: [],
    singerDetail: {},
    songsForSinger: [],
    albumForSinger: [],
    album2ForSinger: [],
    top100ForSinger: [],
    mv: [],
    mvDetail: {},
    listMv: [],
    singerForMv: {},
    mvOfSinger: [],
    songsBxh: [],
    top100NoiBat: [],
    accessToken: null,
    allSongs: [],
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
                favoriteSong: action.payload?.favoriteSongs || null,
                favoriteAlbum: action.payload?.favoriteAlbums || null,
                accessToken: action.payload?.accessToken || null,
                loginError: null
            }
        case actionType.LOGOUT:
            return {
                ...state,
                message: action.payload?.message || null,
                currentUser: null,
                favoriteSong: null,
                favoriteAlbum: null,
            }
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                message: null,
                loginError: action.payload || null,
            }

        case actionType.DETAIL_ALBUM:
            return {
                ...state,
                detailAlbum: action.payload?.album,
                songForAlbum: action.payload?.songs,
                singerForAlbum: action.payload?.singer,
                singerSuggest: action.payload?.singerSuggest,
                albumSuggest: action.payload?.albumSuggest,
            }

        case actionType.DETAIL_SINGER:
            return {
                ...state,
                singerDetail: action.payload?.singer,
                songsForSinger: action.payload?.songs,
                albumForSinger: action.payload?.albums,
                album2ForSinger: action.payload?.albums2,
                top100ForSinger: action.payload?.getTop100,
                singerSuggest: action.payload?.singerSuggest,
                mv: action.payload?.randomMV
            }

        case actionType.DETAIL_MV:
            return {
                ...state,
                mvDetail: action.payload?.mv,
                listMv: action.payload?.mvs,
                singerForMv: action.payload?.singer,
                mvOfSinger: action.payload?.mvForSinger
            }

        case actionType.GET_BXH:
            return {
                ...state,
                songsBxh: action.payload?.songs,
            }
        
        case actionType.GET_TOP100:
            return {
                ...state,
                top100NoiBat: action.payload?.albums,
            }

        case actionType.RESET_MESSAGE:
            return {
                ...state,
                message: null,
                loginError: null
            }
        
        case actionType.GET_ALL_SONGS:
            return {
                ...state,
                allSongs: action.payload?.songs,
            }

        case actionType.UPDATE_PLAYLIST:
            return {
                ...state,
                message: action.payload?.message || null,
                favoriteSong: action.payload?.favoriteSongs || null,
            }

        case actionType.DELETE_PLAYLIST:
            return {
                ...state,
                message: action.payload?.message || null,
                favoriteSong: action.payload?.favoriteSongs || null,
            }
        default:
            return state
    }
}

export default appReducer