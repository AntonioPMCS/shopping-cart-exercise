import React, { useContext } from 'react'
import ShopContext from '../Context/ShopContext'
import { CartItem } from '../types/CartItem'

const CartCounter = () => {
  const {cartItems } = useContext(ShopContext);

  return (cartItems as CartItem[]).length

}

export default CartCounter
