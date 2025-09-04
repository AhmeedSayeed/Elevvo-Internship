export default function Error({ error }) {
    return <div className="flex flex-col items-center justify-center max-sm:w-[80%] max-md:w-[70%] w-[60%] max-sm:h-[35vh] max-md:h-[45vh] h-[60vh] bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-16">
        <h3 className="text-2xl text-red-400 text-center font-bold uppercase">{error}</h3>
    </div>;
}