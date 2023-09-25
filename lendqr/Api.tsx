
import axios, { AxiosInstance } from 'axios';

interface CustomAxiosInstance extends AxiosInstance {
  baseUrl?: string;
}

// Create an Axios instance with a base URL
const instance: CustomAxiosInstance = axios.create({
  baseURL: 'https://6511b370b8c6ce52b394eacf.mockapi.io/api/', 
  timeout: 5000, // Set a timeout of 5 seconds (5000 milliseconds)
  headers: {
    // 'Authorization': 'Bearer token', 
    'Content-Type': 'application/json', 
  },
});
// instance.baseUrl = 'https://6511b370b8c6ce52b394eacf.mockapi.io/api/'; 
export default {
    instance
}   