import Banner from "../components/Home/Banner";
import Clients from "../components/Home/Clients";
import ProductLines from "../components/Home/ProductLines";
import Questions from "../components/Home/Questions";
import Speciality from "../components/Home/Speciality";
import Standard from "../components/Home/Standard";

function Home() {
  return (
    <>
      <Banner />
      <Speciality />
      <Standard />
      <ProductLines />
      <Questions />
      <Clients />
    </>
  );
}

export default Home;
