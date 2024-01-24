import image1 from "../assets/images/c1.webp";
import image2 from "../assets/images/c2.webp";
import image3 from "../assets/images/c3.webp";
import image4 from "../assets/images/c4.webp";
import image5 from "../assets/images/c5.webp";
import image6 from "../assets/images/c6.webp";

const StartArea = () => {
  const cards = [
    {
      des: "Join Hilton Honors & Get Up to 3,000 Points",
      img: image1,
    },
    {
      des: "Advance Purchase Discount - save up to 17%",
      img: image2,
    },
    {
      des: "Multiply Your Points",
      img: image3,
    },
    {
      des: "Free Bonus Points at new hotels",
      img: image4,
    },
    {
      des: "Park & Stay",
      img: image5,
    },
    {
      des: "Experience the Stay",
      img: image6,
    },
  ];
  return (
    <div className="bg-transparent mx-[20%] my-[70px]">
      <div className="text-[35px] text-[#252776] font-bold">
        Start the new year with a new stay
      </div>
      <div className="text-[18px] py-2">
        Choose from our exclusive offers, and get more from your next stay.
      </div>
      <div className="h-fit w-[100%] bg-transparent grid grid-cols-3 gap-4 mt-2 relative">
        {cards.map((card, index) => (
          <div key={index} className="relative group">
            <img src={card.img} className="w-[100%] h-[100%]" />
            <div className=" group-hover:bottom-1/3  group-hover:py-0 transition-all duration-500 ease-in-out absolute bottom-[15px] left-1/2 transform -translate-x-1/2 z-10 text-white w-[100%] text-center font-semibold text-[26px] px-2 ">
              {card.des}
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent via-opacity-20 w-full h-4/5"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartArea;
