import { AiOutlineArrowUp } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { SiAparat } from "react-icons/si";

import Logo from "../../Asset/logo.svg";

const Footer = () => {

    const scrolTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="container-fluid bg-white mt-3">
            <div className="py-4">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={Logo} alt="" />
                    <button className="btn btn-warning bg-gradient" onClick={scrolTop}>بازگشت به بالا <AiOutlineArrowUp/></button>
                </div>
                <div className="d-flex gap-4 mt-3">
                    <p className="text-dark">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                    <div className="text-secondary">|</div>
                    <p className="text-dark">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </div>
                <div className="m-auto row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 mt-2">
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                        <img src={`https://www.digikala.com/statics/img/svg/footer/express-delivery.svg`} className="img-fluid" alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس" />
                        <p>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                        <img src={`https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg`} className="img-fluid" alt="امکان پرداخت در محل" />
                        <p>امکان پرداخت در محل</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                        <img src={`https://www.digikala.com/statics/img/svg/footer/support.svg`} className="img-fluid" alt="۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ" />
                        <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                        <img src={`https://www.digikala.com/statics/img/svg/footer/days-return.svg`} className="img-fluid" alt="هفت روز ضمانت بازگشت کالا" />
                        <p>هفت روز ضمانت بازگشت کالا</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                        <img src={`https://www.digikala.com/statics/img/svg/footer/original-products.svg`} className="img-fluid" alt="ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ" />
                        <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-3">
                    <div className="col">
                        <h5 className="text-dark fw-bold">با دیجی‌کالا</h5>
                        <ul className="list-unstyled mt-3 lh-lg text-muted">
                            <li className="p-1">اتاق خبر دیجی‌کالا</li>
                            <li className="p-1">فروش در دیجی‌کالا</li>
                            <li className="p-1">فرصت‌های شغلی</li>
                            <li className="p-1">گزارش تخلف در دیجی‌کالا</li>
                            <li className="p-1">تماس با دیجی‌کالا</li>
                            <li className="p-1">درباره دیجی‌کالا</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="text-dark fw-bold">خدمات مشتریان</h5>
                        <ul className="list-unstyled mt-3 lh-lg text-muted">
                            <li className="p-1">پاسخ به پرسش‌های متداول</li>
                            <li className="p-1">رویه‌های بازگرداندن کالا</li>
                            <li className="p-1">شرایط استفاده</li>
                            <li className="p-1">حریم خصوصی</li>
                            <li className="p-1">گزارش باگ</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="text-dark fw-bold">راهنمای خرید از دیجی‌کالا</h5>
                        <ul className="list-unstyled mt-3 lh-lg text-muted">
                            <li className="p-1">نحوه ثبت سفارش</li>
                            <li className="p-1">رویه ارسال سفارش</li>
                            <li className="p-1">شیوه‌های پرداخت</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="text-dark fw-bold">همراه ما باشید!</h5>
                        <ul className="d-flex align-items-center justify-content-around list-unstyled mt-4 lh-lg text-muted">
                            <li className="p-1"><BsInstagram className="text-danger" size={20}/></li>
                            <li className="p-1"><BsTwitter className="text-primary" size={20}/></li>
                            <li className="p-1"><BsLinkedin className="text-primary" size={20}/></li>
                            <li className="p-1"><SiAparat className="text-danger" size={20}/></li>
                        </ul>
                        <h6 className="py-3">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h6>
                        <form className="d-flex gap-2">
                            <input type="text" className="form-control" placeholder="ایمیل شما"/>
                            <button className="btn btn-outline-secondary">ثبت</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer