import axios from 'axios';

export const getAllProducts = async (query: string) => {
    try {
        const data = await axios.get(`http://localhost:9000/api/items?q=${query}`).then(res => res.data);
        
        return {
            type: 'GET_ALL_PRODUCTS',
            payload: data
        }
    } catch (error) {
        console.log(error)
    }
}