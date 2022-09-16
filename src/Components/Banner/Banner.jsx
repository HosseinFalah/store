import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="banner mt-4">
            <div className="banner-item-main bg-success bg-gradient d-flex align-items-center justify-content-evenly shadow rounded">
                    <div className="col-6 ps-4">
                        <span className="badge rounded-pill text-bg-danger">20%</span>
                        <div className="mt-2">
                            <h5 className="text-white fs-6">by <span>samsung</span></h5>
                            <h3 className="text-white fs-4">Galaxy Watch 6</h3>
                            <p className="text-white mt-2">$459.39</p>
                        </div>
                        <div className="mb-3">
                            <Link to={"/products/30"}><button className="btn btn-outline-warning">همین الان بخر</button></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="/images/popular-1-2.png" className="img-fluid" alt="Galaxy Watch 6" />
                    </div>
            </div>
            <div className="banner-item-second bg-warning bg-gradient d-flex align-items-center justify-content-evenly shadow rounded">
                    <div className="col-6 ps-4">
                        <span className="badge rounded-pill text-bg-danger">20%</span>
                        <div className="mt-2">
                            <h5 className="text-white fs-6">by <span>samsung</span></h5>
                            <h3 className="text-white fs-4">MacBook Air</h3>
                            <p className="text-white mt-2">$809.19</p>
                        </div>
                        <div className="mb-3">
                            <Link to={"/products/4"}><button className="btn btn-primary">همین الان بخر</button></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="/images/popular-1-3.png" className="img-fluid" alt="MacBook" />
                    </div>
            </div>
            <div className="banner-item-third bg-primary bg-gradient d-flex bg-cart align-items-center justify-content-center shadow rounded">
                <div className="col-6 ps-4">
                    <h3 className="text-white fs-2">اپل آیفون 11</h3>
                    <p className="text-white mt-4">آیفون 11 اپل یک گوشی هوشمند فوق العاده است که دارای ویژگی های با کیفیت زیادی است. این دستگاه دارای بدنه ای ضد آب و ضد گرد و غبار است که از جذابیت های کلیدی دستگاه است.</p>
                    <div className="mb-2">
                        <Link to={"/products/2"}><button className="btn btn-outline-warning">همین الان بخر</button></Link>
                    </div>
                </div>
                <div className="col-6">
                    <img src="/images/popular-1-1.png" className="img-fluid" alt="Apple iPhone 11" />
                </div>
            </div>
        </div>
    )
}

export default Banner