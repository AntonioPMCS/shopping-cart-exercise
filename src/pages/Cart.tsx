import { useContext } from "react"
import ShopContext from "../Context/ShopContext"
import CartItemComponent from "../components/CartItemComponent"
import "../styles/Cart.css"

const Cart = () => {
  const {cartItems} = useContext(ShopContext)

  return (
    <div className="cart-container">
      <h2 className="cart-title">My cart</h2>

      <div className="shipping-info">
        <h3>Shipping</h3>
        <p><strong>Shipping costs R$30,99</strong></p>
        <p className="shipping-note">You're R$258.12 away from free shipping</p>
      </div>

      {cartItems.map( (cartItem) => {
        return <CartItemComponent key={cartItem.position} {...cartItem} />
      })}
    
    </div>
    
  )
}

export default Cart
