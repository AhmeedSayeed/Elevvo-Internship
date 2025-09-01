import { motion } from 'framer-motion'
import iphoneImg from '../assets/iPhone-17.jpg'

export default function Hero() {
    return <motion.section id="hero" className='h-screen flex max-sm:flex-col-reverse items-center max-sm:justify-center justify-between max-sm:px-4 max-md:px-8 max-lg:px-10 max-xl:px-16 px-32 max-sm:mt-32 mt-10 flex-row'
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
        <div className='flex flex-col items-left justify-center gap-4 max-sm:w-[300px] max-sm:h-[300px] max-md:w-[400px] max-md:h-[400px] w-[500px] h-[500px]'>
            <div className='flex flex-col gap-4 mb-4'>
                <h2 className='text-4xl max-md:text-2xl max-sm:text-lg text-primary font-medium'>iPhone 17</h2>
                <p className='text-xl max-md:text-base max-sm:text-sm text-primary'>
                    Discover a new world of possibilities with iPhone 17. 
                    Advanced AI technology meets elegant design to deliver an unparalleled experience.
                    Revolutionary 200MP camera, 
                    lightning-fast A18 Bionic chip, and all-day battery life. 
                    iPhone 17 isn't just a phone – it's your intelligent companion for the future.
                </p>
            </div>
            
            <div className='flex justify-left items-center'>
                <a href="#cta">
                    <button className='bg-white/15 backdrop-blur-md shadow-lg rounded-2xl cursor-pointer text-primary hover:bg-gray-500 hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-40 h-12'>
                        <span>Call to Action</span>
                    </button>
                </a>
            </div>
        </div>

        <div className='bg-white/30 backdrop-blur-md shadow-lg p-4 rounded-2xl justify-end max-sm:w-[280px] max-sm:h-[300px] max-md:w-[350px] max-md:h-[380px] w-[400px] h-[480px]'>
            <img src={iphoneImg} alt="Iphone 17" className='w-full h-full object-cover rounded-2xl'/>
        </div>
    </motion.section>
}