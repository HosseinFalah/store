import { useFormik } from "formik";

import { Link } from "react-router-dom";
import Logo from "../Asset/logo.svg";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            mobile: "09165832381"
        },
        onSubmit: values => {
            console.log(values);
        },
        validate: values => {
            let errors = {}
            if(!values.mobile) {
                errors.mobile = "لطفا این قسمت را خالی نگذارید"
            } else if (!/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/.test(values.mobile) && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.mobile)) {
                errors.mobile = "شماره موبایل یا ایمیل نادرست است."
                
            }
            return errors;
        }
    })

    return (
        <div className="col-10 col-md-4 d-flex align-items-center justify-content-center mx-auto vh-100">
            <div className="row align-items-center justify-content-center border border-dark border-opacity-25 bg-white rounded-3 p-4">
                <Link to={"/"} className="d-flex align-items-center justify-content-center mt-2">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                </Link>
                <div className="mt-3">
                    <h1 className="fs-2 mt-3">ورود | ثبت نام</h1>
                    <p className="text-muted mt-4">سلام!</p>
                    <p className="text-secondary">لطفا شماره موبایل خود یا ایمیل خود را وارد کنید</p>
                    <form onSubmit={formik.handleSubmit} className="d-flex flex-column" autoComplete="off">
                        {formik.errors.mobile && formik.touched.mobile ? 
                            <input 
                                type="text" 
                                className="form-control is-invalid" 
                                name="mobile" 
                                id="validationUsername" 
                                placeholder="0921xxxxxxxxx"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}/> 
                                : 
                            <input 
                                type="text" 
                                className="form-control is-valid" 
                                name="mobile" 
                                id="validationUsername" 
                                placeholder="0921xxxxxxxxx"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}/> }
                        {formik.errors.mobile && formik.touched.mobile ? <p className="invalid-feedback mt-3" id="validationUsername">{formik.errors.mobile}</p> : null}
                        <button className="btn bg-danger bg-gradient text-white rounded-3 mt-3 p-2 fs-5">ورود</button>
                    </form>
                </div>
                <small className="mt-4">ورود شما به معنای پذیرش <span className="text-primary">شرایط دیجی‌کالا</span> و <span className="text-primary">قوانین حریم‌خصوصی</span> است</small>
            </div>
        </div>
    )
}

export default Login