import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID S2-v5XSd48Q00JOPflAU2jR7nq8TBRzVTd90squoF4c'
    }
})