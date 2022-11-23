import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/

// Images
import twedenBackyardBefore from "../Images/tweden-backyard-before.jpg";
import twedenBackyardAfter from "../Images/tweden-backyard-after.jpg";

export const Home = () => {
  return (
    <div className="Home1">
      <h1>Construction Management Group</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 CarouselImg"
            src={twedenBackyardBefore}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Before</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 CarouselImg"
            src={twedenBackyardAfter}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>After</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
