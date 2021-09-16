import "./Section2.css";

//images
import Person from "../images/extra5.jpeg";

const Section2 = () => {
  return (
    <div className="s2-container">
      <div className="s2-inner">
        <div className="s2img-holder">
          <img src={Person} alt="Carla" className="profile-img" />
        </div>
        <div className="s2-text">
          <h2>Hi There!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
