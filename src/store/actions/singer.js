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