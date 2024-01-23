import { RxVercelLogo } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { ImMobile2 } from "react-icons/im";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

const UpperNav = () => {
  const navs = [
    { name: "Sign In", symbol: "user" },
    { name: "Join Now", symbol: "no" },
    { name: "Find Reservation", symbol: "no" },
    { name: "English", symbol: "world" },
    { name: "LKR", symbol: "no" },
    { name: null, symbol: "mobile" },
  ];

  const renderNavIcon = (symbol) => {
    switch (symbol) {
      case "user":
        return <CiUser className="text-[20px] flex ml-2" />;
      case "mobile":
        return <ImMobile2 className="text-[20px] flex ml-2" />;
      case "world":
        return <TfiWorld className="text-[20px] flex ml-2" />;
      default:
        return <div className="w-[0]" />;
    }
  };

  return (
    <div className="px-[20%] bg-white h-[60px] flex justify-between items-center">
      {/*logo corner*/}
      <div className="flex items-center">
        <RxVercelLogo className="text-yellow-600 text-[30px] font-bold mr-3" />
        <div className="font-semibold text-[24px]">
          M<span className="text-yellow-600">o</span>nar
          <span className="text-yellow-600">o</span>
        </div>
      </div>

      {/*right link area*/}
      <div className="flex items-center">
        {navs.map((nav, index) => (
          <Link
            className="flex items-center cursor-pointer"
            key={index}
            to="/blankpage"
          >
            {renderNavIcon(nav.symbol)}
            {nav.name && (
              <div className="text-14px font-semibold flex  py-0  border-r-[1px] px-3 border-black ">
                {nav.name}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpperNav;
