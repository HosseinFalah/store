import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Search from "../shared/Search";

import { AiOutlineHeart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import logo from "../../Asset/LogoCompany.png";


const Header = () => {

    const [screenSize, setScreenSize] = useState(null);


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
  
        window.addEventListener("resize", handleResize)
  
        handleResize();
  
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (
        <nav className="navbar sticky-top bg-white shadow-lg">
            {screenSize < 715 ? (
                <>
                    <div className="container-fluid mb-3">
                        <Link to={"/"} className="navbar-brand mx-auto">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <Search screenSize={screenSize}/>
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
                </>
            ) : (
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        <img src={logo} className="logo" alt="logo" />
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
            )}
        </nav>
    )
}

export default Header