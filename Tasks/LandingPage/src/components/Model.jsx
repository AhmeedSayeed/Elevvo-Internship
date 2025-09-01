export default function Model({ name, price, description, image }) {
    return <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg text-center flex flex-col items-center gap-4 w-[310px] h-[330px] hover:-translate-y-4 transition-all duration-400 ease-in-out">
            <div className="w-full rounded-2xl shadow-lg">
                <img src={image} alt={name} className="object-cover rounded-2xl" />
            </div>
            <div className="flex flex-row flex-wrap w-full justify-between items-center">
                <h3 className="text-xl text-primary font-semibold">{name}</h3>
                <p className="text-lg text-muted font-medium">{price}$</p>
            </div>
            <p className="text-lg text-muted">{description}</p>
    </div>
}