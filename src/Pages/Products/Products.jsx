import { products } from "../../data/products";
import Container from "../../UI/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
const Products = () => {
  const productsList = products.map((product, index) => {
    return (
      <div key={index} className="basis-full  md:basis-1/2 lg:basis-1/4 p-3">
        <ProductCard
          img={product.img}
          price={product.price}
          name={product.name}
          id={product.id}
        />
      </div>
    );
  });
  console.log(productsList);
  return (
    <Container>
      <h1 className="font-semibold text-4xl text-center mt-20 border-b-2 pb-2">
        Products
      </h1>
      <div className="flex flex-wrap my-10">{productsList}</div>
    </Container>
  );
};

export default Products;
