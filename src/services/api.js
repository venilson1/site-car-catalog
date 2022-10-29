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

export const createCars = async (data) => {
    return api.post(`/api/car`, {
        name: data.name,
        brand: data.brand,
        model: data.model,
        price: data.price,
        urlImage: data.urlImage
      });
};

export const updateCars = async (data) => {
    return api.put(`/api/car`, {
        name: data.name,
        brand: data.brand,
        model: data.model,
        price: data.price,
        urlImage: data.urlImage
      });
};

export const deleteCars = async () => {
    return api.put(`/api/car`);
};