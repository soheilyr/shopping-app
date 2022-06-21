import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Posts/Posts";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
const Router = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default Router;
