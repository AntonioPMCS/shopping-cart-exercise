import React, { useContext } from 'react'
import ShopContext from '../Context/ShopContext';
import { CartItem } from '../types/CartItem';


const CartItemComponent: React.FC<CartItem> = ({product, position}) => {
  const {removeFromCart} = useContext(ShopContext)

  return (
    <div className="cart-item">
        <img src={product.image} alt={product.title} className="product-image" />

        <div className="product-details">
          <h4>{product.title}</h4>
        </div>

        <p className="product-price">R${product.price}</p>

        <button onClick ={() => {removeFromCart({product:product, position:position})}} className="delete-btn">🗑️</button>
      </div>
  )
}

export default CartItemComponent
