import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";

const Destinations = () => {
  const [topBarclicked, setTopBarClicked] = useState(false);
  const [name, setName] = useState("Monaro Dhonveli Maldives");
  const [image, setImage] = useState(image7);
  const [description, setDescription] = useState(
    "Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters."
  );
  const handleMenuClick = (name, description, image) => {
    setName(name);
    setDescription(description);
    setImage(image);
    setTopBarClicked(!topBarclicked);
    console.log(topBarclicked);
  };

  const handleTopBarClick = () => {
    setTopBarClicked(!topBarclicked);
    console.log(topBarclicked);
  };

  const outerClick = () => {
    setTopBarClicked(false);
  };

  const places = [
    {
      name: "Monaro Life",
      des: "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options.",
      img: image1,
    },
    {
      name: "Monaro Grand Colombo",
      des: "Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!",
      img: image2,
    },
    {
      name: "Monaro Lakeside Colombo",
      des: "Spend time with those who matter by a calm, rippling lake at Monaro Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.",
      img: image3,
    },
    {
      name: "Monaro Red Colombo",
      des: "South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!",
      img: image4,
    },
    {
      name: "Monaro Bentota Beach",
      des: "Choose Monaro Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!",
      img: image5,
    },
    {
      name: "Monaro Bey Beruwala",
      des: "Welcome to a food-lover's most sprawling haven. Here's where our different restaurants become the setting for your most indulgent dreams.",
      img: image6,
    },
    {
      name: "Monaro Dhonveli Maldives",
      des: "Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.",
      img: image7,
    },
  ];
  return (
    <div className="flex flex-col items-center w-[100%] h-fit bg-tarnsparent mb-12">
      {/*heading*/}
      <div
        className="flex w-fit py-3 px-5 h-fit bg-transparent text-[50px] font-light italic mb-5"
        onClick={outerClick}
      >
        Our Destinations
      </div>

      {/*drop down*/}
      <div
        className="text-[20px] text-[#252776] italic font-normal w-[30%] border-2 border-gray-400 flex items-center justify-between py-2 px-4 mb-5"
        onClick={handleTopBarClick}
      >
        <div>{name}</div>
        <IoChevronDown className="text-[20px] text-[#252776]" />
      </div>

      {/*list view*/}
      <div className="relative bg-orange-500 flex  w-[30%]">
        <div
          className={
            topBarclicked
              ? "border-1 border-gray-400 bg-white border-[1px] h-[200px] w-[100%] absolute z-10 top-0 transform  my-2 overflow-y-scroll"
              : "hidden"
          }
        >
          {places.map((place, index) => (
            <div
              onClick={() => handleMenuClick(place.name, place.des, place.img)}
              className="mx-5 py-3 border-gray-400  border-b-[1px] flex italic text-[#252776] text-[18px]"
              key={index}
            >
              {place.name}
            </div>
          ))}
        </div>
      </div>

      {/*image area */}
      <div
        className="bg-green-500 w-[40%] h-[550px]  mt-10 relative flex"
        onClick={outerClick}
      >
        <img src={image} className="w-[100%] h-[100%] object-cover" />
        <div className="h-fit w-[350px] absolute bg-white shadow-2xl top-1/2 right-0 transform translate-x-2/3 -translate-y-1/2 py-[10%]">
          <div className="bg-tarnsparent mx-[10%]  h-[100%]">
            <div className="text-[32px] text-[#77328b] italic font-thin leading-9">
              {name}
            </div>
            <div className="mt-10">{description}</div>
            <div className="mt-5 w-[60%] text-white italic p-4 bg-[#252776] text-center">
              Discover More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
