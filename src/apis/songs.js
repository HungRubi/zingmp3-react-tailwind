import axios from "../axios";

export const getAllSongs = async () => {
    try{
        const response = await axios({
            url: 'songs/getall',
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const updatePlayList = async (data, id) => {
    try{
        const response = await axios({
            url: `songs/update-playlist/${id}`,
            method: 'post',
            data: data
        })
        return response
    }catch(error){
        console.log(error)
    }
}

export const deletePlayList = async (data, id) => {
    try{
        const response = await axios({
            url: `songs/delete-playlist/${id}`,
            method: 'delete',
            data: data
        })
        return response
    }catch(error){
        console.log(error)
    }
}