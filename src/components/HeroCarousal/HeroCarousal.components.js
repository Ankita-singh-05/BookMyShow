import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroCarousal = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };

const images = ["https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
 "https://images.unsplash.com/photo-1598476106394-585fbda433c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
 "https://images.unsplash.com/photo-1584295632440-16db84c1f69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
 "https://images.unsplash.com/photo-1626298671769-6d38b161234b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
 "https://images.unsplash.com/photo-1626298671769-6d38b161234b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
];

    return (
        <>
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-20 h-80">
                        <img src={image} alt="hero-image" className="w-full h-full" />
                    </div>
                ))}
            </HeroSlider>
        </>
    )
};

export default HeroCarousal;

