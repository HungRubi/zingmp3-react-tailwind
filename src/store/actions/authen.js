import actionType from "./actionTypes";
import * as apis from '../../apis/authen'

export const login = (data) => async (dispatch) => {
    try {
        const response = await apis.login(data);
        if (response?.status === 200) {
            dispatch({
                type: actionType.LOGIN,
                payload: response.data,
            });
        } else {
            dispatch({
                type: actionType.LOGIN_FAIL,
                payload: response.data,
            });
        }
    } catch (err) {
        dispatch({
            type: actionType.LOGIN_FAIL,
            payload: err.response?.data || "Đã xảy ra lỗi",
            err,
        });
    }
};
export const logout = (token) => async (dispatch) => {
    try {
        const response = await apis.logout(token);
        if (response?.status === 200) {
            dispatch({
                type: actionType.LOGOUT,
                payload: response.data,
            });
        } else {
            dispatch({
                type: actionType.LOGOUT,
                payload: response.data,
            });
        }
    } catch (err) {
        dispatch({
            type: actionType.LOGOUT,
            payload: err.response?.data || "Đã xảy ra lỗi",
            err,
        });
    }
};

export const resetMessage = () => (dispatch) => {
    dispatch({
        type: actionType.RESET_MESSAGE,
    });
};