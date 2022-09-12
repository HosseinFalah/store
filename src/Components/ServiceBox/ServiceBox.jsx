const ServiceBox = () => {
    return (
        <>
            <div className="d-flex gap-4 p-3 align-items-center bg-white shadow rounded">
                <div className="service-box-icon bg-primary text-white p-3 rounded">
                    <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="service-box-content">
                    <h4 className="service-box-title">پشتیبانی 24/7</h4>
                    <p className="service-box-desc">کمک خط 121</p>
                </div>
            </div>
            <div className="d-flex gap-4 p-3 align-items-center bg-white shadow rounded">
                <div className="service-box-icon bg-primary text-white p-3 rounded">
                    <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="service-box-content">
                    <h4 className="service-box-title">ضمانت اصل بودن کالا</h4>
                    <p className="service-box-desc">اورجینال بودن کالا</p>
                </div>
            </div>
            <div className="d-flex gap-4 p-3 align-items-center bg-white shadow rounded">
                <div className="service-box-icon bg-primary text-white p-3 rounded">
                    <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="service-box-content">
                    <h4 className="service-box-title">7 روز ضمانت بازگشت</h4>
                    <p className="service-box-desc">تست رایگان</p>
                </div>
            </div>
            <div className="d-flex gap-4 p-3 align-items-center bg-white shadow rounded">
                <div className="service-box-icon bg-primary text-white p-3 rounded">
                    <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="service-box-content">
                    <h4 className="service-box-title">ارسال سریع</h4>
                    <p className="service-box-desc">پست سریع</p>
                </div>
            </div>
        </>
    )
}

export default ServiceBox