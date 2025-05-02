import Image from "next/image"
const Hero = () => {
    return (
        <>
            <section className="p-10 font-extralight">Hi! I’m Vivienne Gu 👋🏻</section>

            <p className="text-[#FF8000] text-5xl">full stack developer</p>
            <p className="text-5xl">with a strong sense of</p>
            <p className="text-[#FF8000] text-5xl">ui/ux design</p>
            <p className="pt-10">Skilled in Frontend (React, Next.js, Tailwind CSS), Backend (Node.js,Express),</p>
            <p>Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.</p>


            <section className="p-10">
                <button className="btn btn-xl bg-[#FF8000] text-[#FFFFFF] text-xl rounded-[50px] w-50 mr-10">Contact me →</button>
                <button className="btn btn-xl text-[#FF8000] bg-[#FFFFFF] text-xl rounded-[50px] w-50 font-light">My Resume <Image src='/download.jpg' alt="Download Icon" width={20} height={20} /></button>
            </section>

        </>
    )
}
export default Hero