import Image from "next/image";
import { useRefStore } from "../hooks/useRefStore";
import { useContext } from "react";
const Intro = () => {
  const { aboutRef } = useContext(useRefStore);
  return (
    <section ref={aboutRef} className="flex flex-col items-center gap-5 pt-25">
      <div className="text-xl leading-[1.75rem] md:leading-[2rem] md:text-2xl">
        Introduction
      </div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl leading-[2.25rem] md:text-4xl md:leading-[2.5rem] mb-5 font-bold">
        About me
      </div>
      <section className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center md:items-start justify-center">
        <img
          src="/businessCard.png"
          alt="business card"
          className="w-full h-80 object-cover object-[0%_40%] md:w-[40%] md:h-auto lg:w-85 rounded-xl"
        />

        <section className="flex flex-col">
          <p className="font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
            I&apos;m a curious builder who turns ideas into interactive web
            experiences. With a year of full-stack experience using Next.js,
            React, and more, I love crafting clean, scalable code that feels as
            smooth as it looks. Always learning, always coding — let&apos;s
            create something awesome.
          </p>

          <section className="flex justify-between gap-4 lg:gap-10 py-4 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
            <div className="bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]">
              <Image
                src="/darkIcon.jpg"
                alt="dark icon"
                width={30}
                height={30}
              />
              <section className=" font-bold">
                <div>HTML, CSS, JavaScript, React Js, Next Js </div>
              </section>
              <div className="font-extralight">Languages</div>
            </div>
            <div className=" bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]">
              <Image
                src="/educationIcon.jpg"
                alt="education icon"
                width={30}
                height={30}
              />
              <section className="font-bold">
                <div>Master&apos;s degree in IT from Uni of Melbourne </div>
              </section>
              <div className="font-extralight">Education</div>
            </div>
            <div className="bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]">
              <Image
                src="/projectsIcon.jpg"
                alt="projects Icon"
                width={30}
                height={30}
              />
              <section className="font-bold">
                <div>Built more than 5 projects</div>
              </section>
              <div className="font-extralight">Projects</div>
            </div>
          </section>
          {/* <section className="flex flex-col gap-2">
            <div className="text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] text-center md:text-start">
              Tools i use
            </div>
            <section className="flex gap-5 justify-center md:justify-start">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
              </div>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
              </div>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
              </div>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
              </div>
            </section>
          </section> */}
        </section>
      </section>
    </section>
  );
};

export default Intro;
