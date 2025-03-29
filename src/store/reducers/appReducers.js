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
        default:
            return state
    }
}

export default appReducer