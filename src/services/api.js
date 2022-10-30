import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5103"
});

export const createSession = async (username, password) => {
    return api.post("/auth/login", {username, password});
};

export const createUser = async (username, email, password) => {
    return api.post(`/auth/create`, {username, email, password});
};

export const getCars = async (page = 0) => {
    return api.get(`api/car?page=${page}`);
};

export const createCars = async (name, brand, model, price, urlImage) => {
    return api.post(`/api/car`, {name, brand, model, price, urlImage});
};

export const updateCars = async (id, name, brand, model, price, urlImage) => {
    return api.put(`/api/car/${id}`, {name, brand, model, price, urlImage});
};

export const deleteCars = async (id) => {
    return api.delete(`/api/car/${id}`);
};