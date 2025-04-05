import axios from "../axios";

export const login = async (data) => {
    try {
        const response = await axios({
            url: "authen/login",
            method: "post",
            data: data,
        });
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const logout = async (token) => {
    try {
        const response = await axios({
            url: "authen/logout",
            method: "post",
            headers: {
               token: `Bearer ${token}`, 
            }
        });
        return response;
    } catch (err) {
        console.log(err);
        throw err;
    }
};