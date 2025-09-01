export default function Feature({ description, image }) {
    return <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg text-center flex flex-col items-center gap-4 w-[400px] h-[500px] hover:-translate-y-4 transition-all duration-400 ease-in-out">
        <img src={image} alt="feature" className="w-full h-[350px] object-cover rounded-2xl" />
        <p className="text-lg text-muted">{description}</p>
    </div>
}