import Destinations from "../components/Destinations";
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
    </>
  );
};

export default Page;
