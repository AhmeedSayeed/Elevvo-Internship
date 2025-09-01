import { motion } from 'framer-motion'
import logoImg from '../../public/logo.png'
import { useState, useEffect } from 'react'

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 350) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = { threshold: 0.6 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const links = [
        { id: "hero", label: "Hero" },
        { id: "features", label: "Features" },
        { id: "testimonials", label: "Testimonials" },
        { id: "pricing", label: "Pricing" },
        { id: "cta", label: "Call-to-Action" },
    ];

    return (
        <motion.nav 
            className="w-full p-4 bg-white/10 backdrop-blur-md shadow-sm flex flex-col md:flex-row md:items-center md:justify-between fixed top-0 left-0 z-50"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -60 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-center items-center gap-4 md:justify-start mb-4 md:mb-0">
                <img src={logoImg} alt="Logo" className='h-15 w-auto object-contain'/>
                <h1 className='text-4xl text-primary font-bold'>iPhone 17</h1>
            </div>
            
            <ul className='flex flex-wrap justify-center md:justify-end md:mr-8 items-center text-primary gap-4 md:gap-6'>
                {links.map(link => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className={`relative pb-1 hover:text-blue-400 transition-colors text-xl outline-none ${
                                activeSection === link.id 
                                    ? "text-blue-500 font-semibold"
                                    : ""
                            }`}
                        >
                            {link.label}

                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-500 ${
                                    activeSection === link.id ? "w-full" : "w-0"
                                }`} 
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}
