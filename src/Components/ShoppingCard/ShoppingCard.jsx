import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import RatingsList from "../shared/RatingsList";
import QuantityInput from "../shared/QuantityInput";
import { useDispatch } from "react-redux";
import { updateCartItemAction } from "../../redux/actions/cart";
import numberWithCommas from "../../Utils/numberWithCommas";

const ShoppingCard = ({card, removeCard}) => {
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(updateCartItemAction({...card, quantity: preveCounter => preveCounter + 1}))
    }
    const decrementHandler = () => {
        dispatch(updateCartItemAction({...card, quantity: preveCouner => preveCouner - 1 < 1 ? 1 : preveCouner - 1}))
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
                        <p className="m-0">برند {card.brand}</p>
                        <RatingsList rating={card.rating}/>
                        <p className={`card-title ${card.inStock ? "text-success" : "text-danger"}`}>{card.inStock ? "موجود در انبار" : "ناموجود"}</p>
                        <div className="d-flex align-items-center justify-content-start mb-2">
                        رنگ : {card.colors.map(color => (
                                <div className={`d-flex justify-content-center align-items-center mx-2 rounded-circle`} key={uuidv4()}>
                                    <div className={`color bg-${color}`}></div>
                                </div>
                            ))}
                        </div>
                        <QuantityInput qty={card.price} increment={incrementHandler} decrement={decrementHandler}/>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                    {card.inStock ? (
                        <h4 className="text-primary">{numberWithCommas(card.price)} تومان</h4>
                    ) : (
                        <span className="text-danger">موجود نیست</span>
                    )}
                    {card.freeShipping && <p className="badge rounded-pill text-bg-success">ارسال رایگان</p>}
                        <div className="d-grid">
                            <button className="btn btn-danger bg-gradient" onClick={removeCard}>حذف کردن</button>
                            <button className="btn btn-primary bg-gradient mt-3">افزودن به لیست علاقه مندی</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard;