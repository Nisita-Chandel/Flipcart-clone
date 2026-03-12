import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Shipping from "../pages/Shipping";
import Security from "../pages/Security";
import Payment from "../pages/Payment";
import Returns from "../pages/Returns";
import Faq from "../pages/Faq";
import Favorite from "../pages/favorite";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<ProductDetails />} />
      <Route path="/careers" element={<Career />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/security" element={<Security/>}/>
      <Route path="/payments" element={<Payment/>}/>
      <Route path="/returns" element={<Returns/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
    </Routes>
  );
};

export default AppRoutes;