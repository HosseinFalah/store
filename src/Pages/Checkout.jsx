import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Checkout = () => {
    const initialValues = {
        fullName: "",
        tel: "",
        address: "",
        city: "",
        pincode: "",
    }

    const validate = Yup.object({
        fullName: Yup.string().required("فیلد نام کامل الزامی است"),
        tel: Yup.string().required("فیلد شماره موبایل الزامی است"),
        address: Yup.string().required("فلت، خانه بدون فیلد مورد نیاز است"),
        city: Yup.string().required("فیلد شهر/شهر الزامی است"),
        pincode: Yup.string().required("فیلد Pincode الزامی است"),
    })

    return (
        <div className="container-fluid mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <b className="h3">
                            <Link to={"/products"} className="text-muted">تسویه حساب</Link>
                        </b>
                    </li>
                    <li className="d-flex align-items-center breadcrumb-item active" aria-current="page">ادامه پرداخت</li>
                </ol>
            </nav>
            <div className="row row-cols-2 g-2">
                <div className="col-12 col-md-8">
                    <div className="bg-white rounded shadow p-4">
                        <div>
                            <h4>اضافه کردن آدرس جدید</h4>
                            <p className="text-muted">پس از پایان کار حتماً «ارسال به این آدرس» را علامت بزنید</p>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validate}
                            onSubmit={(value) => console.log(value)}
                        >
                            {() => (
                                <Form className="row" autoComplete="off">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="fullName" className="form-label">نام و نام خانوادگی</label>
                                        <Field name="fullName" id="fullName" type="text" className="form-control"/>
                                        <ErrorMessage name="fullName" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="tel" className="form-label">شماره موبایل</label>
                                        <Field name="tel" id="tel" type="number" className="form-control"/>
                                        <ErrorMessage name="tel" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-3">
                                        <label htmlFor="address" className="form-label">آدرس</label>
                                        <Field name="address" id="address" type="text" className="form-control" placeholder="خوزستان...."/>
                                        <ErrorMessage name="address" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-3">
                                        <label htmlFor="city" className="form-label">شهر</label>
                                        <Field name="city" id="city" type="text" className="form-control" placeholder="اندیمشک"/>
                                        <ErrorMessage name="city" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-3">
                                        <label htmlFor="pincode" className="form-label">کد پستی</label>
                                        <Field name="pincode" id="pincode" type="text" className="form-control w-100"/>
                                        <ErrorMessage name="pincode" render={msg => <div className="text-danger mt-2">{msg}</div>}/>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-outline-primary mt-3">ذخیره</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="bg-white rounded shadow p-4">
                        <h4 className="text-muted">John Doe</h4>
                        <p className="text-muted">9447 Glen Eagles Drive</p>
                        <p className="text-muted">Lewis Center, OH 43035</p>
                        <p className="text-muted">UTC-5: Eastern Standard Time (EST)</p>
                        <p className="text-muted">202-555-0140</p>
                        <div className="d-grid">
                            <button className="btn btn-outline-warning">ارسال به پست</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout