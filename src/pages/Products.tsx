import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import ShopContext from '../Context/ShopContext';

const Products = () => {
  const {products} = useContext(ShopContext);
  if (products.length === 0) return <p>Loading...</p>
  //if (error) return <p>Error: {error}</p>

  return (
    <>
      {products.map((product, index) => {
        return <Link 
                  key={index} 
                  to={`/product/${product.id}`}
                  state={{product}}
                >
                  <ProductCard key={index} {...product} />
                </Link>
                
      })}
    </>
  )
}

export default Products
