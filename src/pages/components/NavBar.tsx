import { useContext } from "react";
import { UseContext } from "../utils/UseContextProvider";
import Mode from "./Mode";

const NavBar = () => {
  const { isScrolled, isMenuOpened } = useContext(UseContext);

  return (
    <section
      className={`w-full fixed left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out
      ${(isScrolled && !isMenuOpened)
          ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20"
          : "bg-transparent border-transparent"
        }
      `}
    >
      <div className="relative max-w-[1280px] min-w-[375px] flex justify-between items-start m-auto xl:px-20 lg:px-10 py-3">
        <div className="font-semibold text-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in-out md:pl-2 pl-4">
          Vivienne <span className="text-[#FF8000]">.</span>
        </div>
        <ul
          className={`p-2 flex w-full lg:w-[600px]
                ${isMenuOpened
              ? "absolute lg:static top-0 left-0 h-screen text-4xl flex-col justify-center items-start gap-5 bg-black/40  backdrop-blur-2xl shadow-lg border border-white/20  "
              : "hidden  flex-row border-1 rounded-full shadow-sm hover:shadow-xl justify-between w-[600px] text-xl lg:flex"
            }
      `}
        >
          <li className="cursor-pointer w-full hover:bg-[#FBD5A5] rounded-full text-center hover:text-[#FF8000] hover:scale-105 hover:font-bold transition duration-200 ease-in-out">
            Home
          </li>
          <li className="cursor-pointer  w-full hover:bg-[#FBD5A5] rounded-full text-center hover:text-[#FF8000] hover:scale-105 hover:font-bold transition duration-200 ease-in-out">
            About me
          </li>
          <li className="cursor-pointer  w-full hover:bg-[#FBD5A5] rounded-full text-center hover:text-[#FF8000] hover:scale-105 hover:font-bold transition duration-200 ease-in-out">
            My work
          </li>
          <li className="cursor-pointer w-full hover:bg-[#FBD5A5] rounded-full text-center hover:text-[#FF8000] hover:scale-105 hover:font-bold transition duration-200 ease-in-out">
            Contact me
          </li>
        </ul>
        <Mode />
      </div>
    </section>
  );
};

export default NavBar;
