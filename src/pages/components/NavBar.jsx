import { useContext } from "react";
import { UseContext } from "../utils/UseContextProvider";
import Mode from "./Mode";
import { useRefStore } from "../utils/useRefStore";

const NavBar = () => {
  const { isScrolled, isMenuOpened, activeSection, scrollToSection } =
    useContext(UseContext);
  const { heroRef, projectRef, contactRef, aboutRef } = useContext(useRefStore);

  return (
    <section
      className={`w-full fixed left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out
      ${
        isScrolled && !isMenuOpened
          ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20"
          : "bg-transparent border-transparent"
      }
      `}
    >
      <div className="relative max-w-[1280px] min-w-[375px] flex justify-between items-start m-auto xl:px-20 lg:px-10 py-3">
        <div
          onClick={() => scrollToSection("hero", heroRef)}
          className="font-semibold text-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in-out md:pl-2 pl-4"
        >
          Vivienne <span className="text-[#FF8000]">.</span>
        </div>
        <ul
          className={`p-2 flex w-full lg:w-[600px]
                ${
                  isMenuOpened
                    ? "absolute lg:static top-0 left-0 h-screen text-4xl flex-col justify-center items-start gap-5 bg-black/40  backdrop-blur-2xl shadow-lg border border-white/20  "
                    : "hidden  flex-row border-1 rounded-full shadow-sm hover:shadow-xl justify-between w-[600px] text-xl lg:flex"
                }
      `}
        >
          <li
            onClick={() => scrollToSection("hero", heroRef)}
            className={`cursor-pointer w-full rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${
            activeSection === "hero"
              ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
              : ""
          }`}
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about", aboutRef)}
            className={`cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${
            activeSection === "about"
              ? "bg-[#FBD5A5] font-bold text-[#FF8000] "
              : ""
          }`}
          >
            About me
          </li>
          <li
            onClick={() => scrollToSection("project", projectRef)}
            className={`cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${
            activeSection === "project"
              ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
              : ""
          }`}
          >
            My work
          </li>
          <li
            onClick={() => scrollToSection("contact", contactRef)}
            className={`cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${
            activeSection === "contact"
              ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
              : ""
          }`}
          >
            Contact me
          </li>
        </ul>
        <Mode />
      </div>
    </section>
  );
};

export default NavBar;
