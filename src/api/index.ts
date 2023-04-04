import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3',
})

export const authApi = axios.create({
    baseURL: 'https://6429a6a4ebb1476fcc4df9ee.mockapi.io/blog',
})