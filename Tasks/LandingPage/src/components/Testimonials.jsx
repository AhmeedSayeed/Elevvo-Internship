import { motion } from "framer-motion"
import { TESTIMONIALS } from "../data/testimonial.js"
import Testimonial from './Testimonial.jsx'

export default function Testimonials() {
    return <motion.section id="testimonials"  className="flex flex-col items-center justify-center max-sm:py-8 py-20 gap-4"
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl max-md:text-2xl max-sm:text-lg text-primary font-medium mb-4">Testimonials</h2>

            <div className="flex flex-row flex-wrap items-center justify-center gap-8 p-10">
                {TESTIMONIALS.map((testimonial) => (
                    <Testimonial key={testimonial.id} {...testimonial} />
                    ))}
            </div>
    </motion.section>
}