const MyLatestWork = () => {
    return (
        <section className="flex flex-col items-center gap-5 pt-50">
            <div className="text-2xl">My portfolio</div>
            <div className="text-[#FF8000] text-4xl font-bold">My latest work</div>
            <div className="flex flex-col items-center">
                <p>
                    Welcome to my web development portfolio! Explore a collection of
                    projects showcasing
                </p>
                <p>my expertise in front-end development.</p>
            </div>

            <button className="cursor-pointer border-1 rounded-[50px] w-[160px] h-[48px] mt-50">
                Show more →
            </button>
        </section>
    );
};

export default MyLatestWork;
