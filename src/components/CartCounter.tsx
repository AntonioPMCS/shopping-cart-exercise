import ShopContext from '../Context/ShopContext'
import { CartItem } from '../types/CartItem'
import { useContext } from 'react';

const CartCounter = () => {
  const {cartItems } = useContext(ShopContext);

  return (cartItems as CartItem[]).length

}

export default CartCounter
