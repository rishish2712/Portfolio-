import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                Let’s connect and discuss how I can enhance your project with robust, scalable back-end development.
                </p>
                <a href="mailto:rishish2712@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Rishish
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div key={info.id}>
                            <a href={info.link} rel='noreferrer noopener' target='_blank' className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;