import { Link } from "react-router-dom";
import '../styles/MyAppNav.css';
import { FaShoppingCart } from "react-icons/fa";
import CartCounter from "./CartCounter";

const MyAppNav = () => {
  return (
    <nav>
      <Link to="/">Shop</Link>
      <Link to="/cart"><CartCounter /><FaShoppingCart/></Link>
    </nav>
  )
}

export default MyAppNav
