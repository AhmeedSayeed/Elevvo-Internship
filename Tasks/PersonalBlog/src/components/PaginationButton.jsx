import { motion } from 'framer-motion';

export default function PaginationButton({ children, onClick }) {
  return (
    <motion.button className="btn-rounded text-xl font-bold" onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}>
      {children}
    </motion.button>
  )
}