import './module.home.css'
import fahadImg from '../../images/img4.png';
import { Icon } from '@iconify/react';
import Header from '../../Shared/Header'
import Skills from '../Skills';
import Services from '../Services';
import Portfolio from '../Portfolio';
import Reviews from '../Reviews';
import GetInTouch from '../Get-in-touch';
import Footer from '../../Shared/Footer';
import resumePdf from '../../images/Fahad-Hossain-web-developer-Resume.pdf'
import Achivement from '../Achivement';
import Exprience from '../Exprience';
import { Link } from 'react-scroll';

const Home = () => {

    const handleDownloadResume = () => {
        console.log('clicke')
    }
    return (
        <div id='home' className='bg-[#09072d] bg-gradient-to-br from-[#0c0b25] via-[#0c0b25] to-[#050266]'>
            <Header />

            <div className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] h-[650px] sm:w-[500px] mx-auto xl:relative sm:relative pt-20'>
                <div className='xl:w-[50%] lg:w-[65%] md:w-[75%] sm:w-[95%] mx-auto p-8 my-radial-gradient rounded-full'>
                    <img src={fahadImg} alt="" className='w-[70%] lg:h-[550px] md:h-[500px] sm:h-[400px] ml-[90px] sm:ml-[70px]' />
                </div>
                <div>
                    <h1 className='text-[#afadd3] text-7xl text-center mt-[-130px] font-bold'>Fahad Hossain</h1>
                    <p className='text-[#aaa] text-center text-2xl font-semibold'>Do you have a project? <Link to='reachMe'  spy={true} smooth={true} duration={1200} className='text-[#ff6d5a] cursor-pointer'>Let's Talk</Link></p>
                </div>
            </div>

            <div className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[500px] mx-auto flex xl:justify-between lg:justify-evenly md:justify-around sm:justify-center sm:gap-2 xl:absolute top-[190px] right-0 left-0'>
                <div>
                    <div className='bg-gradient-to-r from-[#09091b] to-[#0c0961] w-[230px] hover:w-[250px]  transition-all p-2 rounded-tr-full rounded-br-full'>
                        <h2 className='text-[#ff6d5a] font-medium text-lg'>Web Developer (MERN)</h2>
                        <p className='text-[#aaa] text-md'>Based in Bangladesh</p>
                    </div>
                    <div className='bg-gradient-to-r from-[#09091b] to-[#0c0961] w-[230px] hover:w-[250px] transition-all p-2 rounded-tr-full rounded-br-full mt-11'>
                        <h2 className='text-[#969595] font-medium text-xl'>Say hello to</h2>
                        <p className='text-[#e2e1e1] text-md font-normal'>fahadhossaim24@gmail.com</p>
                    </div>
                    <div className='flex gap-4 w-[250px] text-3xl mt-11 text-[#47449e] '>
                        <a href='https://www.facebook.com/1fahadhossain' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:facebook" /></a>
                        <a href='https://www.linkedin.com/in/1fahadhossain' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:linkedin" /></a>
                        <a href='#' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:twitter" /></a>
                        <a href='https://github.com/fahadhossain24' className='hover:text-[#ff6d5a] hover:text-4xl transition-all w-[15%]'><Icon icon="line-md:github-loop" /></a>
                    </div>
                </div>

                {/* resume download button */}
                <div className='sm:absolute md:top-36 sm:top-14 lg:top-44  sm:ml-20 xl:ml-[520px] xl:mt-[-200px]'>
                    <div className='w-[200px] h-[100px] flex items-center justify-center mt-60'>
                        <a href={resumePdf} download='Fahad-hossain-web-developer-resume' target='_blank' rel='noreferrer' className='resumeDownloadButton w-[85px] h-[85px] flex items-center justify-center text-6xl text-[#ff6d5a] border-2 border-[#ff6d5a] rounded-full p-3 cursor-pointer'>
                            <Icon icon="ic:baseline-download" className='resumeDownloadButtonIcon flex items-center justify-normal w-8' />
                        </a>
                    </div>
                    <span className='resumeDownloadText text-[#ff6d5a] block mr-32 text-xl font-semibold mt-2 ml-5'>Download Resume</span>
                </div>

                <div>
                    <div className='w-[160px] mt- text-right border-b-[1px] border-b-[#342d5c] hover:border-b-[#ff6d5a] hover:scale-x-110 transition-all'>
                        <h2 className='text-white text-3xl font-bold'>100%</h2>
                        <p className='text-[#aaa] text-medium text-xl'>Client Satisfaction</p>
                        <br />
                    </div>
                    <div className='w-[160px] mt- text-right border-b-[1px] border-b-[#342d5c] hover:border-b-[#ff6d5a] hover:scale-x-110 transition-all'>
                        <h2 className='text-white text-3xl font-bold'>12+</h2>
                        <p className='text-[#aaa] text-medium text-xl'>Project Done</p>
                        <br />
                    </div>
                    <div className='w-[160px] mt- text-right border-b-[1px] border-b-[#342d5c] hover:border-b-[#ff6d5a] hover:scale-x-110 transition-all'>
                        <h2 className='text-white text-3xl font-bold'>2+</h2>
                        <p className='text-[#aaa] text-medium text-xl'>Experience</p>
                        <br />
                    </div>
                </div>
            </div>
            <Skills />
            <Services />
            <Portfolio />
            <Reviews />
            <Exprience />
            <Achivement />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default Home;