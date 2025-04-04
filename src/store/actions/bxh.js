import actionType from "./actionTypes";
import * as apis from "../../apis/bxh";

export const getBxh = () => async (dispatch) => {
    try{
        const response = await apis.getBxh();
        if(response.status === 200) {
            dispatch({
                type: actionType.GET_BXH,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.GET_BXH,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.GET_BXH,
            payload: null,
            error
        })
    }
}