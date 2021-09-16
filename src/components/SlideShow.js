import "./SlideShow.css";
import { Images } from "../Images";

const SlideShow = () => {
  console.log(Images);
  return (
    <div className="slideShow-container">
      {/* {Images.map((el) => {
        <img className="img" src={el.image} alt="hello" />;
      })} */}
    </div>
  );
};

export default SlideShow;
