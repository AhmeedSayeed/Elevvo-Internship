import Review from "./Review.jsx";
import { REVIEWS } from "../data/reviews.js";
import { motion } from 'framer-motion';

export default function Reviews() {
    return <motion.section id="reviews" className="flex flex-col items-center justify-center mb-16"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-purple-400 my-4 text-center mb-8">Reviews</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-6 px-8">
                {REVIEWS.map((review) => (
                    <Review key={review.id} {...review} />
                ))}
            </div>
        </motion.section>
}