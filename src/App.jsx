import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Homepage, ProductDetail, Products } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
