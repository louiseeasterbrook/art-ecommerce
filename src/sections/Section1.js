import "./Section1.css";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const Section1 = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="s1-container">
      <h2 className="s1-title">Products</h2>
      <div className="product-container">
        {loading ? (
          <h2>Loading..</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((el) => (
            <ProductCard
              key={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              id={el._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Section1;
