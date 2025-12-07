import React from "react";
import Logo from "@/assets/Ranowell_white.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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
                        <img
                            src={Logo}
                            alt="Ranowell Hotel Logo"
                            className="h-40 sm:h-24 object-contain mb-3"
                        />
                    </div>

                    {/* MIDDLE: NAVIGATION */}
                    <div className="flex flex-col gap-3 text-center font-questrial sm:text-left tracking-widest text-xs sm:text-sm">
                        <span className="cursor-pointer hover:opacity-75">HOME</span>
                        <span className="cursor-pointer hover:opacity-75">WEDDINGS</span>
                        <span className="cursor-pointer hover:opacity-75">ACCOMMODATION</span>
                        <span className="cursor-pointer hover:opacity-75">DINING</span>
                        <span className="cursor-pointer hover:opacity-75">GALLERY</span>
                    </div>

                    {/* RIGHT: CONTACT INFO */}
                    <div className="flex flex-col gap-4 tracking-wide text-center font-questrial sm:text-left text-xs sm:text-sm">

                        <div>
                            <p className="tracking-widest font-questrial text-sm sm:text-base">RANOWELL HOTEL</p>
                            <p>162/4 CHILAW ROAD</p>
                            <p>KOCHCHIKADE, NEGOMBO 11500</p>
                        </div>

                        <p className="font-questrial text-lg tracking-widest">
                            +94 112 433 751
                        </p>

                        <div className="mt-2">
                            <p className="uppercase tracking-widest text-[10px] sm:text-xs">INQUIRIES:</p>
                            <p>INFO@RANOWELLHOTEL.COM</p>
                        </div>

                        <div>
                            <p className="uppercase tracking-widest text-[10px] sm:text-xs">RESERVATIONS:</p>
                            <p>RESERVATIONS@RANOWELLHOTEL.COM</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center sm:justify-start gap-6 text-xl mt-4">
                            <FaFacebookF className="cursor-pointer hover:opacity-70" />
                            <FaTwitter className="cursor-pointer hover:opacity-70" />
                            <FaInstagram className="cursor-pointer hover:opacity-70" />
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="w-full border-t border-white/40 mt-14 mb-4"></div>

                {/* COPYRIGHT */}
                <p className="text-center font-questrial text-[10px] sm:text-sm tracking-wider opacity-90">
                    © {new Date().getFullYear()} Ranowell Hotel. All rights reserved. | Developed by
                </p>
            </div>
        </footer>
    );
};

export default Footer;
