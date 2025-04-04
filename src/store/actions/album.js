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