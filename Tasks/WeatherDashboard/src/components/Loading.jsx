export default function Loading() {
    return <div className="flex flex-col items-center justify-center max-sm:w-[80%] max-md:w-[70%] w-[60%] max-sm:h-[35vh] max-md:h-[45vh] h-[60vh] bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-16">
        <div className="flex flex-col gap-2 items-center space-y-4">
                <div className="w-16 h-16 border-4 border-t-gray-500 border-gray-300 rounded-full animate-spin"></div>
                <div className="text-body text-xl font-semibold text-center">Loading weather data...</div>
            </div>
    </div>;
}