import "./Carousel.css";
import React, { useState, useEffect } from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="img" src={children} alt="hello" />
    </div>
  );
};

const Carousel = ({ children, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [move, setMove] = useState("transform 0.5s");

  const updateIndex = (newIndex) => {
    setMove("transform 0.5s");
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    //if at last image loop back to first image with no transition
    if (newIndex === React.Children.count(children) - 1) {
      //set index back to 0 (first image) after .5s sliding transition
      setTimeout(() => {
        //set css transition to none to return to first image
        setMove("none");
        setActiveIndex(0);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 6000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel">
      <div className="center-img">
        <div
          className="inner"
          style={{
            transform: `translateX(-${activeIndex * 100}vw`,
            transition: `${move}`,
          }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100vw" });
          })}
        </div>
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          if (index === React.Children.count(children) - 1) {
            return;
          }
          return (
            <div
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
