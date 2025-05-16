import Image from "next/image";
import { useContext } from "react";
import { UseContext } from "../pages/utils/UseContextProvider";
import { useRefStore } from "../hooks/useRefStore";

const Bottom = () => {
  const { scrollToSection } = useContext(UseContext);
  const { heroRef } = useContext(useRefStore);
  return (
    <section className="flex flex-col items-center gap-2 pt-10 w-full">
      <div
        onClick={() => scrollToSection("hero", heroRef)}
        className="font-semibold text-2xl md:text-3xl leading-[2rem] md:leading-[2.25rem] cursor-pointer hover:scale-105 transition duration-200 ease-in-out"
      >
        Vivienne <span className="text-[#FF8000]">.</span>
      </div>
      <section className="flex gap-3 hover:scale-105 transition duration-200 ease-in-out">
        <Image src="/mailIcon.jpg" alt="mail Icon" width={32} height={23} />
        <a
          href="mailto:vivienne0528.gu@gmail.com"
          className="cursor-pointer text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] "
        >
          vivienne0528.gu@gmail.com
        </a>
      </section>
      <div className="h-px bg-[#FBD5A5] mt-5 w-full" />

      <section className="flex items-center justify-between w-full mb-3 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
        <a
          href="mailto:vivienne0528.gu@gmail.com"
          className="cursor-pointer hidden sm:block hover:scale-105 transition duration-200 ease-in-out"
        >
          vivienne0528.gu@gmail.com
        </a>
        <section className="sm:flex-row flex flex-col gap-5 sm:gap-12 w-full sm:w-auto mt-3 sm: justify-center items-center sm:justify-between">
          <a
            href="https://github.com/Vivienne0528"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/vivienne-gu-b691992b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out"
          >
            Linkedin
          </a>
        </section>
      </section>
    </section>
  );
};

export default Bottom;
