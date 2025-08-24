import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Post from "./Post.jsx";
import PaginationButton from "./PaginationButton.jsx";
import NoResults from "./NoResults.jsx";

export default function Posts({ posts, currentPage, maxPages, goNextPage, goPrevPage }) {

    return <motion.section className=""
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        {posts.length === 0 && <NoResults />}
        {posts.length !== 0 && <ul className="grid grid-cols-3 gap-4 p-6">
            {posts.slice(currentPage * 9, currentPage * 9 + 9).map((post) =>
                <li key={post.id}>
                    <Post {...post} />
                </li>
            )}
        </ul>}
        <div className="flex flex-row gap-4 mt-8 mb-12 justify-center items-center">
            {currentPage > 0 && <PaginationButton onClick={goPrevPage}><FontAwesomeIcon icon={faAngleLeft} /></PaginationButton>}
            {currentPage < maxPages && <PaginationButton onClick={goNextPage}><FontAwesomeIcon icon={faAngleRight} /></PaginationButton>}
        </div>
    </motion.section>
}