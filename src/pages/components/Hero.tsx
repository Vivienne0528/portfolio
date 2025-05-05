import Image from "next/image";
const Hero = () => {
    return (
        <>
            <section className="p-10 font-extralight text-sm md:text-xl">Hi! I’m Vivienne Gu 👋🏻</section>
            <div className="flex flex-col text-center justify-center items-center md:text-6xl text-5xl font-[serif] font-extrabold">
                <p className="text-[#FF8000] h-[3rem] md:h-[2.75rem]">
                    full stack developer
                </p>
                <p className="h-[3rem] md:h-[2.75rem]">
                    with a strong sense of
                </p>
                <p className="text-[#FF8000] h-[3rem] md:h-[2.75rem]">
                    ui/ux design
                </p>


            </div>
            <div className="pt-10 text-sm md:text-xl flex flex-col items-center text-center">
                <p>
                    Skilled in Frontend (React, Next.js, Tailwind CSS), Backend
                    (Node.js,Express),
                </p>
                <p>Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.</p>

            </div>

            <section className="p-10 flex flex-col md:flex-row gap-2 md:gap-10">
                <button className="btn btn-l md:btn-xl bg-[#FF8000] text-[#FFFFFF] text:sm md:text-xl rounded-[50px] w-40 md:w-50">
                    Contact me →
                </button>
                <button className="btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text:sm md:text-xl rounded-[50px] w-40 md:w-50 font-normal">
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
