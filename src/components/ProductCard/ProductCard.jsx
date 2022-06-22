import { addOrder } from "../../Store/OrderSlice/orderSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  console.log(props.add);
  return (
    <div className=" shadow rounded transition-all hover:shadow-lg">
      <div>
        <img className="w-[372px] h-[372px] m-auto" src={props.img} />
      </div>
      {/* card body */}
      <div className="px-3 py-4">
        {/* name and price of product */}
        <div className="flex justify-between my-1">
          <p>{props.name}</p>
          <p>
            <strong>{props.price} $ </strong>
          </p>
        </div>
        {/* add to cart btn */}
        <div className="text-center">
          <button
            className="text-gray-800 rounded border transition-all border-x-gray-800 px-3 mt-2 py-1 hover:text-white hover:bg-gray-800"
            onClick={() =>
              dispatch(addOrder({ id: props.id, name: props.name }))
            }
          >
            <span> Add To Cart </span>{" "}
            <span>
              <i className="fal fa-shopping-cart"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
