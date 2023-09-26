
import axios from 'axios'

const auth_token = import.meta.env.VITE_AUTH_KEY ? import.meta.env.VITE_AUTH_KEY : " "; 

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    },
   
    timeout: 30000,
  });


  export default instance;