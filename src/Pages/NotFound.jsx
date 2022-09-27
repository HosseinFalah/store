import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h1 className="display-1 text-secondary">404</h1>
            <div className="text-center">
                <h3 className="text-secondary">صفحه یافت نشد</h3>
                <p className="text-secondary">صفحه ای که شما به دنبال آن هستید وجود ندارد یا منتقل شده است.</p>
                <Link to={"/"}><button className="btn bg-primary bg-gradient text-white">بازگشت به صفحه اصلی</button></Link>
            </div>
        </div>
    )
}

export default NotFound