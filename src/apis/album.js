import axios from "../axios";

export const getAlbumDetail = async (slug) => {
    try{
        const response = await axios({
            url: `album/${slug}`,
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const updateFavoriteAlbum = async (data, id) => {
    try{
        const response = await axios({
            url: `album/update-favorite-album/${id}`,
            method: 'post',
            data: data
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const deleteFavoriteAlbum = async (data, id) => {
    try{
        const response = await axios({
            url: `album/delete-favorite-album/${id}`,
            method: 'delete',
            data: data
        })
        return response
    }catch(error){
        console.log(error)
    }
}