import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
      style={{
        left: "0",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "2rem",
        zIndex: 2,
        color: "#c18f59",
      }}
    >
      &#10094;
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
      style={{
        right: "0",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "2rem",
        zIndex: 2,
        color: "#c18f59",
      }}
    >
      &#10095;
    </div>
  );
};

const Quotes: React.FC = () => {
  const quoteText = `“Pudding croissant cake candy canes fruitcake sweet roll pastry gummies sugar plum. Tart pastry danish soufflé donut bear claw chocolate cake.”`;

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      id="Quotes"
      className="fh5co-quotes"
      style={{ position: "relative" }}
    >
      <div className="site-container">
        <Slider {...settings} className="about-me-slider">
          {[1, 2].map((_, i) => (
            <div key={i} style={{ padding: "2rem", textAlign: "center" }}>
              <h2 className="universal-h2 universal-h2-bckg">
                What People Are Saying {i + 1}
              </h2>
              <p
                style={{
                  fontStyle: "italic",
                  maxWidth: "700px",
                  margin: "1rem auto",
                }}
              >
                {quoteText}
              </p>
              <img
                src="/images/quotes.svg"
                alt="quote icon"
                style={{ height: "35px", marginBottom: "1rem" }}
              />
              <h4>David Dixon</h4>
              <p>Reader</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Quotes;
