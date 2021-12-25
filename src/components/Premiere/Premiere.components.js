import React from "react";
import Slider from "react-slick";

//Poster
import Poster from "../Poster/poster.components";

const Premiere = () => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };

    const PremiereImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English",
            isDark: false
        }
    ];

    return (
        <>
            <Slider {...settings} >
            {PremiereImages.map((image) => (
                <Poster {...image} />
            ))}
            </Slider>
        </>
    );
};

export default Premiere;