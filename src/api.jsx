import axios from "axios";

const API_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com/';

export const login = async (username, password) => {
    const response  = await axios.post(`${API_URL}/auth/login`, {username, password});
    return response.data; 
};

export const register = async (username, password, isAdmin) => {
    const response  = await axios.post(`${API_URL}/auth/register`, {username, password, isAdmin});
    return response.data; 
};

export const postItem = async(boughtInLastMonth, imgUrl, isBestSeller, price, stars, title) =>{
    const response = await axios.post(`${API_URL}/items`, {boughtInLastMonth, imgUrl, isBestSeller, price, stars, title});
    return response.data
};

export const  putItem = async(itemId, boughtInLastMonth, imgUrl, isBestSeller, price, stars, title) =>{
    const response = await axios.put(`${API_URL}/items`, {itemId, boughtInLastMonth, imgUrl, isBestSeller, price, stars, title});
    return response.data
};

export const deleteItem = async(body) =>{
    const response = await axios.delete(`${API_URL}/items/{id}`, {body});
    return response.data
};

export const getItem = async(body) =>{
    const response = await axios.get(`${API_URL}/items/{id}`, {body});
    return response.data
};

export const getItemWithPagination = async(body) =>{
    const response = await axios.get(`${API_URL}/items?limit={limit}&lastKey={lastKey}`, {body});
    return response.data
};

export const buyItem = async(userId) =>{
    const response = await axios.post(`${API_URL}/buy`, {userId});
    return response.data
};

export const addCartItem = async(itemId, userId) =>{
    const response = await axios.post(`${API_URL}/cart`, {itemId, userId});
    return response.data
};

export const deleteCartItem = async(itemId, userId)=>{
    const response = await axios.delete(`${API_URL}/cart`, {itemId, userId});
    return response.data
};

export const getUserCart = async(body)=>{
    const response = await axios.get(`${API_URL}/cart/{userId}`, {body});
    return response.data
};