export default function Post({ title, image, description, date, type }) {

    let typeClass = "";

    if(type === 'Tech') {
        typeClass = "badge-tech";
    } else if(type === 'Travel') {
        typeClass = "badge-travel";
    } else if(type === 'Food') {
        typeClass = "badge-food";
    }

    return <div className="bg-card-hover card-blog p-4 rounded-lg shadow-lg h-[380px] relative">
        <h1 className="text-heading text-xl font-bold mb-4">{title}</h1>
        <div className="relative mb-4">
            <img className="w-full h-[200px] rounded-lg object-cover" src={image} alt={title} />
            <p className={`text-body text-xs badge-base ${typeClass}`}>{type}</p>
            <p className="text-xs absolute bottom-[10px] left-[10px] date-floating">{date}</p>
        </div>
        <p className="text-body">{description}</p>
    </div>
}