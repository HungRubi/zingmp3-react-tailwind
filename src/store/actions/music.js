import actionType from "./actionTypes";

export const setCurrentSongId = (sid) => ({
    type: actionType.SET_CURRENT_SONG,
    sid
})

export const setCurrentSong = (song) => ({
    type: actionType.SET_CURRENT_SONG,
    song
})

export const play = (flag) => ({
    type: actionType.PLAY,
    flag
})

export const addRecentSong = (song) => ({
    type: actionType.ADD_RECENT_SONG,
    song
})

export const setAutoPlay = (flag) => ({
    type: actionType.SET_AUTO_PLAY,
    flag
})

    