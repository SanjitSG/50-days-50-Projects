import { CartState } from "../Context/Context";

import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import { useContext } from "react";
const Home = () => {
  const {
    state: { products },
    productState: { byStock, quickDelivery, byRating },
  } = CartState();
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
