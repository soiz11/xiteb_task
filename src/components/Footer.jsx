import image1 from "../assets/images/f1.png";
import image2 from "../assets/images/f2.png";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  const rows1 = [
    {
      topic: "Corporate information",
      link1: "Monaro Hotels & Resorts",
      link2: "John Keells Group",
    },
    {
      topic: "News and Awards",
      link1: "News",
      link2: "Awards",
    },
    {
      topic: "Data Privacy & Security Policy",
      link1: "Terms & Conditions",
      link2: "Privacy Statement",
    },
  ];

  const rows2 = [
    {
      topic: "Blogs",
      link1: "Cinnamon Ublog",
      link2: false,
    },
    {
      topic: "Corporate Governance",
      link1: "CSR",
      link2: false,
    },
    {
      topic: "Get In Touch",
      link1: "info@monarohotels.com",
      link2: "Hotel Contact Information",
    },
  ];

  return (
    <div className="bg-transparent  mt-[50px] ">
      <img src={image1} className="h-[100%] w-[100%] object-cover" />
      <div className="bg-transparent mx-[10%] my2:mx-[20%] my-[10px] flex flex-col">
        {/*first row */}

        <div className="flex my-8 ">
          {rows1.map((row1, index) => (
            <div className="flex flex-col flex-1" key={index}>
              <div className="text-[#77328b] my2-text[24px] mymax1:text-[28px] my1:text-[22px] text-[20px] italic mb-4">
                {row1.topic}
              </div>
              <div className="text-gray-500 pb-2">{row1.link1}</div>
              <div className="text-gray-500 pb-2">{row1.link2}</div>
            </div>
          ))}
        </div>

        {/*second row */}
        <div className="flex my-8">
          {rows2.map((row2, index) => (
            <div className="flex flex-col flex-1" key={index}>
              <div className="text-[#77328b] my2-text[24px] mymax1:text-[28px] my1:text-[22px] text-[20px] italic mb-4">
                {row2.topic}
              </div>
              <div className="text-gray-500 pb-2">{row2.link1}</div>
              {row2.link2 && (
                <div className="text-gray-500 pb-2">{row2.link2}</div>
              )}
            </div>
          ))}
        </div>

        {/*third row */}
        <div className="flex my-8">
          {/*left part */}
          <div className="flex flex-col w-[66.67%]">
            <div className="text-[#77328b] my2-text[24px] mymax1:text-[28px] my1:text-[22px] text-[20px] italic mb-4">
              Careers
            </div>
            <div className="text-gray-500 pb-2">Careers</div>
          </div>

          {/*right part */}
          <div className="flex flex-col w-[33.33%]">
            <div className="text-[#77328b] my2-text[24px] mymax1:text-[28px] my1:text-[22px] text-[20px] italic mb-4">
              Follow Us
            </div>
            <div className="text-gray-500 flex text-[20px]">
              <ImFacebook className="mr-3" />
              <FaTwitter className="mr-3" />
              <FaLinkedinIn className="mr-3" />
              <RiInstagramFill className="mr-3" />
              <FaYoutube className="mr-3" />
            </div>
          </div>
        </div>

        {/*forth row input arae */}
        <div className="flex mt-8 myspec2:mb-[-300px] my1:mb-[-200px]  mb-[-150px]">
          <div className="flex flex-col ">
            <div className="text-[#77328b] my2:text-[28px] text-[24px] italic mb-4">
              Get Monaro in your inbox
            </div>
            <div className="text-gray-500  flex border-[1px] border-gray-500 items-center w-[500px]">
              <input
                className="px-4 flex-1 outline-none"
                placeholder="Email Address"
                type="text"
              />
              <div>
                <FaChevronRight className="text-[60px] px-6 text-black hover:bg-[#d3d4e4]" />
              </div>
            </div>

            <div className="text-gray-500 pt-4 flex w-[500px] items-start">
              <input
                type="checkbox"
                className="rounded-full p-5 appearance-none border-[4px] border-[#77328b]  checked:border-[#d3d4e4] bg-[#e3e3e5] checked:bg-[#77328b]"
              />
              <div className="pl-4">
                By Checking this box, I consent to the processing of my Personal
                Data by Monaro for the purpose and within the Conditions set out
                in this form and the
                <span className="font-medium text-black pl-1">
                  Cinnamon Data Protection Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={image2} className="h-[100%] w-[100%] object-cover " />
    </div>
  );
};

export default Footer;
