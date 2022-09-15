import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../Components/Banner/Banner"
import ServiceBox from "../Components/ServiceBox/ServiceBox"
import ProductSlider from "../Components/shared/ProductSlider"

import { sendProductsRequest } from "../redux/actions/products";
import filterCategory from "../Helpers/filterCategory";

const Home = () => {
    const {loading, products, error} = useSelector(state => state);
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
                    <div className="service-box mt-4">
                        <ServiceBox/>
                    </div>
                    <div className="bg-white rounded shadow mt-4">
                        <ProductSlider productsCategory={moblieCategory} title="تلفن همراه"/>
                    </div>
                    <div className="bg-white rounded shadow mt-4">
                        <ProductSlider productsCategory={smartWatchCategory} title="ساعت هوشمند"/>
                    </div>
                </main>
            )}
        </>
    )
}

export default Home