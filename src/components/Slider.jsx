import { useState, useEffect } from "react";
import image1 from "../assets/images/s1.webp";
import image2 from "../assets/images/s2.webp";
import image3 from "../assets/images/s3.webp";
import image4 from "../assets/images/s4.webp";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  //go to previous slide manually
  const previousSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  //go to next slide manually
  const nextSlide = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  //automatic movement after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  //related data array
  const images = [
    {
      heading: "Monaro Colombo",
      des: "Come with us through the whimsical world of Monaro, where your personal paradise awaits.",
      view: image1,
      link: "Find Your Monaro",
    },
    {
      heading: "Monaro Colombo",
      des: "A personal tropical sanctuary set within the heart of the city",
      view: image3,
      link: "",
    },
    {
      heading: "Rooms & Suites",
      des: "Tastefully designed with the modern traveler in mind",
      view: image4,
      link: "Discover more",
    },
    {
      heading: "Shang Palace",
      des: "Celebrate the art of Chinese cuisine in the heart of Colombo",
      view: image2,
      link: "Dine with us",
    },
  ];

  return (
    //animated slider area
    <div className="group relative w-full h-[70vh] flex items-center overflow-y-hidden overflow-x-auto scrollbar-hide scroll-smooth mb-[30px] ">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative min-w-full h-full transition ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <img
            src={image.view}
            className={`w-full h-full object-cover `}
            alt={`Image ${index}`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <p className="text-center font-bold text-[40px]">{image.heading}</p>
            <p className="text-center text-[20px]">{image.des}</p>
          </div>

          {/*bottom link text area*/}
          {image.link && (
            <Link
              className="absolute bottom-[15%]  right-[20%]  transform  text-white flex   items-center py-0"
              to="/blankpage"
            >
              <div className="text-right text-[20px] flex">{image.link}</div>
              <FaChevronRight className="text-white flex text-[18px] pl-2" />
            </Link>
          )}
        </div>
      ))}

      {/*slider nav buttons*/}
      <div className="fixed top-3/7 -translate-y-1/2 hidden group-hover:flex justify-between px-[30px] w-[100vw]">
        <FaChevronLeft
          className="rounded-full p-[10px] bg-black bg-opacity-70 text-white text-[35px] cursor-pointer"
          onClick={previousSlide}
        />
        <FaChevronRight
          className="rounded-full p-[10px] bg-black bg-opacity-70 text-white text-[35px] cursor-pointer"
          onClick={nextSlide}
        />
      </div>

      {/*multiple input area*/}
      <div className="bg-white bg-opacity-50 absolute bottom-[3%] h-[70px]  left-[20%] right-[20%] flex justify-between items-center px-2">
        {/*section 1*/}
        <div className="bg-transparent flex-1 h-[70%] flex mx-1 relative">
          <div className="flex flex-1 items-center px-2 bg-white mr-[1px]">
            <MdDateRange className="text-[24px] mr-2" />
            <div>Jan 23,2024</div>
          </div>
          <div className="flex flex-1 items-center px-2 bg-white ml-[1px]">
            <div className="pl-10">Jan 24,2024</div>
          </div>

          <div className="bg-gray-200 rounded-2xl px-2 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            1 night
          </div>
        </div>

        {/*section 2*/}
        <div className="bg-white flex-1 h-[70%] flex mx-1 items-center px-2">
          <CiUser className="text-[24px] mr-2" />
          <div>1 Room, 1 Adult, 0 Children</div>
        </div>

        {/*section 3*/}
        <div className="bg-white flex-1 h-[70%] flex mx-1 items-center px-2">
          <CiShoppingTag className="text-[24px] mr-2" />
          <div className="text-gray-400">Special Code </div>
        </div>

        <div className="bg-[#77328b] mx-2 px-5 h-[70%]  flex justify-center items-center cursor-pointer">
          <div className="flex text-white font-medium text-[15px] ">Search</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
