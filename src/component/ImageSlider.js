import React, {useState} from 'react';
import "./ImageSlider.css"
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length   = slides.length;
   
    const nextSlide = () =>{
        setCurrent(current=== length - 1 ? 0 : current +1)
    };
    const preSlide = () =>{
        setCurrent(current=== 0 ? length - 1 : current - 1);
    }

if (!Array.isArray(slides) || slides.length <=0){
    return null;
}

    return (
        <>
        <section className="slider">
        
            <FaArrowAltCircleLeft className="left_arrow" onClick= {preSlide} />
            <FaArrowAltCircleRight className="right_arrow" onClick= {nextSlide}  />
            {SliderData.map((slide, index) =>{
                return(
                <div className= {index=== current ? 'slide active' : 'slide'}
                key ={index}>
                    {index === current && ([

                        <div className="text">{slide.text} </div>,
                        <img src={slide.image} alt ="chanco" className="image" />,

                    ]
                    )}
                
                </div>) 
            })}
        </section>
        </>
    )
}

export default ImageSlider;
