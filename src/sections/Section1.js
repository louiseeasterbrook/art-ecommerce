import "./Section1.css";
import ProductCard from "../components/ProductCard";

const Section1 = ({ products }) => {
  console.log(products);
  return (
    <div className="s1-container">
      <h2 className="s1-title">Products</h2>
      <div className="product-container">
        {products.map((el, i) => (
          <ProductCard key={i} image={el.image} name={el.name} price="59.99" />
        ))}
      </div>
    </div>
  );
};

export default Section1;
