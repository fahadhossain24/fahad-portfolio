import React from 'react';
import digitalMenu from '../../images/project-ss/digitalMenu.PNG'
import discounthut from '../../images/project-ss/discounthut.PNG'
import bikeProject from '../../images/bikeProject.png'
import tabedge from '../../images/project-ss/tabedge1.png'
import taskManager from '../../images/project-ss/task-manager.png'
import PortfolioCard from './PortfolioCard';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';

const Portfolio = () => {
    const [ref, inView] = useInView();
    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(1)' : 'translateY(80px)',
        config: { duration: 900 },
    });

    const cardsInfo = [
        {
            img: tabedge,
            title: 'TabEdge',
            description: 'TabEdge is a fintech platform that specializes in facilitating crossborder financial transactions for individuals and businesses. The platform offers a comprehensive suite of services designed to streamline international payments, enhance accessibility, and empower users with financial freedom.',
            githubSourceCodeLink: null,
            projectLiveLink: 'https://www.tabedge.com'
        },
        {
            img: digitalMenu,
            title: 'Digital Menu',
            description: 'DigitalMenu is a QR Code based Restaurant Menu Maker and Contactless Table Ordering System! Say goodbye to paper menus and hello to streamlined dining with customizable menus, efficient order management, and contactless payment options. This is amodern twist to traditional dining.',
            githubSourceCodeLink: null,
            projectLiveLink: 'https://digitalmenu.deshit-bd.com'
        },
        {
            img: discounthut,
            title: 'Discount Hut',
            description: 'Discount Hut is a centralized platform where users can discover and purchase discounted products from various retailers and vendors. Discount Hut aggregates discounted products from different sellers and displays them on our platform. Users can browse through categories, search for specific products, and find deals based on their location.',
            githubSourceCodeLink: null,
            projectLiveLink: 'https://discounthut-bd.com'
        },
        // {
        //     img: bikeProject,
        //     title: 'Expert Bike Service',
        //     description: 'Expert Bike Service is a system where a user can be use in two approach. A bike rider have taken service for bike issue. Any king of bike problem, rider just come into this website then he can be take service. Other side a service men or mechanic register her service and he can be sell her service.',
        //     githubSourceCodeLink: 'https://github.com/fahadhossain24/experts-bike-service-frontend.git',
        //     projectLiveLink: 'https://expert-bike-service.web.app/'
        // },
        // {
        //     img: taskManager,
        //     title: 'Bachelor Trip',
        //     description: 'Bachelor Trip is a bachelor mess management system. Any person if her needed mess, then he can be find mess by any specific location or a person who want to create mess. He could be find mess and manage it by using this system. Mess admin each and everything control by using this system',
        //     githubSourceCodeLink: 'https://github.com/fahadhossain24/my-mess.git',
        //     projectLiveLink: 'https://my-mess-e50e9.web.app/'
        // },
        

    ]

    return (
        <div id='protfolio' ref={ref} className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[45%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>Projects</h2>
            </div>
            <animated.div className='flex flex-wrap justify-evenly' style={cardAnimation}>
            {
                cardsInfo.map((cardInfo, index) => <PortfolioCard key={index} portfolioDetails={cardInfo}/>)
            } 
            </animated.div>
        </div>
    );
};

export default Portfolio;