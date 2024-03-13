import React from "react";
import { Carousel } from "react-bootstrap";
import logo from "../../assets/Logo.png";
import styles from "./Carousel.module.css";

const MyCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 " src={logo} alt="First slide" />
        {/* <Carousel.Caption className={styles.CarCaption}>
          <h3>First Slide</h3>
          <p>This is the first slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={logo} alt="Second slide" />
        {/* <Carousel.Caption className={styles.CarCaption}>
          <h3>Second Slide</h3>
          <p>This is the second slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={logo} alt="Third slide" />
        {/* <Carousel.Caption className={styles.CarCaption}>
          <h3>Third Slide</h3>
          <p>This is the third slide</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
