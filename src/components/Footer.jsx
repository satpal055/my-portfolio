import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-center text-gray-300 py-10 text-sm">

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 mb-4 text-xl">
                <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.linkedin.com/in/satpal-singh-frontend-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/satpal055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-100 transition"
                >
                    <FaGithub />
                </a>
                <a href="https://wa.me/919828146004" target="_blank"
                    className="text-green-500 hover:text-green-600 text-2xl"><FaWhatsapp /></a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500">
                © 2025 Satpal Singh. All rights reserved.
            </p>
        </footer>
    );
}
