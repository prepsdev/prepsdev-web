"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Handshake, HandshakeIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "long",
                year: "numeric",
            };
            setTime(new Intl.DateTimeFormat("en-US", options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-lg text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" className="text-2xl font-bold">
                    <Image src="/logo.png" width={120} height={40} alt="preps.dev" />
                </Link>

                {/* Navigation Links with Notch Effect */}
                {/* <div className="hidden md:flex space-x-6 bg-gray-800 bg-opacity-50 px-6 py-2 rounded-full shadow-md">
                    <Link href="/" className="hover:text-gray-300 transition">About</Link>
                    <Link href="/" className="hover:text-gray-300 transition">Service</Link>
                    <Link href="/" className="hover:text-gray-300 transition">Projects</Link>
                </div> */}

                <div className="hidden md:flex space-x-6 bg-gray-800 bg-opacity-50 px-6 py-2 rounded-full shadow-md">
                    {time}
                </div>

                {/* Contact Button */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.9 }}
                    className="hidden md:flex"
                >
                    <Link
                        href="https://wa.me/6289666075500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center px-4 py-2 text-[#ffd600] rounded-lg shadow-md transition 
               bg-black border border-[#ffd600] hover:shadow-[0_0_15px_#ffd600] hover:bg-[#ffd600] hover:text-black"
                    >
                        <span className="absolute inset-0 animate-pulse opacity-50 blur-md bg-[#ffd600]"></span>
                        <HandshakeIcon size={20} className="mr-2 relative z-10 transition-all text-[#ffd600] group-hover:text-black" />
                        <span className="relative z-10">Hire Me</span>
                    </Link>


                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-black text-white px-6 py-4 space-y-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.4 } }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/contact" className="block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition flex items-center justify-center"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Handshake size={20} className="mr-2" /> Hire Me
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
