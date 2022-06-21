import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
const SingleProduct = () => {
  let { productId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    if (parseInt(productId) !== 1) {
      console.log("thats it");
      navigate("/products");
    }
  });
  console.log(productId);
  return <div>Single Product</div>;
};

export default SingleProduct;
