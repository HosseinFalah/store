import axios from "axios";

const SERVER_URL = "http://localhost:8000/api";

// @desc Get All Products
// @route GET https://localhost:8000/products:productid
export const getAllProducts = () => {
    const url = `${SERVER_URL}/products`;
    return axios.get(url);
}

// @desc Get Products With Products ID
// @route GET https://localhost:8000/products:products
export const getProductDetails = (productId) => {
    const url = `${SERVER_URL}/products/${productId}`;
    return axios.get(url)
}