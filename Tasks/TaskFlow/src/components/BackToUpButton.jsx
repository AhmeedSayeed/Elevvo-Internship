import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
}

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return <AnimatePresence>
                {visible && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 
                            text-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
                >
                    <FaArrowUp />
                </motion.button>
                )}
            </AnimatePresence>;
}
