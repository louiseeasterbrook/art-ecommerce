import "./Section2.css";

const Section2 = () => {
  return (
    <div className="s2-container">
      <div className="s2-inner">
        <div className="s2img-holder">
          <img
            src={
              "https://images.pexels.com/photos/6694310/pexels-photo-6694310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            alt="Carla"
            className="profile-img"
          />
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
