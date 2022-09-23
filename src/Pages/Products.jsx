import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { sendProductsRequest } from "../redux/actions/products";
import { filterSearchAction, sendfilterSelectReducer, sortPriceAction } from "../redux/actions/filters";

import { FiGrid } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import ProductCard from "../Components/ProductCard/ProductCard";
import FilterMenu from "../Components/FilterMenu/FilterMenu";

const Products = () => {
    const dispatch = useDispatch();

    const { filters, productsList, productsList: { loading, products }, filterSelect: { filteredProducts }} = useSelector(state => state);

    const sliceProducts = products.slice(0, 9);
    
    const [productsCard, setProductsCard] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    //function Handler
    const searchFilterHandler = e =>  dispatch(filterSearchAction(e.target.value));
    const sortPriceHandler = value => dispatch(sortPriceAction(value));

    useEffect(() => {
        dispatch(sendProductsRequest());
    }, []);

    useEffect(() => {
        dispatch(sendfilterSelectReducer());
    }, [productsList, filters])

    useEffect(() => {
        setProductsCard(sliceProducts);
    }, [productsList, filteredProducts]);

    let range = []

    let pages = Math.floor(filteredProducts.length / 9)
    pages = filteredProducts.length % 9 === 0 ? pages : pages + 1
    range = [...Array(pages).keys()]

    const selectPageHandler = (page) => {
        const startPage = 9 * page;
        const endPage = startPage + 9;

        setPageIndex(page);
        setProductsCard(filteredProducts.slice(startPage, endPage));
        setCurrentPage(page);
    }

    const nextPageHandler = () => {
        if (pageIndex !== pages - 1) {
            const startPage = 9 * (pageIndex + 1);
            const endPage = startPage + 9

            setProductsCard(filteredProducts.slice(startPage, endPage));
            setCurrentPage(pageIndex + 1);
            setPageIndex(pageIndex + 1);
        }
    }

    const prevPageHandler = () => {
        if (pageIndex !== 0) {
            const startPage = 9 * (pageIndex - 1);
            const endPage = startPage + 9;

            setProductsCard(filteredProducts.slice(startPage, endPage));
            setCurrentPage(pageIndex - 1);
            setPageIndex(pageIndex - 1);
        }
    }

    return (
        <>
            {loading ? (
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="spinner-border p-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            ) : (
                <div className="container-fluid mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <b className="h3">
                                        <Link to={"/products"} className="text-muted">محصولات</Link>
                                    </b>
                                </li>
                                <li className="d-flex align-items-center breadcrumb-item active" aria-current="page">تمامی محصولات</li>
                            </ol>
                        </nav>
                        <div className="row row-cols-1 row-cols-lg-12 g-2 mt-4">
                            <div className="col-12 col-md-3">
                                <p className="text-muted fs-4">فیلتر</p>
                                <div className="bg-white rounded shadow">
                                    <FilterMenu filterCategory={filters}/>
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p className="text-muted m-0">30 نتیجه یافت شد</p>
                                    <div className="d-flex">
                                        <div className="dropdown me-3">
                                            <button 
                                                className="btn btn-outline-primary dropdown-toggle" 
                                                type="button" 
                                                id="dropdownMenuButton1" 
                                                data-bs-toggle="dropdown" 
                                                aria-expanded="false">
                                                    مرتب سازی
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="!#">ویژه</a></li>
                                                <li><a className="dropdown-item" href="!#">ارزان ترین</a></li>
                                                <li><a className="dropdown-item" href="!#">گران ترین</a></li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button className="btn btn-outline-primary"><FiGrid/></button>
                                            <button className="btn btn-outline-primary"><AiOutlineBars/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative mb-4">
                                    <input
                                        type="text"
                                        className="form-control shadow rounded p-2"
                                        placeholder="جستجو در محصولات ..."
                                        onChange={searchFilterHandler}
                                    />
                                    <FiSearch className="text-muted search-icon" size={20}/>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                                    {filteredProducts.length > 0 ? (
                                        productsCard.map(product => (
                                            <ProductCard key={uuid4()} productInfo={product}/>
                                        ))    
                                    ) : (
                                        <h4 className="w-100 display-6 text-center text-warning mt-5">محصول مورد نظر پیدا نشد</h4>
                                    )}
                                </div>
                                <nav className="d-flex align-items-center justify-content-center mt-5" aria-label="Page navigation example">
                                    {pages > 1 && (
                                        <ul className="pagination shadow">
                                            <li className="page-item">
                                                <button className={`page-link${pageIndex === 0 ? ' disable' : ""}`} to={""} aria-label="Previous" onClick={prevPageHandler}>
                                                    <span aria-hidden="true">&laquo;</span>
                                                </button>
                                            </li>
                                            {range.map((page, id) => (
                                                <li key={uuid4()} className={`page-item${currentPage === id ? " active" : ""}`} onClick={() => selectPageHandler(id)}>
                                                    <Link className="page-link" to={""}>{page + 1}</Link>
                                                </li>
                                            ))}
                                            <li className="page-item">
                                                <button className={`page-link${pageIndex === pages - 1 ? " disable" : ""}`} to={""} aria-label="Next" onClick={nextPageHandler}>
                                                    <span aria-hidden="true">&raquo;</span>
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </nav>
                            </div>
                        </div>
                </div>
            )}
        </>
    )
}

export default Products