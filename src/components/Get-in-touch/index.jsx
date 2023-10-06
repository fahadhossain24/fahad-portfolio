import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


const GetInTouch = () => {
    const [comment, setComment] = useState('');
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_7n8d84y', 'template_7kbq9wl', {
            to_email: 'fahadhossaim24@gmail.com',
            to_name: 'Fahad Hossain',
            from_name: name,
            subject: subject,
            message: comment,
        }, 'ndB-waPTlJ3b3We6k')
            .then(
                (response) => {
                    if (response.status === 200) {
                        alert('Submit successfull. Inshallah You will get response quickly.')
                    }
                },
                (error) => {
                    alert('Something wants wrong!')

                }
            );
    }

    return (
        <div id='reachMe' className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[35%] mx-auto mt-20 mb-11'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Reach Me</h2>
            </div>
            <div className='flex flex-wrap'>
                <div className='lg:w-[65%] p-5 sm:w-full'>
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="" placeholder='Enter Your Name' className='bg-transparent border-[1px] border-[#ff6d5a] px-4 py-2 rounded-lg w-full text-white' /> <br />
                        <input type="email" name="email" id="" placeholder='Enter Your email' className='bg-transparent border-[1px] border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-3 text-white' /> <br />
                        <input onChange={e => setSubject(e.target.value)} type="text" name="subject" id="" placeholder='Enter Subject' className='bg-transparent border-[1px] border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-3 text-white' /> <br />
                        <textarea onChange={e => setComment(e.target.value)} name="comment" id="" cols="40" rows="5" placeholder='Write your needs' className='bg-transparent border-[1px] border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-3 text-white'></textarea><br />
                        <button type='submit' className='text-white border-[1px] border-[#ff6d5a] px-4 py-2 rounded-lg w-full mt-5 hover:bg-red-500 transition-all'>Send</button>
                    </form>
                </div>
                <div className='lg:w-[30%] sm:w-full bg-blue-500 p-4 rounded-md '>
                    <h2 className='text-2xl font-bold'>Phone</h2>
                    <span className='text-2xl font-semibold'>+8801810-324908</span>
                    <h2 className='text-2xl font-bold'>Email</h2>
                    <span className='text-xl font-semibold'>fahadhossaim24@gmail.com</span>
                    <h2 className='text-2xl font-bold'>My Location</h2>
                    <span className='text-lg font-semibold'>East Hajipara, Rampura, Dhaka</span>
                    <div className='flex gap-4 justify-center text-4xl mt-16 text-[#2d2a8a] '>
                        <a href='https://www.facebook.com/1fahadhossain' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:facebook" /></a>
                        <a href='https://www.linkedin.com/in/1fahadhossain' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:linkedin" /></a>
                        <a href='#' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:twitter" /></a>
                        <a href='https://github.com/fahadhossain24' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:github-loop" /></a>
                    </div>
                    {/* <img src={mapImg} alt='map-view' className='mx-auto pt-2 w-full sm:w-[90%]' /> */}
                </div>
            </div>

        </div>
    );
};

export default GetInTouch;