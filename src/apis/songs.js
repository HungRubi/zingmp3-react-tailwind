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