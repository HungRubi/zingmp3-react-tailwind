import actionType from "./actionTypes";
import * as apis from "../../apis/mv";

export const getMvDetail = (slug) => async (dispatch) => {
    try{
        const response = await apis.getMvDetail(slug);
        if(response.status === 200) {
            dispatch({
                type: actionType.DETAIL_MV,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.DETAIL_MV,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.DETAIL_MV,
            payload: null,
            error
        })
    }
}