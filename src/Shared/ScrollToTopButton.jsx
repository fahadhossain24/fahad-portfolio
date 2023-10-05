import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
// import { FacebookProvider, CustomChat } from 'react-facebook';


const ScrollToTopButton = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };


    return (
        <div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 p-3 border-2 border-[#ff6d5a] text-white rounded-full shadow-md hover:bg-[#ff6d5a] cursor-pointer"

            >
                Top
            </button>
            {/* <FacebookProvider className="fixed bottom-4 right-4 p-3 border-2 border-[#ff6d5a] text-white rounded-full shadow-md hover:bg-[#ff6d5a] cursor-pointer" appId="1636395420219463" chatSupport>
                <CustomChat pageId="100068682063692" minimized={false} />
            </FacebookProvider> */}
        </div>
    );
};

export default ScrollToTopButton;