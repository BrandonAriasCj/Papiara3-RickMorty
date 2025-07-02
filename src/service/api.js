import axios from 'axios';
//import apiClient from '../services/axiosInstance'
const API_URL = 'http://localhost:8081/api';

export const fetchRickMorty = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/?page=19');
        console.log(response.data.results);
        return response.data.results;
        
    } catch (error) { throw error; 

    }
}