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