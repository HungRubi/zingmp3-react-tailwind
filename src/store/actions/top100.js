import actionType from "./actionTypes";
import * as apis from "../../apis/top100";

export const getTop100 = () => async (dispatch) => {
    try{
        const response = await apis.getTop100();
        if(response.status === 200) {
            dispatch({
                type: actionType.GET_TOP100,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.GET_TOP100,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.GET_TOP100,
            payload: null,
            error
        })
    }
}