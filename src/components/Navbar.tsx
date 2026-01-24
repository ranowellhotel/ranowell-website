import React, { useState } from "react";
import Logo from "@/assets/Ranowell_logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-[0_2px_6px_rgba(0,0,0,0.1)] animate-navbarFade">

            {/* ------------------ TOP BAR ------------------ */}
            <div className="w-full border-b border-gray-300">
                <div className=" my-3 px-6 py-6 flex items-center justify-between relative">

                    {/* Left placeholder (keeps logo centered) */}
                    <div className="hidden md:block w-32"></div>

                    {/* Logo (centered ALWAYS) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                        <img
                            src={Logo}
                            alt="Ranowell Hotel"
                            className="h-20 object-contain animate-fadeInSlow"
                        />
                    </div>


                    {/* Mobile hamburger (left side) */}
                    <button
                        className="md:hidden text-3xl text-[#6A1B9A]"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    {/* Book Now Button (right aligned) */}
                    <button
                        className="
                            bg-[#6A1B9A] text-white text-sm
                            px-11 py-3 rounded-tl-3xl  rounded-sm font-base tracking-widest
                            hover:bg-[#58167F] transition
                            ml-auto
                        "
                    >
                        BOOK NOW
                    </button>

                </div>
            </div>

            {/* ------------------ NAVIGATION LINKS ------------------ */}
            <nav className="max-w-7xl mx-auto px-6">

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center justify-center gap-8 py-4 tracking-widest text-sm">
                    <NavItem to="/" label="HOME" />
                    <Star />
                    <NavItem to="/weddings" label="WEDDINGS" />
                    <Star />
                    <NavItem to="/accommodation" label="ACCOMMODATION" />
                    <Star />
                    <NavItem to="/gallery" label="GALLERY" />
                    <Star/>
                    <NavItem to="/fact-sheet" label="INFO"/>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-4 py-4 text-sm tracking-widest">
                        <NavItem to="/" label="HOME" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/weddings" label="WEDDINGS" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/accommodation" label="ACCOMMODATION" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/gallery" label="GALLERY" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/fact-sheet" label="INFO" onClick={() => setMenuOpen(false)}/>

                    </div>
                )}
            </nav>
        </header>
    );
};

const NavItem = ({
                     to,
                     label,
                     onClick,
                 }: {
    to: string;
    label: string;
    onClick?: () => void;
}) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`
                relative cursor-pointer
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[#6A1B9A]
                after:transition-all after:duration-300
                hover:after:w-full
                ${isActive ? "after:w-full text-[#6A1B9A]" : "after:w-0"}
            `}
        >
            {label}
        </Link>
    );
};

const Star = () => <span className="text-black text-xs">✦</span>;

export default Navbar;
