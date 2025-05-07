import Image from "next/image";
import SplitText from "../utils/SplitText";

const Hero = () => {
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };
    return (
        <>

            <SplitText
                text="Hi! I’m Vivienne Gu ヅ"
                className="pt-60 pb-30 font-extralight text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]"
                delay={150}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="flex flex-col text-center justify-center items-center md:text-6xl text-5xl font-[serif] font-extrabold">
                <p className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.75rem] md:leading-[3rem]">
                    full stack developer
                </p>
                <p className="leading-[2.75rem] md:leading-[3rem]">
                    with a strong sense of
                </p>
                <p className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.75rem] md:leading-[3rem]">
                    ui/ux design
                </p>
            </div>
            <div className="pt-20 text-xl items-center text-center">
                <p className="leading-[1.75rem] max-w-200">
                    Skilled in Frontend (React, Next.js, Tailwind CSS), Backend
                    (Node.js,Express), Database (MySQL, MongoDB), DevOps (Git, Docker),
                    and UI Design.
                </p>
            </div>

            <section className="py-12 flex flex-col md:flex-row gap-2 md:gap-10 w-full justify-center">
                <button className="btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out">
                    Contact me →
                </button>
                <button className="btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 font-normal hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out">
                    My Resume
                    <Image
                        src="/download.jpg"
                        alt="Download Icon"
                        width={20}
                        height={20}
                    />
                </button>
            </section>
        </>
    );
};
export default Hero;
