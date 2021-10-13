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
  const [move, setMove] = useState("transform 0.3s");

  const updateIndex = (newIndex) => {
    setMove("transform 0.3s");
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    //if at last image loop back to first image with no transition
    if (newIndex === React.Children.count(children) - 1) {
      console.log("here");
      setTimeout(() => {
        console.log("second");
        setMove("none");
        setActiveIndex(0);
      }, 400);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%`,
          transition: `${move}`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
