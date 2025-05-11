import { useContext } from "react";
import { useRefStore } from "../utils/useRefStore";
import { useState } from "react";

const slides = ["/figma.png", "/socially.png", "/pizza.png", "/portfolio.png"];

const MyLatestWork = () => {
  const { projectRef, contactRef } = useContext(useRefStore);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scroll to project");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  return (
    <section
      ref={projectRef}
      className="flex flex-col items-center gap-5 pt-30"
    >
      <div className="text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]">
        My portfolio
      </div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold">
        My latest work
      </div>

      <p className="w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
        Welcome to my full-stack web development portfolio! Explore a collection of projects showcasing my expertise in both front-end and back-end development, from intuitive user interfaces to robust server-side solutions.
      </p>

      <section className="carousel w-full">
        <div className="carousel-item relative w-full">
          <img src={slides[currentIndex]} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prevSlide} className="btn btn-circle">❮</button>
            <button onClick={nextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
      </section>


      <button
        onClick={scrollToContact}
        className=" btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 mt-10"
      >
        Contact me →
      </button>
    </section>
  );
};

export default MyLatestWork;
