import Image from "next/image";
const Hero = () => {
    return (
        <>
            <section className="p-10 font-extralight text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                Hi! I’m Vivienne Gu 👋🏻
            </section>
            <div className="flex flex-col text-center justify-center items-center md:text-6xl text-5xl font-[serif] font-extrabold">
                <p className="text-[#FF8000] leading-[3rem] md:leading-[2.75rem]">
                    full stack developer
                </p>
                <p className="leading-[3rem] md:leading-[2.75rem]">
                    with a strong sense of
                </p>
                <p className="text-[#FF8000] leading-[3rem] md:leading-[2.75rem]">
                    ui/ux design
                </p>
            </div>
            <div className="pt-10 text-xl items-center text-center">
                <p className="leading-[1.75rem] max-w-200">
                    Skilled in Frontend (React, Next.js, Tailwind CSS), Backend
                    (Node.js,Express), Database (MySQL, MongoDB), DevOps (Git, Docker),
                    and UI Design.
                </p>
            </div>

            <section className="p-10 flex flex-col md:flex-row gap-2 md:gap-10">
                <button className="btn btn-l md:btn-xl bg-[#FF8000] text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-80 md:w-50">
                    Contact me →
                </button>
                <button className="btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-80 md:w-50 font-normal">
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
