import Image from "next/image";

const Bottom = () => {
  return (
    <section className="flex flex-col items-center gap-2 pt-50 w-full">
      <div className="font-semibold text-2xl md:text-3xl leading-[2rem] md:leading-[2.25rem] cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
        Vivienne <span className="text-[#FF8000]">.</span>
      </div>
      <section className="flex gap-3 hover:scale-105 transition duration-200 ease-in-out">
        <Image src="/mailIcon.jpg" alt="mail Icon" width={32} height={23} />
        <div className="cursor-pointer text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ">
          vivienne0528.gu@gmail.com
        </div>
      </section>
      <div className="h-px bg-[#FBD5A5] mt-5 w-full" />

      <section className="flex items-center justify-between w-full mb-10 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
        <div className="cursor-pointer hidden sm:block hover:scale-105 transition duration-200 ease-in-out">
          vivienne0528.gu@gmail.com
        </div>
        <section className="sm:flex-row flex flex-col gap-8 w-full sm:w-auto mt-5 sm: justify-center items-center sm:justify-between">
          <div className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
            Github
          </div>
          <div className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
            Linkedin
          </div>
          <div className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
            Connect with me
          </div>
        </section>
      </section>
    </section>
  );
};

export default Bottom;
