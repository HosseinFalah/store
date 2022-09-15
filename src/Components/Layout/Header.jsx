import { Link } from "react-router-dom";
import logo from "../../Asset/logo.svg";

const Header = () => {

    return (
        <nav className="navbar sticky-top bg-white">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="input-group flex-grow-1 w-50 me-auto">
                    <input type="text" className="form-control-search" placeholder="جستجو در هزاران کالا ..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <form className="navbar_form">
                    <a href=" #" className="text-decoration-none text-dark btn-login">ورود | ثبت نام</a>
                    <button className="btn-shopping">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="shopping-counter">0</span>
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Header