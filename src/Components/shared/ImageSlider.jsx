import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({sliderImg}) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlideHandle = () => {
        if (slideIndex !== sliderImg.length) setSlideIndex(slideIndex + 1);
        else if (slideIndex === sliderImg.length) setSlideIndex(1);
    }

    const prevSlideHandle = () => {
        if (slideIndex !== 1) setSlideIndex(slideIndex - 1);
        else if (slideIndex === 1) setSlideIndex(sliderImg.length);
    }

    const handleSelecteIMG = (index) => setSlideIndex(index);

    return (
        <div className="position-relative">
            {sliderImg &&
                sliderImg.map((productImg, index) => (
                    <div key={uuidv4()} className={`slide${index + 1 === slideIndex ? " active" : ""}`}>
                        <div>
                            <img src={productImg} className="img-fluid" alt="imgBrand" />
                        </div>
                    </div>
                ))
            }
            <div className="controls-button">
                <button className="prev-button" onClick={nextSlideHandle}><IoIosArrowBack color="#fff"/></button>
                <button className="next-button" onClick={prevSlideHandle}><IoIosArrowForward color="#fff"/></button>
            </div>
            <div className="d-flex align-items-center justify-content-center bg-light bg-gradient p-4 rounded-3 shadow">
                {sliderImg &&
                    sliderImg.map((productImg, index) => (
                        <div 
                            key={uuidv4()} 
                            className={`slide-dot${index + 1 === slideIndex ? " border border-2 border-primary rounded" : ""}`}
                            onClick={() => handleSelecteIMG(index + 1)}
                            >
                            <img src={productImg} className="img-fluid" alt="imgBrand" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageSlider;