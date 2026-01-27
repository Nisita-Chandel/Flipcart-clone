import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Approutes";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />

      <Navbar />
      <AppRoutes />
      <Footer/>
      <ToastContainer position="top-right" autoClose={2000} />

    </BrowserRouter>
  );
}

export default App;
