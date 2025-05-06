import React from "react";

const GetInTouch = () => {
    return (
        <section className="bg-[#FBD5A5] text-[#001E29] flex flex-col items-center gap-5 mt-25 p-4  w-full rounded-xl">
            <div className="text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]">
                Connect with me
            </div>
            <div className="text-[#FF8000] text-3xl md:text-4xl font-bold leading-[2.25rem] md:leading-[2.5rem]">
                Get in touch
            </div>
            <div className="flex flex-col items-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]">
                <p className="text-center">
                    {
                        "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below."
                    }
                </p>
                <div className="flex gap-4 h-10 w-full my-4">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="input bg-white text-black rounded-[5px] w-full"
                    />
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="input bg-white text-black rounded-[5px] w-full"
                    />
                </div>
                <textarea
                    className="textarea bg-white text-black rounded-[5px] w-full h-50"
                    placeholder="Enter your message"
                ></textarea>
            </div>

            <button className="btn btn-l md:btn-xl bg-[#FF8000] text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-80 md:w-50">
                Contact me →
            </button>
        </section>
    );
};

export default GetInTouch;
