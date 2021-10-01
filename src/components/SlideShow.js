import "./SlideShow.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Loading from "../components/Loading";

//actions
import { getSlideShow } from "../redux/actions/slideShowActions";

const SlideShow = () => {
  const dispatch = useDispatch();
  const getImages = useSelector((state) => state.getSSImages);
  const { images, loading, error } = getImages;

  useEffect(() => {
    dispatch(getSlideShow());
  }, [dispatch]);

  const [current, setCurrent] = useState(0);
  const length = images.length;
  let timer;

  // responsible for resetting image every 5 seconds
  useEffect(() => {
    timer = setTimeout(
      () => setCurrent((current) => (current === length - 1 ? 0 : current + 1)),
      5500
    );
  }, [current]);

  //function used by dot pickers at bottom of slideshow
  const pickSlide = (slide) => {
    setCurrent(slide);
    //clear settimeout once current slide has changed
    clearTimeout(timer);
  };

  //check for array and length
  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <div className="slideShow-outer">
      <div className="slideShow-container">
        {loading ? (
          <Loading />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {images.map((el, index) => (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img className="img" src={el.url} alt={el.name} />
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <div className="dot-holder">
        {images.map((el, index) => (
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
