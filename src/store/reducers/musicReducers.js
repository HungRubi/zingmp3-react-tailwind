import actionType from "../actions/actionTypes";

const initState = {
    currentSongId: null
}

const musicReducer = (state = initState, action) => {
    switch (action.type){
        // case actionType.GET_HOME:
        //     return state
        default:
            return state
    }
}

export default musicReducer