export default function Task({ title, image, link, description }) {
    return <div className="bg-teal-hover w-[300px] h-[405px] flex flex-col  items-center rounded-2xl hover:shadow-challenge transition-all duration-300 hover:-translate-y-1">
        <img src={image} alt={title} className="w-full h-[250px] object-cover rounded-t-2xl" />
        <div className="flex flex-col gap-1 px-4 py-2">
            <h3 className="text-lg text-light-tertiary">{title}</h3>
            <p className="text-xs text-light-quinternary">{description}</p>
        </div>
        <div className="w-[90%] p-2">
            <a href={link} target="_blank">
                <button className="w-full bg-teal-deep p-2 rounded-2xl text-sm text-light-quinternary cursor-pointer hover:bg-teal-primary transition-all duration-300">
                    <div className="flex flex-row justify-center items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4 mr-2">
                        <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        Live Demo
                    </div>
                </button>
            </a>
        </div>
    </div>
}