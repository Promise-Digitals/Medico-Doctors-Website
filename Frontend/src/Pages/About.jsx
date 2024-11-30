import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Welcome to Medico, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam quasi, perferendis beatae molestias dolor odit nulla consequatur modi impedit voluptates eum facilis omnis maxime facere ratione, at earum voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime?</p>
                    <p>We offer best and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur a nihil repellendus velit illum nulla, in, unde error blanditiis magnam sapiente quia non odit ducimus ullam officia laborum provident veniam debitis laboriosam repellat rerum aliquid. Ratione, earum velit? Iste corrupti ut facere earum vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nisi!</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>We visualize Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga ea est temporibus exercitationem corrupti similique quae nemo minus non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, expedita?</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE USE</span></p>
            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer'>
                    <b>Efficiency:</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>

                <div className='border px-10 md:py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer'>
                    <b>Convenience</b>
                    <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>

                <div className='border px-10 md:py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer'>
                    <b>Personalization</b>
                    <p>Tailored recommendation and reminders to help you stay on top of your health</p>
                </div>
            </div>
        </div>
    )
}

export default About
