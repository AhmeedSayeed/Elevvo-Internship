import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ onSubmit, city, onSetCity}) {
    return (<form onSubmit={onSubmit} className="flex gap-2 mb-6 p-4">
                <div className="flex bg-white/20 backdrop-blur-md shadow-lg p-2 rounded-4xl">
                    <input
                    type="text"
                    value={city}
                    onChange={(e) => onSetCity(e.target.value)}
                    className="p-2 rounded-lg outline-none"
                    placeholder="Enter city name"
                    />
                    <button
                    type="submit"
                    className="px-4 py-2 bg-amber-600 text-white rounded-4xl cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
            </form>);
}