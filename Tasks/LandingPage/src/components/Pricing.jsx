import { motion } from 'framer-motion'
import { MODELS } from '../data/models.js'
import Model from './Model.jsx'

export default function Pricing() {
    return <motion.section id="pricing"  className="flex flex-col items-center justify-center py-20 gap-4"
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
                <h2 className="text-4xl max-md:text-2xl max-sm:text-lg text-primary font-medium mb-4">Pricing</h2>
                <div className="flex flex-row flex-wrap items-center justify-center gap-8 p-10">
                    {MODELS.map((model) => (
                        <Model key={model.id} {...model} />
                        ))}
                </div>
        </motion.section>
}