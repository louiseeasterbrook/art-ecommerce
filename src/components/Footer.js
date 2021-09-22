import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-outer">
      <div className="footer-inner">
        <div className="links-container">
          <ul className="links">
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Delivery and Returns</a>
            </li>
          </ul>

          <FontAwesomeIcon
            icon={faInstagram}
            className="insta-icon icon"
            onClick={() => window.open("https://instagram.com", "_blank")}
          />
          <p>&copy; Carla & Fig Art 2021</p>
        </div>
        <div className="form-container">
          <h3>Join our Mailing List</h3>
          <form className="subscribe-form">
            <input className="form-input" placeholder="Email Address" />
            <button className="form-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
