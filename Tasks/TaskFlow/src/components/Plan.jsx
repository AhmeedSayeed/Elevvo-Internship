import Button from "./Button.jsx";


const included = <i className="fas fa-check text-green-500"></i>;
const notIncluded = <i className="fas fa-times text-red-500"></i>;


export default function Plan({ type, price, features }) {
    return <div className="flex flex-col gap-1 bg-purple-800 rounded-xl p-4
            transition-all transition-discrete duration-400 hover:-translate-y-2">
            <div className="flex flex-row justify-between items-center gap-32 mb-2">
                <h2 className="text-3xl font-bold text-purple-200">{type}</h2>
                <h3 className="text-xl font-semibold text-purple-300">{price}$/Month</h3>
            </div>
            <Button className="w-full">Get {type} plan</Button>
            <ul className="flex flex-col gap-8">
                {features.map((feature, index) =>
                    <li key={index}>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-gray-100 font-semibold text-md">{feature.text}</p>
                            {feature.includes ? included : notIncluded}
                        </div>
                    </li>
                )}
            </ul>
    </div>
}