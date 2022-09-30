import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateCartItemAction } from "../../redux/actions/cart";

import RatingsList from "../shared/RatingsList";
import QuantityInput from "../shared/QuantityInput";

import numberWithCommas from "../../Utils/numberWithCommas";
import { wishlistAction } from "../../redux/actions/wishlist";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";

const ShoppingCard = ({card, removeCard}) => {
    const { id, quantity } = card
    const dispatch = useDispatch();

    const { wishlist } = useSelector((state) => state.wishlist)

    const incrementHandler = () => {
        dispatch(updateCartItemAction({...card, quantity: quantity + 1}))
    }
    const decrementHandler = () => {
        dispatch(updateCartItemAction({...card, quantity: quantity - 1 < 1 ? 1 : quantity - 1}))
    }

    const like = wishlist.some((i) => i.id === id)

    const addWishlistHandler = () => {
        dispatch(wishlistAction(card))
        toast.success("اضافه شد به لیست علاقه مندی", {icon: "✅"})
    }


    return (
        <div className="card bg-white rounded shadow mb-3 p-1">
            <div className="row">
                <div className="col-md-4">
                    <img src={card.images[0]} className="img-fluid rounded-start" alt={card.name} />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <Link to={`/product/${card.id}`} className="h5 text-body text-truncate card-title">{card.name}</Link>
                        <p className="card-title py-2 m-0">برند {card.brand}</p>
                        <RatingsList rating={card.rating}/>
                        <p className={`card-title ${card.inStock ? "text-success" : "text-danger"}`}>{card.inStock ? "موجود در انبار" : "ناموجود"}</p>
                        <div className="d-flex align-items-center justify-content-start mb-2">
                        رنگ :
                            <div className={`d-flex justify-content-center align-items-center mx-2 rounded-circle`} key={uuidv4()}>
                                <div className={`color bg-${card.color}`}></div>
                            </div>
                        </div>
                        <QuantityInput qty={card.quantity} increment={incrementHandler} decrement={decrementHandler}/>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                    {card.inStock ? (
                        <h4 className="text-primary">{numberWithCommas(card.price)} تومان</h4>
                    ) : (
                        <span className="text-danger">موجود نیست</span>
                    )}
                    {card.freeShipping && <p className="badge rounded-pill text-bg-success">ارسال رایگان</p>}
                        <div className="d-grid w-100">
                            <button className="btn btn-danger bg-gradient" onClick={removeCard}>حذف کردن</button>
                            <button 
                                className="btn btn-primary btn-sm bg-gradient mt-3"
                                onClick={addWishlistHandler}
                                >افزودن به لیست علاقه مندی
                                    {like ? 
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

export default ShoppingCard;