import React from "react";
import Slider from "react-slick";

//Poster
import Poster from "../Poster/poster.components";

const Premiere = (props) => {
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
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
            alt: "Venom",
            title: "Venom:Let There Be Carnage",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg",
            alt: "Fast and Furious",
            title: "Fast and Furious 9",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301465-sgxdqbdnaf-portrait.jpg",
            alt: "Fear Of Rain",
            title: "Fear Of Rain",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00319467-cxfazlcfkg-portrait.jpg",
            alt: "Let Them All Talk",
            title: "Let Them All Talk",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314669-dwsmcgtrzb-portrait.jpg",
            alt: "Riders of Justice",
            title: "Riders of Justice",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00319464-pbswgdphmw-portrait.jpg",
            alt: "8-Bit Christmas",
            title: "8-Bit Christmas",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00314637-yrkzrqyeee-portrait.jpg",
            alt: "Long Weekend",
            title: "Long Weekend",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316067-zntjqvmxuf-portrait.jpg",
            alt: "The Investigation",
            title: "The Investigation",
            subtitle: "Danish"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00020507-hvddmzbcer-portrait.jpg",
            alt: "SON of GOD",
            title: "SON OF GOD",
            subtitle: "English"
        }
    ];

    return (
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-white text-sm">Brand new releases every Friday</p>
        </div>
            <Slider {...settings} >
            {props.PremiereImages.map((image) => (
                <Poster {...image} isDark/>
            ))}
            </Slider>
        </>
    );
};

export default Premiere;