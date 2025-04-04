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