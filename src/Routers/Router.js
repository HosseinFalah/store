import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductsDetails from "../Pages/ProductsDetails";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Wishlist from "../Pages/Wishlist";
import NotFound from "../Pages/NotFound";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<ProductsDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default Router