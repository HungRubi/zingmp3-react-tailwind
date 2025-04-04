import axios from "../axios";

export const getBxh = async () => {
    try{
        const response = await axios({
            url: 'bxh',
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}