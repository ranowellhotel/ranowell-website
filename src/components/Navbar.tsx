import React, { useState, useEffect } from "react";
import Logo from "@/assets/Ranowell_logo.png";
import { Link, useLocation } from "react-router-dom";

const BOOKING_URL = "https://www.booking.com/hotel/lk/ranowell.en-gb.html";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBookNowClick = () => {
        setShowBookingPopup(true);
    };

    const handleContinueBooking = () => {
        window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
        setShowBookingPopup(false);
    };

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-[0_2px_6px_rgba(0,0,0,0.1)] animate-navbarFade">

            {/* ------------------ TOP BAR ------------------ */}
            <div 
                className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                    isScrolled 
                        ? "max-h-0 opacity-0" 
                        : "max-h-48 opacity-100 border-b border-gray-300"
                }`}
            >
                <div className="my-3 px-6 py-6 flex items-center justify-between relative">

                    {/* Left spacer (keeps logo centered) */}
                    <div className="hidden md:block w-32" />

                    {/* Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                        <Link to="/" aria-label="Go to Homepage">
                            <img
                                src={Logo}
                                alt="Ranowell Hotel"
                                className="h-20 object-contain animate-fadeInSlow"
                            />
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[6px]"
                    >
                        <span
                            className={`block h-[2px] w-7 bg-[#6A1B9A] transition-all duration-300
                            ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                        />
                        <span
                            className={`block h-[2px] w-7 bg-[#6A1B9A] transition-all duration-300
                            ${menuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-[2px] w-7 bg-[#6A1B9A] transition-all duration-300
                            ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                        />
                    </button>

                    {/* Desktop Book Now */}
                    <button
                        onClick={handleBookNowClick}
                        className="
                            hidden md:block
                            bg-[#6A1B9A] text-white text-sm
                            px-11 py-3 rounded-lg
                            tracking-widest
                            hover:bg-[#58167F] transition
                            ml-auto
                        "
                    >
                        BOOK NOW
                    </button>

                </div>
            </div>

            {/* ------------------ NAV LINKS (and Scrolled Header Content) ------------------ */}
            <nav className={`max-w-7xl mx-auto px-6 transition-all duration-500 ease-in-out ${isScrolled ? "py-2" : ""}`}>

                {/* Desktop Nav */}
                <div className={`hidden md:flex items-center justify-center gap-8 tracking-widest text-sm transition-all duration-500 ease-in-out ${isScrolled ? "py-2" : "py-4"}`}>
                    
                    {/* Scrolled Logo */}
                    <div 
                        className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
                            isScrolled ? "max-w-[5rem] opacity-100 mr-4" : "max-w-0 opacity-0 mr-0"
                        }`}
                    >
                         <Link to="/" aria-label="Go to Homepage">
                             <img
                                src={Logo}
                                alt="Ranowell Hotel"
                                className="h-12 object-contain"
                            />
                        </Link>
                    </div>

                    <NavItem to="/" label="HOME" />
                    <Star />
                    <NavItem to="/weddings" label="WEDDINGS" />
                    <Star />
                    <NavItem to="/accommodation" label="ACCOMMODATION" />
                    <Star />
                    <NavItem to="/gallery" label="GALLERY" />
                    <Star/>
                    <NavItem to="/fact-sheet" label="INFO"/>

                    {/* Scrolled Book Now Button */}
                    <div 
                        className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
                            isScrolled ? "max-w-[10rem] opacity-100 ml-4" : "max-w-0 opacity-0 ml-0"
                        }`}
                    >
                        <button
                            onClick={handleBookNowClick}
                            className="
                                bg-[#6A1B9A] text-white text-xs
                                px-6 py-2 rounded-lg
                                tracking-widest
                                hover:bg-[#58167F] transition whitespace-nowrap
                            "
                        >
                            BOOK NOW
                        </button>
                    </div>
                </div>

                {/* Mobile Header (When Scrolled) */}
                <div 
                    className={`md:hidden flex items-center justify-between transition-all duration-500 ease-in-out overflow-hidden ${
                        isScrolled ? "max-h-20 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                    }`}
                >
                     <Link to="/" aria-label="Go to Homepage">
                         <img
                                src={Logo}
                                alt="Ranowell Hotel"
                                className="h-10 object-contain"
                            />
                     </Link>
                     <button
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative w-8 h-8 flex flex-col justify-center items-center gap-[6px]"
                    >
                        <span
                            className={`block h-[2px] w-7 bg-[#6A1B9A] transition-all duration-300
                            ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                        />
                        <span
                            className={`block h-[2px] w-7 bg-[#6A1B9A] transition-all duration-300
                            ${menuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-[2px] w-7 bg-[#6A1B9A] transition-all duration-300
                            ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                        />
                    </button>
                </div>


                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-4 py-4 text-sm tracking-widest">
                        <NavItem to="/" label="HOME" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/weddings" label="WEDDINGS" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/accommodation" label="ACCOMMODATION" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/gallery" label="GALLERY" onClick={() => setMenuOpen(false)} />
                        <NavItem to="/fact-sheet" label="INFO" onClick={() => setMenuOpen(false)}/>


                        <div className="w-24 h-px bg-gray-300 my-2" />

                        {/* Mobile Book Now */}
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                handleBookNowClick();
                            }}
                            className="
                                bg-[#6A1B9A] text-white
                                px-8 py-3 rounded-full
                                tracking-widest text-sm
                                hover:bg-[#58167F] transition
                            "
                        >
                            BOOK NOW
                        </button>
                    </div>
                )}
            </nav>

            {/* ------------------ BOOKING CONFIRMATION MODAL ------------------ */}
            {showBookingPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 text-center shadow-xl animate-fadeInSlow">

                        <h3 className="text-[#5C2D84] text-lg font-marcellus uppercase mb-3">
                            Redirect Notice
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            You will be redirected to <strong>Booking.com</strong> to
                            complete your booking process.
                            <br />
                            Do you wish to continue?
                        </p>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setShowBookingPopup(false)}
                                className="px-5 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleContinueBooking}
                                className="px-6 py-2 text-sm bg-[#6A1B9A] text-white rounded hover:bg-[#58167F] transition"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
