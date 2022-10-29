import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5103"
});

export const createSession = async (username, password) => {
    return api.post("/auth/login", {username, password});
};

export const getCars = async (page = 0) => {
    return api.get(`api/car?page=${page}`);
};