import { useLocation } from "react-router-dom"
import "../styles/Product.css"
import Button from "../components/Button.tsx"
import { FaCartArrowDown  } from "react-icons/fa";
import { useContext } from "react";
import ShopContext from "../Context/ShopContext.ts";

const Product = () => {
  const location = useLocation();
  const product = location.state?.product;
  const {addToCart} = useContext(ShopContext)

  if (!product) {
    return "Product not found";
  }
  
  return (
    <div className="product-container">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <div className="buy-row">
          <p id="product-details-price">R${product.price}</p>
          <Button onClick={() => addToCart(product)}>
          {"Add  "}  
              <FaCartArrowDown  />  
          </Button>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default Product
