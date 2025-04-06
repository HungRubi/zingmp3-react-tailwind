import actionType from "./actionTypes";
import * as apis from "../../apis/singer";

export const getSingerDetail = (slug) => async (dispatch) => {
    try{
        const response = await apis.getSingerDetail(slug);
        if(response.status === 200) {
            dispatch({
                type: actionType.DETAIL_SINGER,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.DETAIL_SINGER,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.DETAIL_SINGER,
            payload: null,
            error
        })
    }
}

export const updateFavoriteSinger = (data, id) => async (dispatch) => {
    try{
        const response = await apis.updateFavoriteSinger(data, id);
        if(response.status === 200) {
            dispatch({
                type: actionType.UPDATE_FAVORITE_SINGER,
                payload: response.data
            })
        }
        else{
            dispatch({
                type: actionType.UPDATE_FAVORITE_SINGER,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.UPDATE_FAVORITE_SINGER,
            payload: null,
            error
        })
    }
}

export const deleteFavoriteSinger = (data , id) => async (dispatch) => {
    try{
        const response = await apis.deleteFavoriteSinger(data, id);
        if(response.status === 200) {
            dispatch({
                type: actionType.DELETE_FAVORITE_SINGER,
                payload: response.data
            })
        }
        else{
            dispatch({
                type: actionType.DELETE_FAVORITE_SINGER,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.DELETE_FAVORITE_SINGER,
            payload: null,
            error
        })
    }
}