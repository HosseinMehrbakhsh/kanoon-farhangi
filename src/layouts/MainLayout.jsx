import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import MiniNav from "../components/MiniNav";
import { useState, useEffect } from "react";

export default function MainLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleSidebar() {
        setIsOpen(prev => !prev);
    }

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <MiniNav
                isScrolled={isScrolled}
                toggleSidebar={toggleSidebar}
            />
            <Sidebar
                isOpen={isOpen}
                toggleSidebar={toggleSidebar}
            />

            {children}

            <Footer />
        </>
    )
}