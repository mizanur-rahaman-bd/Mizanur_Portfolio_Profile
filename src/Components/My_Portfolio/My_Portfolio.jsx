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
        style={{ ...style, display: "block", background: "#0d2238" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0d2238" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
          <h2>My Portfolio</h2>
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
              <div className="pr-[5px]">
                <Link to={"https://rp-las-les-vpn.vercel.app/"}>
                  <img src="images/vpn.png" alt="vpn" />
                </Link>
              </div>
              <div className="pr-[5px]">
                <Link
                  to={
                    "https://react-tailwind-project-yellow-kitchen.vercel.app/"
                  }
                >
                  <img src="images/Yello_kitchen_bannner.png" alt="vpn" />
                </Link>
              </div>
              <div className="pr-[5px]">
                <Link to={"https://react-project-counter.vercel.app/"}>
                  <img src="images/img_count.png" alt="count" />
                </Link>
              </div>
              <div className="">
                <Link
                  to={
                    "https://react-tailwind-project-hosting-company.vercel.app/"
                  }
                >
                  <img src="images/hosting_company.png" alt="hosting" />
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
