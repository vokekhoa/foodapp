import axios from "axios";

export const endpoints = {
    "categories": '/categories/'
}

export default axios.create({
    baseURL :"http://127.0.0.1:8000/"
})