import { CATEGORIES } from "../data/categories.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


export default function Search({ searchRef, onSearch, onSelectCategory}) {

    return <motion.section className="flex flex-row max-sm:flex-col justify-center items-center max-sm:gap-4 gap-16 p-6 mb-8 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
        <div className="search-wrapper">
            <input ref={searchRef} className="input-search-rounded" type="text" placeholder="Search by title..." />
            <button className="btn-rounded" onClick={onSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <select className="select-custom" onChange={onSelectCategory}>
            <option value="">All Categories</option>
            {CATEGORIES.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
        </select>
    </motion.section>
}