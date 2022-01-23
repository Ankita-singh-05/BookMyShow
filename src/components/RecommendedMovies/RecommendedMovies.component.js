import React from "react";
import Slider from "react-slick";

const RecommendedMovies = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };

    const RecommendedImages = [
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-tqnhagnlpc-portrait.jpg",
        alt: "Pushpa",
        title: "Pushpa The Rise - Part 01",
        subtitle: "Action/Thriller"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-tqnhagnlpc-portrait.jpg",
        alt: "Pushpa",
        title: "Pushpa The Rise - Part 01",
        subtitle: "Action/Thriller"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-tqnhagnlpc-portrait.jpg",
        alt: "Pushpa",
        title: "Pushpa The Rise - Part 01",
        subtitle: "Action/Thriller"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-tqnhagnlpc-portrait.jpg",
        alt: "Pushpa",
        title: "Pushpa The Rise - Part 01",
        subtitle: "Action/Thriller"
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0NDBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-tqnhagnlpc-portrait.jpg",
        alt: "Pushpa",
        title: "Pushpa The Rise - Part 01",
        subtitle: "Action/Thriller"
    }
    ];

    return (
        <>
        <div className="w-full h-full flex flex-col items-start py-4 px-5">
            <h3 className="text-white text-xl font-bold">Recommended Movies</h3>
        </div>
            <Slider {...settings} >
            {props.RecommendedImages.map((image) => (
                <Poster {...image} isDark/>
            ))}
            </Slider>
        </>
    );

};

export default RecommendedMovies;