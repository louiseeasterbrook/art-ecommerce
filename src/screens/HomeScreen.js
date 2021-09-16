import "./HomeScreen.css";

//components
import NavBar from "../components/NavBar";
import SlideShow from "../components/SlideShow";

//sections
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default HomeScreen;
