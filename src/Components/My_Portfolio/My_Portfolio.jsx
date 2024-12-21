import React from "react";
import "./My_Portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const My_Portfolio = () => {
    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <section className="my_portfolio">
        <div className="container">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="bg-black">
                <h3>1</h3>
              </div>
              <div className="bg-slate-600">
                <h3>2</h3>
              </div>
              <div className="bg-gray-400">
                <h3>3</h3>
              </div>
              <div className="bg-zinc-500">
                <h3>4</h3>
              </div>
              <div className="bg-neutral-500">
                <h3>5</h3>
              </div>
              <div className="bg-stone-600">
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default My_Portfolio;
