import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../Components/Banner/Banner";
import ServiceBox from "../Components/ServiceBox/ServiceBox";
import ProductSlider from "../Components/shared/ProductSlider";
import Popular from "../Components/Popular/Popular";

import { sendProductsRequest } from "../redux/actions/products";
import filterCategory from "../Helpers/filterCategory";

const Home = () => {
    const {loading, products} = useSelector(state => state.productsList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(sendProductsRequest())
    }, [])

    const moblieCategory = filterCategory(products, "mobile");
    const smartWatchCategory = filterCategory(products, "smart-watch");
    const laptopCategory = filterCategory(products, "laptop");
    const computerCategory = filterCategory(products, "computer");

    return (
        <>
            {loading ? (
                    <div className="d-flex align-items-center justify-content-center vh-100">
                        <div className="spinner-border p-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    ) : (
                <main className="container-fluid">
                    <Banner/>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 mt-4 m-0">
                        <ServiceBox/>
                    </div>
                    <div className="bg-white rounded shadow mt-4">
                        <ProductSlider productsCategory={moblieCategory} title="تلفن همراه"/>
                    </div>
                    <div className="bg-white rounded shadow mt-4">
                        <ProductSlider productsCategory={smartWatchCategory} title="ساعت هوشمند"/>
                    </div>
                    <div className="popular mt-4">
                        <Popular/>
                    </div>
                    <div className="bg-white rounded shadow mt-4">
                        <ProductSlider productsCategory={laptopCategory} title="لپ تاپ"/>
                    </div>
                    <div className="bg-white rounded shadow mt-4">
                        <ProductSlider productsCategory={computerCategory} title="کامپیوتر"/>
                    </div>
                </main>
            )}
        </>
    )
}

export default Home