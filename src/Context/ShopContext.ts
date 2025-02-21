import { createContext } from "react";
import { Product } from '../types/Product';
import { CartItem } from "../types/CartItem";

interface ShopContextType {
  products: Product[];
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItem: CartItem) => void;
}


const ShopContext = createContext<ShopContextType>({
    // Default context
    products: [],
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

export default ShopContext