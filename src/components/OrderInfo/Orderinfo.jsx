import { useNavigate } from "react-router";
import OrderCart from "../../UI/OrderCart/OrderCart";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { plusOrder, minusOrder } from "../../Store/OrderSlice/orderSlice";
import { useDispatch } from "react-redux/es/exports";
const Orderinfo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCheckOut = () => {
    props.setShow(false);
    navigate("/checkout");
  };
  let orderInfo = useSelector((state) => state.orders.counterList);
  orderInfo = Object.values(orderInfo);
  orderInfo = orderInfo.map((orderlist, index) => {
    return (
      <OrderCart key={index}>
        <div className="flex justify-between items-center text-base">
          <div>
            <p>{orderlist.name}</p>
          </div>
          <div className="flex gap-2">
            <span>Amountt : </span> <span>{orderlist.amount}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => dispatch(plusOrder(orderlist.id))}>
              <i className="fal fa-plus"></i>
            </button>
            <button onClick={() => dispatch(minusOrder(orderlist.id))}>
              <i className="fal fa-minus"></i>
            </button>
          </div>
        </div>
      </OrderCart>
    );
  });
  // console.log("this is the store :", orderStore);
  return (
    <Modal show={props.show} hide={props.hideModal} title="Orders">
      <div>
        <div className="p-0 m-0 overflow-y-scroll custom-scrollbar absolute w-full top-10 h-4/5 right-0">
          {orderInfo}
          <button
            onClick={handleCheckOut}
            className="absolute bottom-3 bg-slate-500 text-base px-3 py-1 hover:bg-transparent text-white border transition-all hover:text-slate-500 rounded text-center"
          >
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Orderinfo;
