import Image from "next/image";
const MyService = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50 w-full">
            <div className="text-2xl">What i offers</div>
            <div className="text-[#FF8000] text-4xl font-bold">My Service</div>
            <div className="flex flex-col items-center">
                <p>
                    I am a frontend developer from California, USA with 10 years of
                    experience{" "}
                </p>
                <p>in multiple companies like Microsoft, Tesla and Apple.</p>
            </div>
            <section className="flex py-4 gap-10 w-full items-center justify-between">
                <div className="bg-[#FBD5A5] text-[#001E29] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-2xl">Web design</div>
                    <p className="font-light">Web development is the process of building, programming...</p>
                    <div>Read more → </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-2xl">Web design</div>
                    <p className="font-light">Web development is the process of building, programming...</p>
                    <div>Read more → </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-2xl">Web design</div>
                    <p className="font-light">Web development is the process of building, programming...</p>
                    <div>Read more → </div>
                </div>
                <div className="bg-[#FBD5A5] text-[#001E29] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl">
                    <Image src="/earth.jpg" alt="earth Icon" width={40} height={40} />
                    <div className="font-medium text-2xl">Web design</div>
                    <p className="font-light">Web development is the process of building, programming...</p>
                    <div>Read more → </div>
                </div>

            </section>
        </section>
    );
};

export default MyService;
