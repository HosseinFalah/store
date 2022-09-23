import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// State Management
import { sendProductDetailsRequest, sendProductsRequest } from "../redux/actions/products";

// Filter Product
import filterCategory from "../Helpers/filterCategory";

// Components
import ImageSlider from "../Components/shared/ImageSlider";
import RatingsList from "../Components/shared/RatingsList";
import QuantityInput from "../Components/shared/QuantityInput";
import ProductSlider from "../Components/shared/ProductSlider";

// icon
import { BsTruck } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAwardLine } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { BsShield } from "react-icons/bs";

const ProductsDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const { productsList, productDetails } = useSelector((state) => state);

    const { products } = productsList;
    const { product } = productDetails;

    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState([]);
    const [images, setImages] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        dispatch(sendProductsRequest())
        dispatch(sendProductDetailsRequest(params.id))
    }, [params.id])

    useEffect(() => {
        if (product?.colors) setColor(product.colors[0]);
        if (product?.images) setImage(product.images[0]);
        if (product?.images) setImages(product.images);

        const productsSlider = filterCategory(products, product?.category);
        setRelatedProducts(productsSlider);
    }, [product])

    const selectedColor = color && color.replace("-", " ");

    const incrementHandler = () => {
        setQuantity(preveCounter => preveCounter + 1)
    }
    const decrementHandler = () => {
        setQuantity(preveCouner => preveCouner - 1 < 1 ? 1 : preveCouner - 1)
    }

    return (
        <>
            {productsList.loading && productDetails.loading ? 
                (<div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="spinner-border p-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                ) : (
                    <div className="container-fluid">
                        <div className="mt-4">
                            <div className="d-flex align-items-center">
                                <h3 className="text-secondary">مشخصات محصول</h3>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center bg-body shadow mt-3 p-4">
                                <div className="col-12 col-md-5">
                                    <ImageSlider sliderImg={images}/>
                                </div>
                                <div className="col-12 col-md-7 mt-5 mt-md-0 ps-3">
                                    <h3 className="display-5 text-dark">{product?.name}</h3>
                                    <p className="fs-6 text-muted mt-3">برند <span className="text-primary">{product?.brand}</span></p>
                                    <div className="d-flex align-items-center">
                                        {product?.inStock ? (
                                            <h4 className="text-dark border-end pe-3 me-2 m-0">قیمت : <span className="text-primary">{product?.price}</span> تومان</h4>
                                        ) : (
                                            <h4 className="text-danger me-3">موجود نیست</h4>
                                        )}
                                        <RatingsList rating={product?.rating}/>
                                    </div>
                                    <p className="text-muted fs-5 mt-3">
                                    در دسترس - 
                                    {product?.inStock ? (
                                        <span className="text-success"> موجود در انبار</span>
                                    ) : (
                                        <span className="text-danegr"> موجود نیست</span>
                                    )}
                                    </p>
                                    <div className="lh-lg text-secondary">{product?.description}</div>
                                    <div className="">
                                        {product?.freeShipping && (
                                            <div className="mt-3">
                                                <b className="me-4">ارسال رایگان</b>
                                                <BsTruck className="text-warning" fontSize={25}/>
                                            </div>
                                        )}
                                        {product?.EMI && (
                                            <div className="mt-3">
                                                <FiDollarSign className="text-muted"/>
                                                <b>گزینه های EMI موجود است</b>
                                            </div>
                                        )}
                                        {product?.fastDelivery && (
                                            <div className="mt-3">
                                                <b className="me-4">تحویل سریع</b>
                                                <TbTruckDelivery className="text-warning" fontSize={25}/>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 border-top border-bottom py-4">
                                        <h6 className="text-secondary">رنگ - <span>{selectedColor}</span></h6>
                                        <div className="d-flex align-items-center justify-content-start">
                                            {product?.colors && 
                                                product?.colors.map(Color => (
                                                    <div key={uuidv4()} className={`d-flex justify-content-center align-items-center mx-2 rounded-circle${color === Color ? " border border-3 border-primary" : ""}`}>
                                                        <div className={`color bg-${Color}`}></div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="mt-3 border-bottom pb-4">
                                        <h6 className="h4 text-muted">تعداد</h6>
                                        <QuantityInput 
                                            qty={quantity} 
                                            increment={incrementHandler} 
                                            decrement ={decrementHandler}/>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start py-3">
                                        <button className={`btn rounded ${product?.inStock ? "btn-primary" : "btn-danger"}`}>
                                            {product?.inStock ? "مشاهده در سبد خرید" : "موجود نیست"}
                                            <AiOutlineShoppingCart className="ms-2"/>
                                        </button>
                                        <button type="button" className="btn btn-success ms-3">
                                            افزودن به علاقه مندیها
                                            <AiOutlineHeart className="ms-2"/>
                                            {/* <AiFillHeart/> */}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Features */}

                            <div className="row row-cols-1 row-cols-md-3 bg-light bg-gradient text-center m-0 py-5">
                                <div className="col">
                                    <BsShield fontSize={35} className="text-primary"/>
                                    <h4 className="text-dark mt-4">
                                        {product?.original ? '100% اورجینال' : '100% قلابی'}
                                    </h4>
                                </div>
                                <div className="col mt-4 mt-md-0">
                                    <BiTimeFive fontSize={35} className="text-primary"/>
                                    <h4 className="text-dark mt-4">
                                        تعویض {product?.replacement} 
                                    </h4>
                                </div>
                                <div className="col mt-4 mt-md-0">
                                    <RiAwardLine fontSize={35} className="text-primary"/>
                                    <h4 className="text-dark mt-4">
                                        {product?.warranty} گارانتی
                                    </h4>
                                </div>
                            </div>

                            {/* Products Related */}

                            <div className="bg-white rounded-bottom">
                                <ProductSlider productsCategory={relatedProducts} title={"محصولات مشابه"}/>
                            </div>
                        </div>
                    </div>
                )  
            }
        </>
    )
}

export default ProductsDetails