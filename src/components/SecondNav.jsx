import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

const SecondNav = () => {
  //data list
  const navs = [
    {
      name: "ABOUT",
      symbol: true,
      topic1: "About The Hotel",
      links: [
        "Overwiew",
        "Explore Colombo",
        "Service & Facalitites",
        "Map & Directions",
      ],
    },
    {
      name: "ROOMS & SUITES",
      symbol: true,
      topic1: "Rooms",
      links: [
        "Deluxe Lake View",
        "Deluxe Ocean View",
        "Premier Balcony",
        "Premier Ocean View",
      ],
    },
    {
      name: "DINING",
      symbol: true,
      topic1: "Restaurants",
      links: [
        "Cake Temptation by Monaro Colombo",
        "Monaro Palace",
        "Capital Bar & Grill",
        "Tiki Bar",
        "Central",
        "Central cafe",
      ],
    },
    {
      name: "EXPERIENCE",
      symbol: true,
      topic1: "For Kids",
      links: ["Overview", "Adventure Zone", "Celebrations"],
    },
    {
      name: "EVENTS",
      symbol: true,
      topic1: "Meeting & Events",
      links: [
        "Overview",
        "Experience It",
        "Coworking Space",
        "Outside Catering",
        "Request for Proposal",
        "Book Meeting Room Online",
      ],
    },
    { name: "GALLERY", symbol: false, topic1: false, links: false },
    { name: "OFFERS", symbol: false, topic1: false, links: false },
    {
      name: "MORE",
      symbol: true,
      topic1: "Apartments",
      links: ["Learn More"],
    },
  ];

  const [hoveredNav, setHoveredNav] = useState(false);

  //mousein function
  const handleMouseIn = (nav) => {
    setHoveredNav(nav);
  };

  //mouseout function
  const handleMouseLeave = () => {
    setHoveredNav(false);
  };

  console.log(hoveredNav.name);

  return (
    <div>
      <div className="bg-[#333] h-[45px] text-white flex justify-between px-[20%]">
        {/*seperate links*/}
        <div className="flex items-center">
          {navs.map((nav, index) => (
            <div
              className={`flex items-center px-3 cursor-pointer group  h-[100%] ${
                nav.topic1
                  ? "group-hover:text-[#333] hover:bg-white"
                  : "group-hover:bg-[#333] group-hover:text-white"
              }`}
              key={index}
              onMouseEnter={() => handleMouseIn(nav)}
            >
              <div
                className={`flex pr-1 font-semibold text-[14px] ${
                  nav.topic1
                    ? "group-hover:text-[#333]"
                    : "group-hover:text-white"
                }`}
              >
                {nav.name}
              </div>
              {nav.symbol && (
                <IoChevronDown
                  className={`text-[18px] font-semibold ${
                    nav.topic1
                      ? "group-hover:text-[#333] transform group-hover:rotate-180"
                      : ""
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/*right corner button */}
        <Link
          className="flex font-semibold items-center cursor-pointers"
          to="/balnkpage"
        >
          <div className="flex  border-white border-[1px] px-3 py-1">
            FIND A HOTEL
          </div>
        </Link>
      </div>

      {/*drop down area*/}
      {hoveredNav && hoveredNav.topic1 && (
        <div
          className="bg-white  h-[fit-content] left-0 right-0 absolute z-10 px-[20%] pb-4"
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-[18px] font-semibold pt-6 pb-2">
            {hoveredNav.topic1}
          </div>
          {hoveredNav && hoveredNav.topic1 && (
            <div className="flex py-1 flex-col text-[16px]">
              {hoveredNav.links.map((link, linkIndex) => (
                <div key={linkIndex} className=" hover:text-yellow-600">
                  {link}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SecondNav;
