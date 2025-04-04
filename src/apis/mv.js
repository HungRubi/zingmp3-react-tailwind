import axios from "../axios";

export const getMvDetail = async (slug) => {
    try{
        const response = await axios({
            url: `mv/${slug}`,
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}