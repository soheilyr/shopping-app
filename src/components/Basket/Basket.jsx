import { useState } from "react";
import Orderinfo from "../OrderInfo/Orderinfo";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Basket.css";
const Basket = () => {
  const orderCount = useSelector((state) => state.orders.counterOrder);
  console.log("this is the state : ", orderCount);
  const [show, setShow] = useState(false);
  const hideModal = () => {
    setShow(false);
  };
  const showOrderInfo = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="relative number-basket">
      <a onClick={showOrderInfo}>
        <i className="far fa-shopping-basket"></i>
        <span className="absolute top-[-10px] left-[-18px] text-xs border-2 rounded-xl flex justify-center items-center w-fit h-6 p-[0.4rem] text-center">
          <i>{orderCount}</i>
        </span>
      </a>
      <Orderinfo show={show} setShow={setShow} hideModal={hideModal} />
    </div>
  );
};

export default Basket;
