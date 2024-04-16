import "bootstrap/dist/css/bootstrap.css";
import "../components/Carousel.css";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface CaruselProps {
  images: { image: string; title: string }[];
}

function Carusel({ images }: CaruselProps) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: any = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="carousel_wrapper">
          <Row xs={2} md={2} lg={2} xl={2}>
            {images.map((image, index) => (
              <Col
                key={index}
                className={index === current ? "d-block" : "d-none"}
              >
                <div
                  className={
                    index === current
                      ? "carousel_card carousel_card-active"
                      : "carousel_card"
                  }
                >
                  <img className="card_image" src={image.image} alt="" />
                  <div className="card_overlay">
                    <h2 className="card_title">{image.title}</h2>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="carousel_arrow_left" onClick={slideLeft}>
            <FaCircleArrowLeft />
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            <FaCircleArrowRight />
          </div>
          <div className="carousel_pagination">
            {images.map((_, index) => (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carusel;
