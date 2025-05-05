const MyLatestWork = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50">
            <div className="text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]">My portfolio</div>
            <div className="text-[#FF8000] text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold">
                My latest work
            </div>

            <p className="w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                Welcome to my web development portfolio! Explore a collection of
                projects showcasing my expertise in front-end development.
            </p>


            <button className="btn btn-l md:btn-xl bg-[#FF8000] text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-80 md:w-50 mt-50">
                Contact me →
            </button>
        </section>
    );
};

export default MyLatestWork;
