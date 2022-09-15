import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { GrPrevious, GrNext } from "react-icons/gr";
import RatingsList from './RatingsList';

const ProductSlider = ({productsCategory, title}) => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between p-3">
                <h2 className="display-6">{title}</h2>
                <Link to={"/products"}>
                    <span>View All</span>
                </Link>
            </div>
            <div className="mx-3" >
                <Swiper
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
                                <SwiperSlide key={uuidv4()}>
                                    <Link to={category.link}>
                                        <div className="text-center">
                                            <h5 className="h5 text-dark">{category.title}</h5>
                                            <small className="text-black-50">by {category.brand}</small>
                                        </div>
                                        <div className="img-container">
                                            <img src={category.image} className="img-fluid" alt={category.name} />
                                        </div>
                                        <div className="d-flex flex-column align-items-center justify-content-between">
                                            <RatingsList rating={category.rating} />
                                            {category.inStock ? (
                                                <p className="text-primary fs-5">${category.price}</p>
                                            ) : (
                                                <p className="text-danger fs-5">Unavailable</p>
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

export default ProductSlider