"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Handshake, HandshakeIcon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-lg text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" className="text-2xl font-bold">
                    PREPS.DEV
                </Link>

                {/* Navigation Links with Notch Effect */}
                <div className="hidden md:flex space-x-6 bg-gray-800 bg-opacity-50 px-6 py-2 rounded-full shadow-md">
                    <Link href="#about" className="hover:text-gray-300 transition">About</Link>
                    <Link href="#projects" className="hover:text-gray-300 transition">Projects</Link>
                    <Link href="#services" className="hover:text-gray-300 transition">Services</Link>
                </div>

                {/* Contact Button */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.9 }}
                    className="hidden md:flex"
                >
                    <Link
                        href="/contact"
                        className="flex items-center px-4 py-2 text-white rounded-lg shadow-md  transition"
                    >
                        <HandshakeIcon size={20} className="mr-2" /> Hire Me
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
                    <Link href="#about" className="block hover:text-gray-300 transition">About</Link>
                    <Link href="#projects" className="block hover:text-gray-300 transition">Projects</Link>
                    <Link href="#services" className="block hover:text-gray-300 transition">Services</Link>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.4 } }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/contact" className="block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition flex items-center justify-center">
                            <Handshake size={20} className="mr-2" /> Hire Me
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
