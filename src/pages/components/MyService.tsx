import Image from "next/image";
const MyService = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50 w-full">
            <div className="text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]">
                What i offers
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
                My Service
            </div>
            <div className="">
                <p className="w-full max-w-150 text-center text-sm md:text-xl">
                    I am a frontend developer from California, USA with 10 years of
                    experience in multiple companies like Microsoft, Tesla and Apple.
                </p>
            </div>
            <section className="py-4 gap-2  lg:gap-10 md:5 w-full grid grid-cols-2 md:grid-cols-4">
                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ">
                        Web design
                    </div>
                    <p className="font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
                        Read more →{" "}
                    </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ">
                        Web design
                    </div>
                    <p className="font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
                        Read more →{" "}
                    </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ">
                        Web design
                    </div>
                    <p className="font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
                        Read more →{" "}
                    </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ">
                        Web design
                    </div>
                    <p className="font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
                        Read more →{" "}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default MyService;
