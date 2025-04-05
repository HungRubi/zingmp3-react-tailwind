import actionType from "./actionTypes";
import * as apis from "../../apis/songs";

export const getAllSongs = () => async (dispatch) => {
    try{
        const response = await apis.getAllSongs();
        if(response.status === 200) {
            dispatch({
                type: actionType.GET_ALL_SONGS,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.GET_ALL_SONGS,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.GET_ALL_SONGS,
            payload: null,
            error
        })
    }
}