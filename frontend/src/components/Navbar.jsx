import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SastaFlipkart</h1>

      <ul className="flex gap-6 font-medium">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/products" className="hover:text-gray-200">Products</Link></li>
        <li><Link to="/cart" className="hover:text-gray-200">Cart</Link></li>
        <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
