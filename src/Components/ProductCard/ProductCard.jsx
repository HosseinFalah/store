import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import numberWithCommas from "../../Utils/numberWithCommas";

import RatingsList from "../shared/RatingsList";

const ProductCard = ({productInfo, addWishList}) => {
    const {id, name, price, rating, description, images, inStock} = productInfo;

    const { wishlist } = useSelector((state) => state.wishlist);

    const likeWishList = wishlist.some((i) => i.id === id)

    return (
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
                    <div className="row row-cols-1 gy-2">
                        <Link to={`/product/${id}`} className="d-grid p-0">
                            <button className={`col btn ${inStock ? 'btn-primary' : 'btn-danger'} bg-gradient`}>
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
    )
}

export default ProductCard