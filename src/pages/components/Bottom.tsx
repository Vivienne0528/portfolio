import Image from "next/image";

const Bottom = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50 w-full">
            <div className="font-semibold text-3xl cursor-pointer">
                Vivienne <span className="text-[#FF8000]">.</span>
            </div>
            <section className="flex gap-3">
                <Image src="/mailIcon.jpg" alt="mail Icon" width={32} height={23} />
                <div className="cursor-pointer">vivienne0528.gu@gmail.com</div>
            </section>
            <div className="h-px bg-[#FBD5A5] mt-5 mb-1 w-full" />

            <section className="flex items-center justify-between w-full ">
                <div className="cursor-pointer">vivienne0528.gu@gmail.com</div>
                <section className="flex gap-8">
                    <div className="cursor-pointer">Github</div>
                    <div className="cursor-pointer">Linkedin</div>
                    <div className="cursor-pointer">Connect with me</div>
                </section>
            </section>
        </section>
    );
};

export default Bottom;
