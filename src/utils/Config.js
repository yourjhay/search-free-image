import axios from 'axios'

const ENDPOINT = `https://api.unsplash.com`

const TOKEN =`d88v4WZ9l8Gef2y_LR9c0IoNe-iOgy-5Hx2SeQIH6q0`

axios.defaults.baseURL = ENDPOINT
axios.defaults.headers.common.Authorization = `Client-ID ${TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';