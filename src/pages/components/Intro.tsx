import Image from "next/image"
const Intro = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-25">
            <div>Introduction</div>
            <div className="text-[#FF8000] text-3xl font-[serif]">About me</div>
            <section className="flex gap-10 h-75 items-start">
                <Image src="/businessCard.png" alt="business card" width={500} height={500} />
                <section>
                    <p className="font-extralight">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <section className="flex gap-10 py-4">
                        <div className="bg-[#808E94] w-45 h-45 flex flex-col items-start justify-between p-4 rounded-xl">
                            <Image src="/lightIcon.jpg" alt="business card" width={30} height={30} />
                            <section className="font-bold">
                                <div>HTML, CSS, </div>
                                <div>JavaScript,</div>
                                <div>React Js, Next Js</div>
                            </section>
                            <div className="font-extralight">Languages</div>
                        </div>
                        <div className="bg-[#808E94] w-45 h-45 flex flex-col items-start justify-between p-4 rounded-xl">
                            <Image src="/lightIcon.jpg" alt="business card" width={30} height={30} />
                            <section className="font-bold">
                                <div>HTML, CSS, </div>
                                <div>JavaScript,</div>
                                <div>React Js, Next Js</div>
                            </section>
                            <div className="font-extralight">Languages</div>
                        </div>
                        <div className="bg-[#808E94] w-45 h-45 flex flex-col items-start justify-between p-4 rounded-xl">
                            <Image src="/lightIcon.jpg" alt="business card" width={30} height={30} />
                            <section className="font-bold">
                                <div>HTML, CSS, </div>
                                <div>JavaScript,</div>
                                <div>React Js, Next Js</div>
                            </section>
                            <div className="font-extralight">Languages</div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-2">
                        <div>Tools i use</div>
                        <section className="flex gap-5">
                            <div className="w-16 h-16 border-1 rounded-xl flex items-center justify-center">
                                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
                            </div>
                            <div className="w-16 h-16 border-1 rounded-xl flex items-center justify-center">
                                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
                            </div>
                            <div className="w-16 h-16 border-1 rounded-xl flex items-center justify-center">
                                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
                            </div>
                            <div className="w-16 h-16 border-1 rounded-xl flex items-center justify-center">
                                <Image src="/vsIcon.jpg" alt="VS icon" width={30} height={30} />
                            </div>
                        </section>

                    </section>


                </section>
            </section>

        </section>
    )
}

export default Intro