import { Link } from "react-router-dom";
import logo from "../../Asset/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import Search from "../shared/Search";

const Header = () => {

    return (
        <nav className="navbar sticky-top bg-white shadow-lg">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="logo" />
                </Link>
                <Search/>
                <form className="navbar_form">
                    <Link to={"/login"} className="btn btn-outline-primary"><BiLockAlt className="me-2"/>وارد شوید</Link>
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