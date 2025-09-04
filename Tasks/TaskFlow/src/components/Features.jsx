import Feature from "./Feature.jsx"
import { FEATURES } from "../data/features.js"
import { motion } from 'framer-motion';

export default function Features() {
    return <motion.section id="features" className="flex flex-col items-center justify-center mb-16"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
        <h2 className="text-2xl font-bold text-purple-400 my-4 text-center mb-8">Features</h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 px-8">
            {FEATURES.map((feature) => (
                <Feature key={feature.id} {...feature} />
            ))}
        </div>
    </motion.section>
}