import Basket from "../Basket/Basket";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="text-3xl p-4 flex justify-around bg-slate-900 text-white items-center">
      <Link to="/" className="font-bold">
        LOGO
      </Link>
      <nav>
        <ul className="flex gap-10 items-center">
          <li className="text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/aboutus">About us</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/contactus">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <Basket />
    </header>
  );
};

export default Header;
