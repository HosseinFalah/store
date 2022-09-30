import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import numberWithCommas from "../Utils/numberWithCommas";

import ShoppingCard from "../Components/ShoppingCard/ShoppingCard";
import { removeCartAction } from "../redux/actions/cart";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cartItems } = useSelector(state => state.cart);

    const removeCardHandler = (id, color, category) => {
        dispatch(removeCartAction(id, color, category));
        toast.success("محصول از سبد حذف شد", {icon: "✅"})
    }
    
    const checkOuthandler = () => cartItems.length > 0 && navigate("/checkout");

    const totalPrice = numberWithCommas(cartItems.reduce((acc, item) => acc + item.totalPrice, 0));
    const priceTax = cartItems.length * 0.1;

    return (
        <div className="container-fluid mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <b className="h3">
                            <Link to={"/products"} className="text-muted">سبد خرید</Link>
                        </b>
                    </li>
                    <li className="d-flex align-items-center breadcrumb-item active" aria-current="page">جزئیات سبد خرید</li>
                </ol>
            </nav>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col-md-8">
                    <p className="text-muted">سبد خرید شما</p>
                    {cartItems.length ? cartItems.map(card => (
                        <ShoppingCard 
                            key={uuidv4()} 
                            card={card} 
                            removeCard={() => removeCardHandler(card.id, card.color, card.category)}/>
                        )) : 
                        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                            <h3 className="text-warning">سبد خرید شما خالی هست</h3>
                            <Link to={`/products`}>
                                <button className="btn btn-success bg-gradient shadow mt-3">بازگشت به فروشگاه</button>
                            </Link>
                        </div>
                    }
                </div>
                <div className="col-md-4">
                    <p className="text-muted">خلاصه سفارش</p>
                    <div className="bg-white rounded shadow p-3">
                        <h5 className="">جزئیات قیمت</h5>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <p className="text-muted m-0">تخفیف</p>
                            <span className="text-success">%0</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <p className="text-muted m-0">مالیات </p>
                            <span className="text-dark">{cartItems.length > 0 ? numberWithCommas(priceTax) : "%0"}</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3 border-bottom pb-3">
                            <p className="text-muted m-0">هزینه تحویل</p>
                            <span className="text-success">رایگان</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <h4>مجموع کل</h4>
                            <p className="text-muted">{numberWithCommas(totalPrice)} تومان</p>
                        </div>
                        <button className="w-100 btn btn-warning bg-gradient mt-2" onClick={checkOuthandler}>پرداخت</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart