import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import SecondNav from "../components/SecondNav";
import Slider from "../components/Slider";
import StartArea from "../components/StartArea";
import UpperNav from "../components/UpperNav";

const Page = () => {
  return (
    <>
      <UpperNav />
      <SecondNav />
      <Slider />
      <Destinations />
      <StartArea />
      <Offers />
      <Footer />
    </>
  );
};

export default Page;
