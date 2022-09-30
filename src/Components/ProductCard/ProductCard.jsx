import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useLayout } from "../../hook/Layout";

import numberWithCommas from "../../Utils/numberWithCommas";

import RatingsList from "../shared/RatingsList";

const ProductCard = ({productInfo, addWishList}) => {
    const {id, name, price, brand, rating, description, images, inStock} = productInfo;

    const { productsListLayout } = useLayout();

    const { wishlist } = useSelector((state) => state.wishlist);

    const likeWishList = wishlist.some((i) => i.id === id);
    
    return (
        <>
            {productsListLayout === "grid" ?
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <Link to={`/product/${id}`}>
                                <img src={images[0]} className="card-img-top" alt={name} />
                            </Link>
                            <div className="p-1">
                                <div className="d-flex align-items-center justify-content-between">
                                    {inStock ? (
                                        <h5 className="h6 text-muted m-0">{numberWithCommas(price)} تومان</h5>
                                    ) : (
                                        <span className="text-danger">موجود نیست</span>
                                    )}
                                    <RatingsList rating={rating}/>
                                </div>
                                <h3 className="h6 mt-3 text-truncate">
                                    <Link to={`/product/${id}`} className="text-dark">{name}</Link>
                                </h3>
                                <p className="text-secondary text-truncate mt-3">{description}</p>
                            </div>
                            <div className="row gy-2">
                                <Link to={`/product/${id}`} className="d-grid p-0">
                                    <button className={`btn ${inStock ? 'btn-primary' : 'btn-danger'} bg-gradient`}>
                                        {inStock ? "مشاهده جزئیات" : "موجود نیست"}
                                    </button>
                                </Link>
                                <button 
                                    className="col btn btn-success bg-gradient"
                                    onClick={addWishList}>
                                    علاقه مندی ها
                                    {likeWishList ? 
                                        <AiFillHeart className="text-danger ms-2"/>
                                            : 
                                        <AiOutlineHeart className="ms-2"/>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="card bg-white rounded shadow mb-3 p-1">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <img src={images[0]} className="img-fluid rounded-start" alt={name} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-5">
                            <div className="card-body">
                                <Link to={`/product/${id}`} className="h5 text-body text-truncate card-title">{name}</Link>
                                <p className="card-title py-2 m-0">برند <b className="text-primary">{brand}</b></p>
                                <RatingsList rating={rating}/>
                                <p className="text-secondary text-truncate mt-3">{description}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3 d-flex flex-column align-items-center justify-content-center">
                            {inStock ? (
                                <h4 className="text-primary">{numberWithCommas(price)} تومان</h4>
                            ) : (
                                <span className="text-danger">موجود نیست</span>
                            )}
                            <div className="container row mt-2 p-0">
                                <Link to={`/product/${id}`} className="d-grid p-0">
                                    <button className={`btn ${inStock ? 'btn-primary' : 'btn-danger'} bg-gradient`}>
                                        {inStock ? "مشاهده جزئیات" : "موجود نیست"}
                                    </button>
                                </Link>
                                <button 
                                    className="btn btn-success bg-gradient mt-3"
                                    onClick={addWishList}>
                                    علاقه مندی ها
                                    {likeWishList ? 
                                        <AiFillHeart className="text-danger ms-2"/>
                                            : 
                                        <AiOutlineHeart className="ms-2"/>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductCard