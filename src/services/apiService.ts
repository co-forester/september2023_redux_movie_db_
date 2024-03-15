import axios from "axios";

import {baseURL} from "../constants";


const  apiService = axios.create({baseURL});

apiService.interceptors.request.use(request =>{
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDMxZTdmMzg4MzRmMmQ2NDBhZTRhOTgxNDBjNTUwZiIsInN1YiI6IjY1NDU0OGNjMWFjMjkyMDBjNDk2MDViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.evbHVbUZ7ufAZ_KBp59R5zt6yYpTP38wOPgg3VJdAmg';
    if (token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {apiService}