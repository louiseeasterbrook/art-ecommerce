import "./Section1.css";
import ProductCard from "../components/ProductCard";

//images
import P1 from "../images/product-1.jpeg";

const Section1 = () => {
  return (
    <div className="s1-container">
      <h2 className="s1-title">Products</h2>
      <div className="product-container">
        <ProductCard image={P1} name="Statue Head" price="59.99" />
        <ProductCard image={P1} name="Statue Head" price="59.99" />
        <ProductCard image={P1} name="Statue Head" price="59.99" />
      </div>
    </div>
  );
};

export default Section1;
