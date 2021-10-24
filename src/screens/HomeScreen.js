import "./HomeScreen.css";

//components
import Carousel, { CarouselItem } from "../components/Carousel";

//sections
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";

//slideshow images
import ss1 from "../images/ss1.jpeg";
import ss2 from "../images/ss2.jpeg";
import ss3 from "../images/ss3.jpeg";
import ss4 from "../images/ss4.jpeg";

const HomeScreen = () => {
  return (
    <div>
      <Carousel>
        <CarouselItem>{ss1}</CarouselItem>
        <CarouselItem>{ss2}</CarouselItem>
        <CarouselItem>{ss3}</CarouselItem>
        <CarouselItem>{ss4}</CarouselItem>
        <CarouselItem>{ss1}</CarouselItem>
      </Carousel>

      <Section1 />
      <Section2 />
    </div>
  );
};

export default HomeScreen;
