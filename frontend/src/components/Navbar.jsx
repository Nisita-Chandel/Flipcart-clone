import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#172337] text-white px-10 py-4 flex justify-between items-center shadow-lg">
      
      {/* LOGO */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition duration-300"
      >
        SastaFlipkart
      </Link>

      {/* NAV LINKS */}
      <ul className="flex gap-6 font-medium">
        <li>
          <Link
            to="/"
            className="px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Cart
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
