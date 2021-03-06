import axios from 'axios';

export const getImages = async (query, page = 1) =>{
 return await axios.get(`/search/photos`,{
     params: {
         query,
         page,
         per_page: 50
     }
 }).then(response => response.data);
}
