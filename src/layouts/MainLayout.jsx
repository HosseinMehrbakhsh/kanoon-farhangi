import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import { useState } from "react";

export default function MainLayout({ children }) {
    const [isOpen,setIsOpen]=useState(false);
    function toggleSidebar(){
        setIsOpen(prev=>!prev);
    }
    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar 
                isOpen={isOpen}
                toggleSidebar={toggleSidebar}
            />

            {children}

            <Footer />
        </>
    )
}