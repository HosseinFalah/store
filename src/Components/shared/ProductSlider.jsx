import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { GrPrevious, GrNext } from "react-icons/gr";
import { MdOutlineArrowLeft } from "react-icons/md";

import RatingsList from './RatingsList';

const ProductSlider = ({productsCategory, title}) => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between p-3">
                <h2 className="h2">{title}</h2>
                <Link to={"/products"} className="bg-light rounded rounded-2 p-2">
                    <span className="text-purple">مشاهده همه</span>
                    <MdOutlineArrowLeft className="text-purple ms-1" fontSize={25}/>
                </Link>
            </div>
            <div className="mx-3" >
                <Swiper
                    className="m-auto position-relative overflow-hidden"
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    navigation={{
                        prevEl: ".next-button",
                        nextEl: ".prev-button",
                    }}
                >
                    <div>
                        {productsCategory && 
                            productsCategory.map(category => (
                                <SwiperSlide key={uuidv4()} className="bg-white bg-gradient shadow rounded-5 text-center flex-shrink-0 p-5 mb-3">
                                    <Link to={category.link}>
                                        <div className="text-center">
                                            <h5 className="h6 text-dark text-truncate">{category.title}</h5>
                                            <small className="text-black-50">برند {category.brand}</small>
                                        </div>
                                        <div className="img-container">
                                            <img src={category.image} className="img-fluid" alt={category.name} />
                                        </div>
                                        <div className="d-flex flex-column align-items-center justify-content-between">
                                            <RatingsList rating={category.rating} />
                                            {category.inStock ? (
                                                <p className="text-primary fs-5">${category.price}</p>
                                            ) : (
                                                <p className="text-danger fs-5">موجود نیست</p>
                                            )}
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                    <div className="controls-button">
                        <button className="prev-button"><GrPrevious/></button>
                        <button className="next-button"><GrNext/></button>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default ProductSlider;