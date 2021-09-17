import "./HomeScreen.css";

//components

import SlideShow from "../components/SlideShow";

//sections
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";

const HomeScreen = ({ products }) => {
  return (
    <div>
      <SlideShow />
      <Section1 products={products} />
      <Section2 />
    </div>
  );
};

export default HomeScreen;
