import { motion } from "framer-motion"
import { FEATURES } from "../data/features.js"

import Feature from "../components/Feature.jsx"

export default function Features() {
    return <motion.section id="features" className="flex flex-col items-center justify-center max-sm:py-8 py-20 gap-4"
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl max-md:text-2xl max-sm:text-lg text-primary font-medium mb-4">Features</h2>

            <div className="flex flex-row flex-wrap items-center justify-center gap-8 p-10">
                {FEATURES.map((feature) => (
                    <Feature key={feature.id} {...feature} />
                ))}
            </div>
    </motion.section>
}