
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3000/User',
})

export const insertData = payload => api.post(`/User`, payload)
export const getAllData = () => api.get(`/User`)

const apis = {
    insertData,
    getAllData,
}

export default apis