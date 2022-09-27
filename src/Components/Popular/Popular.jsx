import { Link } from "react-router-dom";
import numberWithCommas from "../../Utils/numberWithCommas";

const Popular = () => {
    return (
        <>
            <div className="popular-item-main bg-primary bg-gradient d-flex align-items-center justify-content-center shadow rounded px-4">
                <div className="col-6">
                    <h3 className="text-white fs-2">Galaxy Book Pro 360</h3>
                    <p className="text-white mt-4 text-truncate">گلکسی بوک پرو 360 با صفحه نمایش لمسی Super AMOLED، لولای 360 درجه، پردازنده نسل یازدهم اینتل Core i7 و ویژگی های نرم افزاری منحصر به فرد، براق ترین نوت بوک 15 اینچی 2 در 1 موجود است.</p>
                    <Link to={"/product/8"}><button className="btn btn-warning bg-warning bg-gradient">همین الان بخر</button></Link>
                </div>
                <div className="col-6">
                    <img src="/images/popular-2-1.png" className="img-fluid" alt="Galaxy Book Pro 360" />
                </div>
            </div>
            <div className="popular-item-second bg-info bg-gradient d-flex align-items-center justify-content-center shadow rounded px-4">
                <div className="col-6">
                    <span className="badge rounded-pill text-bg-danger">20%</span>
                    <div className="mt-2">
                        <h5 className="text-white fs-6">by <span>apple</span></h5>
                        <h3 className="text-white fs-4">iPhone 12 mini</h3>
                        <p className="text-white mt-2">{numberWithCommas(779.99)} تومان</p>
                    </div>
                    <div className="mb-3">
                        <Link to={"/product/12"}><button className="btn btn-primary">همین الان بخر</button></Link>
                    </div>
                </div>
                <div className="col-6">
                    <img src="/images/popular-2-2.png" className="img-fluid" alt="iPhone 12 mini" />
                </div>
            </div>
            <div className="popular-item-third bg-warning bg-gradient d-flex align-items-center justify-content-center shadow rounded px-4">
                <div className="col-6">
                    <span className="badge rounded-pill text-bg-danger">20%</span>
                    <div className="mt-2">
                        <h5 className="text-white fs-6">by <span>apple</span></h5>
                        <h3 className="text-white fs-4">Apple AirPods Max</h3>
                        <p className="text-white mt-2">{numberWithCommas(549.00)} تومان</p>
                    </div>
                    <div className="mb-3">
                        <Link to={"/product/29"}><button className="btn btn-primary">همین الان بخر</button></Link>
                    </div>
                </div>
                <div className="col-6">
                    <img src="/images/popular-2-3.png" className="img-fluid" alt="Apple AirPods Max" />
                </div>
            </div>
        </>
    )
}

export default Popular