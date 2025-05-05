const MyLatestWork = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50">
            <div className="text-xl md:text-2xl">My portfolio</div>
            <div className="text-[#FF8000] text-3xl md:text-4xl font-bold">My latest work</div>
            <div className="">
                <p className="w-full max-w-150 text-center text-sm md:text-xl">
                    Welcome to my web development portfolio! Explore a collection of
                    projects showcasing my expertise in front-end development.
                </p>
            </div>

            <button className="btn btn-l md:btn-xl bg-[#FF8000] text-[#FFFFFF] text:sm md:text-xl rounded-[50px] w-40 md:w-50 mt-50">
                Contact me →
            </button>
        </section>
    );
};

export default MyLatestWork;
