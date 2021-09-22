import "./SlideShow.css";
import { Images } from "../Images";
import { useState, useEffect } from "react";

const SlideShow = () => {
  const [current, setCurrent] = useState(0);
  const length = Images.length;

  //function used by dot pickers at bottom of slideshow
  const pickSlide = (slide) => {
    setCurrent(slide);
  };

  //responsible for resetting image every 5 seconds
  useEffect(() => {
    setTimeout(
      () => setCurrent((current) => (current === length - 1 ? 0 : current + 1)),
      5500
    );
    return () => {};
  }, [current]);

  //check for array and length
  if (!Array.isArray(Images) || length <= 0) {
    return null;
  }

  return (
    <div className="slideShow-outer">
      <div className="slideShow-container">
        {Images.map((el, index) => (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="img" src={el.image} alt="hello" />
            )}
          </div>
        ))}
      </div>
      <div className="dot-holder">
        {Images.map((el, index) => (
          <div
            className={index === current ? "dot-active" : "dot"}
            onClick={() => pickSlide(index)}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
