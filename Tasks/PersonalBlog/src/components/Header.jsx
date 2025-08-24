import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

export default function Header() {
    return <motion.header className="flex items-center align-center gap-6 p-6 my-8 bg-header-gradient text-heading rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
        <div>
            <FontAwesomeIcon icon={faUser} className="text-neonBlue text-8xl" />
        </div>
        <div className='flex flex-col justify-center gap-4 text-left'>
            <h1 className="text-2xl font-bold">Personal Blog</h1>
            <p>Welcome to my blog! Here you’ll find posts displayed in elegant cards with a title,
                image, short description, and publication date. You can filter by category such as Tech,
                Travel, or Food, and browse through pages easily.
                </p>
        </div>
    </motion.header>
}