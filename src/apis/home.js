import axios from "../axios";

export const getHome = async () => {
    try{
        const response = await axios({
            url: 'home',
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const querySearch = async (query) => {
    try{
        const response = await axios({
            url: `search?s=${query}`,
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}