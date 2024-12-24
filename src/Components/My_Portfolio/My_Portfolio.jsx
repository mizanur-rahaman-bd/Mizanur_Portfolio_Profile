import React from "react";
import "./My_Portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="my_portfolio">
        <div className="container">
          <div className="slide_div slider-container">
            <Slider {...settings}>
              <div className="pr-[5px]">
                <Link to={"https://react-project-eb-tan-cosmetic.vercel.app/"}>
                  <img src="images/ebtan.png" alt="ebtan" />
                </Link>
              </div>
              <div className="pr-[5px]">
                <Link to={"https://furniture-html-css.vercel.app/"}>
                  <img src="images/furniture.png" alt="furniture" />
                </Link>
              </div>
              <div className="pr-[5px]">
                <Link to={"https://candied-ice-cream.vercel.app/"}>
                  <img src="images/icecream.png" alt="icecream" />
                </Link>
              </div>
              <div className="pr-[5px]">
                <Link to={"https://react-project-product-filter.vercel.app/"}>
                  <img src="images/productfilter.png" alt="filter" />
                </Link>
              </div>
              <div className="">
                <Link to={"https://rp-las-les-vpn.vercel.app/"}>
                  <img src="images/vpn.png" alt="vpn" />
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default My_Portfolio;
