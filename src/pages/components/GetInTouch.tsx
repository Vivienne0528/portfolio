import React from 'react'

const GetInTouch = () => {
    return (
        <section className="flex flex-col items-center gap-5 mt-25 p-4 bg-[#808E94] w-full rounded-xl">
            <div>Connect with me</div>
            <div className="text-[#FF8000] text-3xl font-[serif]">Get in touch</div>
            <div className="flex flex-col items-center">
                <p>I'd love to hear from you! If you have any questions, comments or feedback,</p>
                <p> please use the form below.</p>
                <div className='flex gap-4 h-10 w-full my-4'>
                    <input type="text" placeholder=' Enter your name' className='bg-white text-black rounded-[3px] w-full' />
                    <input type="text" placeholder=' Enter your email' className='bg-white text-black rounded-[3px] w-full' />
                </div>
                <input type="text" placeholder='Enter your message' className='bg-white text-black rounded-[3px] w-full h-50' />
            </div>

            <button className="btn btn-xl bg-[#FF8000] text-[#FFFFFF] text-xl rounded-[50px] w-50 mr-10">
                Contact me →
            </button>
        </section>
    )
}

export default GetInTouch