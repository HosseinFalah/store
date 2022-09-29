import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

import { wishlistAction } from "../redux/actions/wishlist";

import WishListCard from "../Components/WishListCard/WishListCard";

const Wishlist = () => {
    const dispatch = useDispatch();

    const { wishlist } = useSelector(state => state.wishlist);

    const removeWishlistHandler = (item) => {
        dispatch(wishlistAction(item));
        toast.success("محصول از لیست علاقه مندی ها پاک شد", {icon: "✅"})
    }

    return (
        <div className="container-fluid mt-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <b className="h3">
                            <Link to={"/products"} className="text-muted">علاقه مندی ها</Link>
                        </b>
                    </li>
                    <li className="d-flex align-items-center breadcrumb-item active" aria-current="page">لیست علاقه مندی ها</li>
                </ol>
            </nav>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {wishlist.map(item => (
                    <WishListCard 
                        key={uuidv4()} 
                        productInfo={item}
                        removeWishList={() => removeWishlistHandler(item)}/>
                ))}
            </div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                {wishlist.length === 0 && 
                    <div className="d-flex flex-column">
                        <h4 className="text-center">لیست علاقه مندی های شما خالی است</h4>
                        <Link to={`/products`} className="d-grid">
                            <button className="btn btn-success bg-gradient mt-4">بازگشت</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Wishlist