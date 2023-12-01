import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ictob from '../../images/certificates/ictob.png';
import knowAboutIctob from '../../images/certificates/know-about-ictob.png';
import linkedin from '../../images/certificates/linkedin.png';
import skillsCompetition from '../../images/certificates/skills-competition.jpg';
import programmingContest from '../../images/certificates/programming-contest.jpg';
import internshipCertificate from '../../images/certificates/Fahad-Hossain-MERN-Internship-certificate.jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Achivement = () => {
    const certificates = [ictob, knowAboutIctob, programmingContest, linkedin, skillsCompetition, internshipCertificate];

    let slideToShow;
    const deviceWidth = window.innerWidth;
    if(deviceWidth < 767){
        slideToShow = 1;
    }else if(deviceWidth > 550 && deviceWidth < 1020){
        slideToShow = 2;
    }else{
        slideToShow = 3;
    }



    var settings = {
        infinite: true,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        Infinity: true
    };
    return (
        <div id='achivement' className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] mx-auto'>
            <div className='xl:w-[16%] lg:w-[18%] md:w-[28%] sm:w-[60%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Achivements</h2>
            </div>
            <Slider {...settings}>
                {
                    certificates.map((certificate, index) => (
                        <div key={index} className={`w-[150px] ml-14 ${deviceWidth < 767 ? 'ml-0': (deviceWidth > 767) && (deviceWidth < 1020) ? 'ml-8': 'ml-0'}`}>
                            <div key={index} className='bg-[#222068] lg:w-[320px] md:w-[300px] sm:w-[90%} lg:h-[280px] md:h-[260px] rounded-lg p-2 cursor-pointer'>
                                <PhotoProvider>
                                    <PhotoView src={certificate}>
                                        <img src={certificate} alt="Avater" className='w-full h-full  hover:scale-105 rounded-lg transition-all' />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Achivement;
