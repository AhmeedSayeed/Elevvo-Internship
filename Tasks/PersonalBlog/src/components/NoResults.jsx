import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NoResults() {
    return <div className="bg-card-hover card-blog w-[100%] h-[400px] flex flex-col justify-center items-center gap-12">
        <span><FontAwesomeIcon icon={faMagnifyingGlass} className="text-6xl text-gray-500" /></span>
        <h2 className="text-2xl text-gray-400 font-semibold font-family-heading">No results found</h2>
    </div>
}