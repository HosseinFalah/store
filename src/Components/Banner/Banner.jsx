const Banner = () => {
    return (
        <div className="popular mt-4">
            <div className="popular-item-main bg-success d-flex align-items-center justify-content-evenly shadow rounded">
                    <div className="col-6 cart-item-contetnt ps-4">
                        <div className="content-bage">
                            <span className="badge rounded-pill text-bg-danger">20%</span>
                        </div>
                        <div className="content-caption mt-2">
                            <h5 className="caption-brand text-white fs-6">by <span>samsung</span></h5>
                            <h3 className="text-white fs-4 caption-title">Galaxy Watch 6</h3>
                            <p className="caption-price text-white mt-2">$459.39</p>
                        </div>
                        <div className="content-btn mb-3">
                            <button className="btn btn-outline-warning">همین الان بخر</button>
                        </div>
                    </div>
                    <div className="col-6 cart-item-img">
                        <img src="/images/popular-1-2.png" className="img-fluid" alt="Apple iPhone 11" />
                    </div>
            </div>
            <div className="popular-item-second bg-warning d-flex align-items-center justify-content-evenly shadow rounded">
                    <div className="col-6 cart-item-contetnt ps-4">
                        <div className="content-bage">
                            <span className="badge rounded-pill text-bg-danger">20%</span>
                        </div>
                        <div className="content-caption mt-2">
                            <h5 className="caption-brand text-white fs-6">by <span>samsung</span></h5>
                            <h3 className="text-white fs-4 caption-title">MacBook Air</h3>
                            <p className="caption-price text-white mt-2">$809.19</p>
                        </div>
                        <div className="content-btn mb-3">
                            <button className="btn btn-primary">همین الان بخر</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="/images/popular-1-3.png" className="img-fluid" alt="Apple iPhone 11" />
                    </div>
            </div>
            <div className="popular-item-third bg-primary d-flex bg-cart align-items-center justify-content-center shadow rounded">
                <div className="col-6 cart-item-contetnt ps-4">
                    <div className="content-caption">
                        <h3 className="text-white fs-2">اپل آیفون 11</h3>
                        <p className="caption-description text-white mt-4">آیفون 11 اپل یک گوشی هوشمند فوق العاده است که دارای ویژگی های با کیفیت زیادی است. این دستگاه دارای بدنه ای ضد آب و ضد گرد و غبار است که از جذابیت های کلیدی دستگاه است.</p>
                    </div>
                    <div className="content-btn mb-2">
                        <button className="btn btn-outline-warning">همین الان بخر</button>
                    </div>
                </div>
                <div className="col-6 cart-item-img">
                    <img src="/images/popular-1-1.png" className="img-fluid" alt="Apple iPhone 11" />
                </div>
            </div>
        </div>
    )
}

export default Banner