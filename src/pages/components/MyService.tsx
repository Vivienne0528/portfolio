import Image from "next/image";
const MyService = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50 w-full">
            <div className="text-xl md:text-2xl">What i offers</div>
            <div className="text-[#FF8000] text-3xl md:text-4xl font-bold">My Service</div>
            <div className="">
                <p className="w-full max-w-150 text-center text-sm md:text-xl">
                    I am a frontend developer from California, USA with 10 years of
                    experience in multiple companies like Microsoft, Tesla and Apple.
                </p>
            </div>
            <section className="py-4 gap-1 md:gap-10 w-full items-center justify-between grid grid-cols-2 md:grid-cols-4">
                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text:xl md:text-2xl">Web design</div>
                    <p className="font-light text-sm md:text-xl">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-sm md:text-xl">Read more → </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text:xl md:text-2xl">Web design</div>
                    <p className="font-light text-sm md:text-xl">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-sm md:text-xl">Read more → </div>
                </div>                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text:xl md:text-2xl">Web design</div>
                    <p className="font-light text-sm md:text-xl">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-sm md:text-xl">Read more → </div>
                </div>                <div className="bg-[#FBD5A5] text-[#001E29] w-full h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text:xl md:text-2xl">Web design</div>
                    <p className="font-light text-sm md:text-xl">
                        Web development is the process of building, programming...
                    </p>
                    <div className="text-sm md:text-xl">Read more → </div>
                </div>
            </section>
        </section>
    );
};

export default MyService;
