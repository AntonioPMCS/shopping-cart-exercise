  import { useState, ReactNode, useEffect } from 'react';
  import { Product } from '../types/Product';
  import { CartItem } from '../types/CartItem';
  import { useProducts } from '../hooks/useProducts';
  import ShopContext from './ShopContext';


const ShopProvider = ({children}: {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [counter, setCounter] = useState(0);

    const addToCart = (product: Product) => {
        setCounter(prev => prev +1);
        setCartItems((prev: CartItem[]) => 
                        [...prev, 
                        {position: counter+1, product}
                        ]
                    );
    };

    const removeFromCart = (cartItem: CartItem) => {
      setCartItems ( (prev) => 
        prev.filter( (keptItem: CartItem) => keptItem.position != cartItem.position )
    )}

    const {products: fetchedProducts, loading, error} = useProducts();

    useEffect(() => { 
      if (!loading && fetchedProducts.length > 0) {
        setProducts(fetchedProducts);
      }
    }, [fetchedProducts, loading])

    return (
      <ShopContext.Provider value={{ products, cartItems, addToCart, removeFromCart}}>
        {children}
      </ShopContext.Provider>
    )
  }

  export default ShopProvider