export default function Feature({ icon, title, description }) {
    return <div className="flex flex-col gap-1 bg-purple-800 rounded-xl p-4
            transition-all transition-discrete duration-400 hover:-translate-y-2">
        <div className="flex items-center gap-4 text-white mx-2">
            <div className="bg-purple-500 p-3 rounded-4xl">
                <i className={`${icon} text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-purple-200 my-4">{title}</h3>
        </div>
        <p className="text-gray-100 text-left">{description}</p>
    </div>;

}