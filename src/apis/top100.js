import axios from "../axios";

export const getTop100 = async () => {
    try{
        const response = await axios({
            url: 'top100',
            method: 'get'
        })
        return response
    }catch(error){
        console.log(error)
    }
}