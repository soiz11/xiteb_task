import image1 from "../assets/images/o1.webp";
import image2 from "../assets/images/o2.webp";
import image3 from "../assets/images/o3.webp";

const Offers = () => {
  const cards = [
    {
      des: "Join Monaro Honors & Get Up to 3,000 Points",
      img: image1,
      tag: "Member Exclusive",
      h1: "Rooms & Suites",
      date: false,
      h2: "Monaro Circle Exclusive Member Rate with Breakfast",
      h3: "Exclusive Member Rate with Breakfast for Monaro Circle member.",
      price: "LKR 57,574.80 ",
    },
    {
      des: "Advance Purchase Discount - save up to 17%",
      img: image2,
      tag: "Member Exclusive",
      h1: "Rooms & Suites",
      date: false,
      h2: "Monaro Circle Exclusive Member Rate",
      h3: "Exclusive Member Rate for Shangri-La Circle member.",
      price: "LKR 51,177.60",
    },
    {
      des: "Multiply Your Points",
      img: image3,
      tag: false,
      h1: "Dining",
      date: "03 Jan 2024 - 31 Dec 2024",
      h2: "Weekend Brunch at Central",
      h3: "A global gastronomic journey awaits you with our Weekend brunch at Central.",
      price: "",
    },
  ];
  return (
    <div className="bg-transparent mx-[20%] my-[70px]">
      <div className="text-center text-[50px] text-[#77328b] font-thin pb-[30px]">
        Offers
      </div>
      <div className="h-[550px] w-[100%] bg-transparent grid grid-cols-3 gap-4 mt-2 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group shadow-lg hover:shadow-2xl"
          >
            <img src={card.img} className="w-[100%] h-[40%] object-cover" />

            {/*tag heading */}
            {card.tag && (
              <div className=" absolute top-0 right-0 transform translate-y-1/2 z-10 bg-white bg-opacity-80  text-center font-semibold text-[14px] px-2 py-1 rounded-l-full shadow-lg">
                {card.tag}
              </div>
            )}

            {/*h1 */}
            <div className="font-semibold text-center p-2">{card.h1}</div>

            {/*date area*/}
            {card.date ? (
              <div className="text-center text-[12px] px-2">{card.date}</div>
            ) : (
              <div className="bg-white text-[12px] text-white">dummy</div>
            )}

            {/*h2 */}
            {card.h2.length < 40 ? (
              <>
                <div className="font-semibold text-center px-4 pt-2 text-[17px]">
                  {card.h2}
                </div>
                <div className="font-semibold text-center px-4  pt-0 pb-2 text-[17px] text-white">
                  dummy
                </div>
              </>
            ) : (
              <div className="font-semibold text-center px-4 py-2 text-[17px]">
                {card.h2}
              </div>
            )}

            {/*h3 */}
            <div className="text-center py-2 px-4 text-[13px] text-gray-500">
              {card.h3}
            </div>

            {/*pricing */}
            {card.price && (
              <div className="text-center pt-16 pb-2 px-4 text-[15px]  absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[80%]">
                From
                <span className="font-bold">{" " + card.price + " "}</span>
                Average Per Night
              </div>
            )}

            {/*button*/}
            <div className="text-center py-2 px-4 text-[15px]  absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[40%] border-2 border-[#77328b] font-bold text-[#77328b]">
              View Details
            </div>

            {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent via-opacity-20 w-full h-4/5"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
