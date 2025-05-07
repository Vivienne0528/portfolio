const MyLatestWork = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50">
            <div className="text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]">
                My portfolio
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold">
                My latest work
            </div>

            <p className="w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                Welcome to my web development portfolio! Explore a collection of
                projects showcasing my expertise in front-end development.
            </p>

            <button className=" btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 mt-50">
                Contact me →
            </button>
        </section>
    );
};

export default MyLatestWork;
