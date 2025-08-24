import { motion } from 'framer-motion';

export default function Footer() {
    return <motion.footer
            className="w-full flex flex-col justify-center items-center py-4 gap-6 bg-purple-800"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
        <div className="w-full flex justify-around items-start py-4">
            <div>
                <h2 className="text-2xl text-purple-300 font-bold mb-4">Contact Links</h2>
                <div className="flex flex-col gap-3 text-white">
                    <a href="mailto:info@taskflow.com" className="flex items-center gap-2">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                    </a>
                    <a href="tel:+201234567890" className="flex items-center gap-2">
                        <i className="fas fa-phone"></i>
                        <span>+20 123 456 7890</span>
                    </a>
                    <a href="/contact" className="flex items-center gap-2">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Contact Form</span>
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-2xl text-purple-300 font-bold mb-4">Follow Us</h2>
                <div className="flex flex-col gap-3 text-white">
                    <a href="#" className="flex items-center gap-2">
                        <i className="fab fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-2">
                        <i className="fab fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="#" className="flex items-center gap-2">
                        <i className="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>

        <p className="text-white text-sm font-semibold mt-4">
            © 2025 Task Flow. All rights reserved.
        </p>
    </motion.footer>
}