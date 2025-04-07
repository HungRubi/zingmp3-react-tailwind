import actionType from "./actionTypes";

export const setCurrentUser = (user, song, album, singer) => ({
    type: actionType.SET_CURRENT_USER,
    user,
    song,
    album,
    singer
})

export const logoutPersist = () => ({
    type: actionType.LOGOUT_PERSIST,
    message: "Logout successfully",
})
export const isTabMusic = (flag) => ({
    type: actionType.TAB_MUSIC,
    flag
})  
    