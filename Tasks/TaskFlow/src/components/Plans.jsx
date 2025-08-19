import Plan from "./Plan.jsx"
import {PLANS} from "../data/plans.js";

export default function Plans() {
    return <section id="plans" className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-2xl font-bold text-purple-400 my-4 text-center mb-8">Plans</h2>
        <div className="grid grid-cols-3 gap-6 px-8">
                    {PLANS.map((plan) => (
                        <Plan key={plan.id} {...plan} />
                    ))}
                </div>
    </section>
}