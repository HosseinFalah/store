import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { searchProductsRequest } from "../../redux/actions/products";

import { sidebarMenu } from "../../Asset/data/navbar_menu";

const Search = () => {
    const searchQueryRef = useRef(null);
    
    const dispatch = useDispatch();
    const { searchProducts: { pages, products } , productsList } = useSelector(state => state);

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(searchProductsRequest(searchQuery, sidebarMenu, productsList.products))
    }, [productsList, searchQuery]);

    return (
        <div className="input-group flex-grow-1 w-50 me-auto">
            <input
                type="text"
                className="form-control-search"
                ref={searchQueryRef}
                placeholder="جستجو در هزاران کالا ..."
                onChange={(e) => setSearchQuery(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className={`position-absolute top-100 bg-white rounded shadow search-menu ${searchQuery ? "" : "d-none"} mt-3 p-2`}>
                <div className="lh-lg mt-2">
                    <h4 className="text-dark">صفحات</h4>
                    {pages.map(page => (
                        <Link key={uuidv4()} to={page.route} className="text-success d-block search-menu-item mt-2 p-2">
                            {page.icon}
                            <span>{page.name}</span>
                        </Link>
                    ))}
                    {pages.length === 0 && <p className="text-danger">نتیجه ای پیدا نشد</p>}
                </div>
                <div className="mt-2 lh-lg">
                    <h4 className="text-dark">محصولات</h4>
                    {products.map(product => (
                        <Link key={uuidv4()} to={`/product/${product.id}`} className="text-warning d-block search-menu-item mt-2 p-2">
                            <BsSearch className="me-2"/>
                            <span >{product.name}</span>
                        </Link>
                    ))}
                    {products.length === 0 && <p className="text-danger">نتیجه ای پیدا نشد</p>}
                </div>
            </div>
        </div>
    )
}

export default Search