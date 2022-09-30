import { Link } from "react-router-dom";
import logo from "../../Asset/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {

    return (
        <nav className="navbar sticky-top bg-white shadow-lg">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="input-group flex-grow-1 w-50 me-auto">
                    <input type="text" className="form-control-search" placeholder="جستجو در هزاران کالا ..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <form className="navbar_form">
                    <Link to={"/login"} className="text-decoration-none text-dark btn-login me-2">ورود | ثبت نام</Link>
                    <Link to={"/wishlist"}>
                        <AiOutlineHeart className="text-danger fs-4 mx-3"/>
                    </Link>
                    <Link to={"/cart"} className="btn-shopping">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="shopping-counter">0</span>
                    </Link>
                </form>
            </div>
        </nav>
    )
}

export default Header