import actionType from "./actionTypes";
import * as apis from "../../apis/home";

export const getHome = () => async (dispatch) => {
    try{
        const response = await apis.getHome();
        if(response.status === 200) {
            dispatch({
                type: actionType.GET_HOME,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.GET_HOME,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.GET_HOME,
            payload: null,
            error
        })
    }
}

export const querySearch = (query) => async (dispatch) => {
    try{
        const response = await apis.querySearch(query);
        if(response.status === 200) {
            dispatch({
                type: actionType.SEARCH,
                payload: response.data
            })
        }else{
            dispatch({
                type: actionType.SEARCH,
                payload: null
            })
        }
    }catch(error){
        dispatch({
            type: actionType.SEARCH,
            payload: null,
            error
        })
    }
}