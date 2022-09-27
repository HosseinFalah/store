import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import numberWithCommas from "../../Utils/numberWithCommas";

import RatingsList from "../shared/RatingsList";

const ProductCard = ({productInfo}) => {
    const {id, name, price, rating, description, images, inStock} = productInfo;
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
                        <button className={`col btn ${inStock ? 'btn-primary' : 'btn-danger'} bg-gradient`}>
                            {inStock ? "افزودن به سبد خرید" : "موجود نیست"}
                            {inStock && <AiOutlineShoppingCart/>}
                        </button>
                        <button className="col btn btn-success bg-gradient">
                            علاقه مندی ها
                            <AiOutlineHeart fontSize={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard