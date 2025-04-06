import axios from "../axios";

export const getSingerDetail = async (slug) => {
    try{
        const response = await axios({
            url: `singer/${slug}`,
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const updateFavoriteSinger = async (data, id) => {
    try{
        const response = await axios({
            url: `singer/update-favorite-singer/${id}`,
            method: 'post',
            data: data
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const deleteFavoriteSinger = async (data, id) => {
    try{
        const response = await axios({
            url: `singer/delete-favorite-singer/${id}`,
            method: 'delete',
            data: data
        })
        return response
    }catch(error){
        console.log(error)
    }
}