import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Layout from './pages/Layout';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { ShopProvider } from './Context/ShopProvider';

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout> 
      </Router>
   )
}

export default App
