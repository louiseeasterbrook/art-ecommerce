import "./HomeScreen.css";
import { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { getSlideShow } from "../redux/actions/slideShowActions";

//components
import Carousel, { CarouselItem } from "../components/Carousel";
import Loading from "../components/Loading";

//sections
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getImages = useSelector((state) => state.getSSImages);

  const { images, loading1, error1 } = getImages;

  useEffect(() => {
    dispatch(getSlideShow());
  }, [dispatch]);

  // console.log("images from redux= ", getImages.images[0].url);

  return (
    <div>
      {loading1 ? (
        <Loading />
      ) : error1 ? (
        <h2>{error1}</h2>
      ) : (
        <>
          {console.log(getImages.images[0].url)}
          {images.map((el, i) => (
            <p key={i}>{el.url}</p>
          ))}
        </>
        // <Carousel>
        //   // <CarouselItem>{images[0].url}</CarouselItem>
        //   // <CarouselItem>{images[1].url}</CarouselItem>
        //   // <CarouselItem>{images[2].url}</CarouselItem>
        //   // <CarouselItem>{images[3].url}</CarouselItem>
        //   // <CarouselItem>{images[0].url}</CarouselItem>

        // </Carousel>
      )}
      <Section1 />
      <Section2 />
    </div>
  );
};

export default HomeScreen;
