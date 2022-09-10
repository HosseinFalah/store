import axios from "axios";

const SERVER_URL = "http://localhost:8000/api";

// @desc Get All Products
// @route GET https://localhost:9000/products:productid
const getAllProducts = () => {
    const url = `${SERVER_URL}/products`;
    return axios.get(url);
}

// @desc Get Products With Products ID
// @route GET https://localhost:9000/products:products
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url)
}


export {getAllProducts}