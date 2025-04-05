import actionType from "./actionTypes";

export const setCurrentUser = (user,song, album) => ({
    type: actionType.SET_CURRENT_USER,
    user,
    song,
    album
})

export const logoutPersist = () => ({
    type: actionType.LOGOUT_PERSIST,
    message: "Logout successfully",
}) 
    