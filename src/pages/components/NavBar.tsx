import Mode from "./Mode"

const NavBar = () => {
    return (
        <section className="w-full flex justify-between items-center pb-25">
            <div className="font-semibold text-3xl">Vivienne <span className="text-[#FF8000]">.</span></div>
            <ul className="text-xl flex justify-between p-2 border-1 rounded-full w-[600px]">
                <li className="ml-3 font-bold">Home</li>
                <li>About me</li>
                <li>My work</li>
                <li className="mr-3">Contact me</li>
            </ul>
            <Mode />
        </section>
    )
}

export default NavBar