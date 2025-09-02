import { motion } from 'framer-motion'
import iphoneImg from '../assets/Iphone_17.jpg'

export default function CallToAction() {
    return <motion.section id="cta"  className="flex flex-col items-center justify-center max-sm:py-8 py-20 gap-4"
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl max-md:text-2xl max-sm:text-lg text-primary font-medium mb-4">Call to Action</h2>


            <div className='w-full flex max-sm:flex-col-reverse items-center max-sm:justify-center justify-between max-sm:px-4 max-md:px-8 max-lg:px-10 max-xl:px-16 px-32 mt-10 flex-row'>
                <div className='flex flex-col items-left justify-center gap-4 max-sm:w-[300px] max-sm:h-[300px] max-md:w-[400px] max-md:h-[400px] w-[500px] h-[500px]'>
                    <div className='flex flex-col gap-4 mb-4'>
                        <h2 className='text-4xl max-md:text-2xl max-sm:text-lg text-primary font-medium'>
                            Experience the Future with iPhone 17
                        </h2>
                        <p className='text-xl max-md:text-base max-sm:text-sm text-primary'>
                            Discover the latest iPhone 17 lineup — from the ultra-thin iPhone 17 Air 
                            to the powerful iPhone 17 Pro Max. Sleek design, next-gen performance, 
                            and smarter features — all in your hands.
                        </p>
                    </div>
                    
                    <div className='flex justify-left items-center'>
                        <a href="https://www.apple.com/iphone/" target="_blank">
                            <button className='bg-white/15 backdrop-blur-md shadow-lg rounded-2xl cursor-pointer text-primary hover:bg-gray-500 hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-40 h-12'>
                                <span>Pre-order Now</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='bg-white/30 backdrop-blur-md shadow-lg p-4 rounded-2xl justify-end max-sm:w-[280px] max-sm:h-[300px] max-md:w-[350px] max-md:h-[380px] w-[400px] h-[480px]'>
                    <img src={iphoneImg} alt="Iphone 17" className='w-full h-full object-cover rounded-2xl'/>
                </div>
            </div>

    </motion.section>
}