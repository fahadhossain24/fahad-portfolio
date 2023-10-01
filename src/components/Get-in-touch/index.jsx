import React from 'react';

const GetInTouch = () => {
    const handleSubmit = (e) => {
        e.preventDefault;
        alert('Your comment successfully sended')
    }
    return (
        <div id='getInTouch' className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[35%] mx-auto mt-20 mb-11'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Reach Me</h2>
            </div>
            <div className='lg:w-[60%] p-5 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" id="" placeholder='Enter Your Name' className='bg-transparent border-2 border-[#ff6d5a] px-4 py-2 rounded-lg w-full text-white' /> <br />
                    <input type="email" name="email" id="" placeholder='Enter Your email' className='bg-transparent border-2 border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-3 text-white' /> <br />
                    <textarea name="comment" id="" cols="40" rows="5" placeholder='Your Comment' className='bg-transparent border-2 border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-3 text-white'></textarea><br />
                    <button type='submit' className='text-white border-2 border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-5 hover:bg-red-500 transition-all'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;