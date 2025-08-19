import Feature from "./Feature.jsx"
import { FEATURES } from "../data/features.js"

export default function Features() {
    return <section id="features" className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-2xl font-bold text-purple-400 my-4 text-center mb-8">Features</h2>
        <div className="grid grid-cols-3 gap-6 px-8">
            {FEATURES.map((feature) => (
                <Feature key={feature.id} {...feature} />
            ))}
        </div>
    </section>
}