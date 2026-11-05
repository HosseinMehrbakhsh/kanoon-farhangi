import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import MiniNav from "../components/MiniNav";
import { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
    const { pathname, search } = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, [pathname, search])

    // sidebar
    const [isOpen, setIsOpen] = useState(false);
    function toggleSidebar() {
        setIsOpen(prev => !prev);
    }

    // mini nav 
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
