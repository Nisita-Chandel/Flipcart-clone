import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-gray-300 pt-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

        {/* NAVIGATION */}
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">Navigation</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline">Cart</Link>
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">About</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">Help</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Cancellation & Returns</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* POLICY */}
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">Consumer Policy</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
