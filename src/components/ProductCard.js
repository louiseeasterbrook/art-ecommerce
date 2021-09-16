import "./ProductCard.css";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="card-container">
      <img src={image} alt="product" />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
