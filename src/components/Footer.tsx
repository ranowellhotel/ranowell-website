import React from "react";
import Logo from "@/assets/Ranowell_white.webp";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#61338A] text-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Divider */}
                <div className="w-full border-t border-white/40 mb-12"></div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* LEFT: LOGO */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <Link to="/" aria-label="Go to Homepage">
                            <img
                                src={Logo}
                                alt="Ranowell Hotel Logo"
                                className="h-40 sm:h-24 object-contain mb-3"
                            />
                        </Link>
                    </div>

                    {/* MIDDLE: NAVIGATION */}
                    <nav className="flex flex-col gap-3 text-center font-questrial sm:text-left tracking-widest text-xs sm:text-sm">
                        <Link
                            to="/"
                            className="hover:opacity-75 transition"
                        >
                            HOME
                        </Link>

                        <Link
                            to="/weddings"
                            className="hover:opacity-75 transition"
                        >
                            WEDDINGS
                        </Link>

                        <Link
                            to="/accommodation"
                            className="hover:opacity-75 transition"
                        >
                            ACCOMMODATION
                        </Link>

                        <Link
                            to="/gallery"
                            className="hover:opacity-75 transition"
                        >
                            GALLERY
                        </Link>
                    </nav>

                    {/* RIGHT: CONTACT INFO */}
                    <div className="flex flex-col gap-4 tracking-wide text-center font-questrial sm:text-left text-xs sm:text-sm">

                        <div>
                            <p className="tracking-widest font-questrial text-sm sm:text-base">RANOWELL HOTEL</p>
                            <p>162/4 CHILAW ROAD</p>
                            <p>KOCHCHIKADE, NEGOMBO 11500</p>
                        </div>

                        <div>
                            <p className="font-questrial text-md tracking-widest">+94 77 040 4050</p>
                            <p className="font-questrial text-md tracking-widest">+94 77 050 6666</p>
                        </div>

                        <div className="mt-2">
                            <p className="uppercase tracking-widest text-[10px] sm:text-xs">CONTACT US:</p>
                            <p>RANOWELLHOTEL@GMAIL.COM</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center sm:justify-start gap-6 text-xl mt-4">
                            <a
                                href="https://www.facebook.com/ranowellhotel"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ranowell Hotel on Facebook"
                                className="hover:opacity-70 transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/ranowell_hotels/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ranowell Hotel on Instagram"
                                className="hover:opacity-70 transition"
                            >
                                <FaInstagram />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="w-full border-t border-white/40 mt-14 mb-4"></div>

                {/* COPYRIGHT */}
                <p className="text-center font-questrial text-[10px] sm:text-sm tracking-wider opacity-90">
                    © {new Date().getFullYear()} Ranowell Hotel. All rights reserved. | Developed by{" "}
                    <a
                        href="https://quantiq-edge-web.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80 transition"
                    >
                        Quantiq Edge Software Solutions
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
