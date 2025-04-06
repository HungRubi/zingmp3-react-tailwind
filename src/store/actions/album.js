import actionType from "./actionTypes";
import * as apis from "../../apis/album";

export const getAlbumDetail = (slug) => async (dispatch) => {
    try{
        const response = await apis.getAlbumDetail(slug);
        if(response.status === 200) {
            dispatch({
                type: actionType.DETAIL_ALBUM,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.DETAIL_ALBUM,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.DETAIL_ALBUM,
            payload: null,
            error
        })
    }
}

export const updateFavoriteAlbum = (data, id) => async (dispatch) => {
    try{
        const response = await apis.updateFavoriteAlbum(data, id);
        if(response.status === 200) {
            dispatch({
                type: actionType.UPDATE_FAVORITE_ALBUM,
                payload: response.data
            })
        }
        else{
            dispatch({
                type: actionType.UPDATE_FAVORITE_ALBUM,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.UPDATE_FAVORITE_ALBUM,
            payload: null,
            error
        })
    }
}

export const deleteFavoriteAlbum = (data , id) => async (dispatch) => {
    try{
        const response = await apis.deleteFavoriteAlbum(data, id);
        if(response.status === 200) {
            dispatch({
                type: actionType.DELETE_FAVORITE_ALBUM,
                payload: response.data
            })
        }
        else{
            dispatch({
                type: actionType.DELETE_FAVORITE_ALBUM,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.DELETE_FAVORITE_ALBUM,
            payload: null,
            error
        })
    }
}