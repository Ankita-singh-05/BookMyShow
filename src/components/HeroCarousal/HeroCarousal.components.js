import React from "react";
import HeroSlider from "react-slick";

//Components
import { PrevArrow, NextArrow } from "./Arrows.components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "160px",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

const images = ["https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
 "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
 "https://media.istockphoto.com/photos/asian-chinese-mixed-age-group-audience-watching-movie-sitting-in-a-picture-id1334584173?b=1&k=20&m=1334584173&s=170667a&w=0&h=KRYZOvFdEDkVmi_A2UyJnBWFXJsQ0gwiyfItopsp4ac=",
 "https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ=",
 "https://media.istockphoto.com/photos/friends-in-the-cinema-picture-id1180701083?b=1&k=20&m=1180701083&s=170667a&w=0&h=i4RjlXSocbLiBpruz5KQY4wUlHZ9WX8bAVIMGf1qclw=",
 "https://media.istockphoto.com/photos/people-watching-movie-on-the-rooftop-terrace-at-sunset-picture-id1327329947?b=1&k=20&m=1327329947&s=170667a&w=0&h=bebFCYw709rXRIHuWzsx-oP19ie0Q1taFR6BI6pluw4=",
 "https://images.unsplash.com/photo-1548095115-45697e222a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
];

    return (
        <>
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-20 h-96 px2 py-3">
                        <img src={image} alt="hero-image" className="rounded-md w-full h-full " />
                    </div>
                ))}
            </HeroSlider>
        </>
    );
};

export default HeroCarousal;

