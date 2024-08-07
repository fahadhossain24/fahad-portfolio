import React from 'react';
import SkillsProgressPercentageBar from './SkillsProgressPercentageBar';
import backgroundImageHtml from '../../images/html5.png';
import backgroundImageCss from '../../images/css3.png';
import backgroundImageTailwind from '../../images/tailwind.png';
import backgroundImageJs from '../../images/js.png';
import backgroundImageReact from '../../images/react.png';
import backgroundImageNext from '../../images/next.png';
import backgroundImageRedux from '../../images/redux.png';
import backgroundImageTs from '../../images/ts.png';
import backgroundImageNode from '../../images/node.png';
import backgroundImageExpress from '../../images/express.png';
import backgroundImageMongo from '../../images/mongo.png';
import backgroundImagePostgresql from '../../images/postgresql.png';

const Skills = () => {
    return (
        <div id='skills' className='xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[100%] mx-auto'>
            <div className='xl:w-[12%] lg:w-[15%] md:w-[25%] sm:w-[50%] mx-auto mt-20 mb-24'>
                <h2 className='font-bold text-center text-3xl border-b-4 border-b-[#ff6d5a] pb-2 bg-gradient-to-b from-white to-[#ff6d5a] text-transparent bg-clip-text'>My Skills</h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-11 justify-center mt-11'>

                <SkillsProgressPercentageBar value={95} backgroundImage={{
                    url: backgroundImageHtml,
                    size: '80% 65%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={80} backgroundImage={{
                    url: backgroundImageCss,
                    size: '200% 100%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={80} backgroundImage={{
                    url: backgroundImageTailwind,
                    size: '120% 90%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImageJs,
                    size: '120% 90%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImageReact,
                    size: '180% 100%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImageNext,
                    size: '80% 130%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={85} backgroundImage={{
                    url: backgroundImageRedux,
                    size: '180% 100%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={80} backgroundImage={{
                    url: backgroundImageTs,
                    size: '90% 70%',
                    backgroundPositon: 'bottom'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImageNode,
                    size: '130% 70%',
                    backgroundPositon: 'bottom'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImageExpress,
                    size: '90% 60%',
                    backgroundPositon: 'bottom'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImageMongo,
                    size: '70% 50%',
                    backgroundPositon: 'center'
                }}/>

                <SkillsProgressPercentageBar value={90} backgroundImage={{
                    url: backgroundImagePostgresql,
                    size: '70% 50%',
                    backgroundPositon: 'center'
                }}/>
            </div>
        </div>
    );
};

export default Skills;
