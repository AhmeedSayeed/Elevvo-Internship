export default function Review({ user, review }) {
    return <div className="flex flex-col gap-2 text-center bg-purple-800 rounded-xl p-4
            transition-all transition-discrete duration-400 hover:-translate-y-2">
        <div className="flex items-center justify-between gap-4 text-white mx-2">
            <div className="flex items-center gap-4">
                <div className="bg-purple-500 p-3 rounded-4xl">
                <i className="fas fa-user text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-purple-200 my-4">{user}</h3>
            </div>

            <div className="flex text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            </div>
        <p className="text-gray-100 text-left">{review}</p>
    </div>
}