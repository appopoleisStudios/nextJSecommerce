import React from 'react';
import Slider from 'react-slick';

const TextCarousel = () => {
  const sliderRef = React.useRef(null);

  const goTo = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    customPaging: (i) => (
      <div className="slick-dot">
        {/* This is the clickable element now */}
        <button
          type="button"
          className="carousel-radio h-2 w-2"
          onClick={() => goTo(i)}
        >
          {/* Visually hidden label for accessibility */}
          <span className="sr-only">Go to slide {i + 1}</span>
        </button>
      </div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center items-center space-x-2">
        {dots}
      </div>
    ),
    prevArrow: (
      <button className="slick-arrow slick-prev ">
        <i className="fas fa-chevron-left text-2xl"></i>
      </button>
    ),
    nextArrow: (
      <button className="slick-arrow slick-next">
        <i className="fas fa-chevron-right text-2xl"></i>
      </button>
    )
  };

  const texts = ["The Chloe Collection", "The Project Jackl", "Your Text Here"];

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 h-screen"> {/* Main container */}
      {/* Left image */}
      <div className="lg:w-1/5 h-full lg:h-auto flex items-center justify-center">
        <img src="./images/screen1-r.png" alt="Left Side" className="object-cover h-64 lg:h-auto" />
      </div>

      {/* Carousel */}
      <div className="lg:w-3/5 flex justify-center items-center">
        <div className="w-full max-w-screen-md">
          <Slider ref={sliderRef} {...settings}>
            {texts.map((text, index) => (
              <div key={index} className="text-center p-4">
                <h2 className="text-4xl lg:text-6xl font-semibold text-gray-800">{text}</h2>
                {/* SHOP NOW button */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  SHOP NOW
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right image */}
      <div className="lg:w-1/5 h-full lg:h-auto flex items-center justify-center">
        <img src="./images/img2.png" alt="Right Side" className="object-cover h-64 lg:h-auto" />
      </div>
    </div>
  );
};

export default TextCarousel;
