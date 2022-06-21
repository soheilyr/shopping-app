import { useState } from "react";
import { useNavigate } from "react-router";
import OrderCart from "../../UI/OrderCart/OrderCart";
import Modal from "../Modal/Modal";
const Orderinfo = (props) => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    props.setShow(false);
    navigate("/checkout");
  };
  return (
    <Modal show={props.show} hide={props.hideModal} title="Orders">
      <div>
        <div className="p-0 m-0 overflow-y-scroll custom-scrollbar absolute w-full top-10 h-4/5 right-0">
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
          <OrderCart>
            <div className="flex justify-between items-center text-base">
              <div>
                <p>john smith</p>
              </div>
              <div className="flex gap-2">
                <span>Amount : </span> <span>2</span>
              </div>
              <div className="flex gap-2">
                <button>
                  <i className="fal fa-plus"></i>
                </button>
                <button>
                  <i className="fal fa-minus"></i>
                </button>
              </div>
            </div>
          </OrderCart>
        </div>
        <div className="flex justify-center">
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
