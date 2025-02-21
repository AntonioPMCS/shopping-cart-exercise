import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Products from './pages/Products.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Product from './pages/Product.tsx'
import Cart from './pages/Cart.tsx'
import ShopProvider from './Context/ShopProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Products /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>,
);
