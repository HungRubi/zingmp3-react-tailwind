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

export const updatePlaylist = (data, id) => async (dispatch) => {
    try{
        const response = await apis.updatePlayList(data, id);
        if(response.status === 200) {
            dispatch({
                type: actionType.UPDATE_PLAYLIST,
                payload: response.data
            })
        }
        else{
            dispatch({
                type: actionType.UPDATE_PLAYLIST,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.UPDATE_PLAYLIST,
            payload: null,
            error
        })
    }
}

export const deletePlayList = (data , id) => async (dispatch) => {
    try{
        const response = await apis.deletePlayList(data, id);
        if(response.status === 200) {
            dispatch({
                type: actionType.DELETE_PLAYLIST,
                payload: response.data
            })
        }
        else{
            dispatch({
                type: actionType.DELETE_PLAYLIST,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.DELETE_PLAYLIST,
            payload: null,
            error
        })
    }
}