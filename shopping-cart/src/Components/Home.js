import { CartState } from "../Context/Context";
const Home = () => {
  console.log(CartState());
  return (
    <div>
      <h2>Home component</h2>
    </div>
  );
};

export default Home;
