import axios from 'axios'
const BASE_URL = 'https://whthpnd-backend-api.herokuapp.com/api'
//const BASE_URL = 'http://localhost:5000/api'

//const baseURL: 'https://whthpnd-backend-api.herokuapp.com/api',
//const baseURL: 'https://whthpnd.herokuapp.com/api',

import { getCookie, setCookies, removeCookies } from 'cookies-next'
const token = getCookie('access_token')

let access_token = ''
const ISSERVER = typeof window === 'undefined'

if (!ISSERVER) {
  access_token = localStorage.getItem('token')
}

export default axios.create({
  baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer: ${access_token}`,
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
