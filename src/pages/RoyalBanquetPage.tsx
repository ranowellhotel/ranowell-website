import React from "react";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import Img1 from "@/assets/banquet/royal_banquet/webp/royalHall40.webp";
import Img2 from "@/assets/banquet/royal_banquet/webp/royalHall41.webp";
import Img3 from "@/assets/banquet/royal_banquet/webp/royalHall42.webp";
import Img4 from "@/assets/banquet/royal_banquet/webp/royalHall43.webp";
import Img5 from "@/assets/banquet/royal_banquet/webp/royalHall44.webp";
import Img6 from "@/assets/banquet/royal_banquet/webp/royalHall45.webp";
import Img7 from "@/assets/banquet/royal_banquet/webp/royalHall46.webp";
import Img8 from "@/assets/banquet/royal_banquet/webp/royalHall47.webp";
import Img9 from "@/assets/banquet/royal_banquet/webp/royalHall48.webp";
import Img10 from "@/assets/banquet/royal_banquet/webp/royalHall49.webp";
import Img11 from "@/assets/banquet/royal_banquet/webp/royalHall50.webp";
import Img12 from "@/assets/banquet/royal_banquet/webp/royalHall51.webp";
import Img13 from "@/assets/banquet/royal_banquet/webp/royalHall52.webp";
import Img14 from "@/assets/banquet/royal_banquet/webp/royalHall53.webp";
import Img15 from "@/assets/banquet/royal_banquet/webp/royalHall54.webp";
import Img16 from "@/assets/banquet/royal_banquet/webp/royalHall55.webp";
import Img17 from "@/assets/banquet/royal_banquet/webp/royalHall56.webp";
import Img18 from "@/assets/banquet/royal_banquet/webp/royalHall57.webp";
import Img19 from "@/assets/banquet/royal_banquet/webp/royalHall58.webp";
import Img20 from "@/assets/banquet/royal_banquet/webp/royalHall59.webp";
import Img21 from "@/assets/banquet/royal_banquet/webp/royalHall60.webp";
import Img22 from "@/assets/banquet/royal_banquet/webp/royalHall61.webp";
import Img23 from "@/assets/banquet/royal_banquet/webp/royalHall62.webp";
import Img24 from "@/assets/banquet/royal_banquet/webp/royalHall63.webp";
import Img25 from "@/assets/banquet/royal_banquet/webp/royalHall64.webp";
import Img26 from "@/assets/banquet/royal_banquet/webp/royalHall65.webp";
import Img27 from "@/assets/banquet/royal_banquet/webp/royalHall66.webp";
import Img28 from "@/assets/banquet/royal_banquet/webp/royalHall67.webp";
import Img29 from "@/assets/banquet/royal_banquet/webp/royalHall68.webp";
import Img30 from "@/assets/banquet/royal_banquet/webp/royalHall69.webp";
import Img31 from "@/assets/banquet/royal_banquet/webp/royalHall70.webp";
import Img32 from "@/assets/banquet/royal_banquet/webp/royalHall71.webp";
import Img33 from "@/assets/banquet/royal_banquet/webp/royalHall72.webp";
import Img34 from "@/assets/banquet/royal_banquet/webp/royalHall73.webp";
import Img35 from "@/assets/banquet/royal_banquet/webp/royalHall74.webp";
import Img36 from "@/assets/banquet/royal_banquet/webp/royalHall75.webp";
import Img37 from "@/assets/banquet/royal_banquet/webp/royalHall76.webp";
import Img38 from "@/assets/banquet/royal_banquet/webp/royalHall77.webp";
import Img39 from "@/assets/banquet/royal_banquet/webp/royalHall78.webp";
import Img40 from "@/assets/banquet/royal_banquet/webp/royalHall79.webp";
import Img41 from "@/assets/banquet/royal_banquet/webp/royalHall80.webp";
import Img42 from "@/assets/banquet/royal_banquet/webp/royalHall81.webp";
import Img43 from "@/assets/banquet/royal_banquet/webp/royalHall82.webp";
import Img44 from "@/assets/banquet/royal_banquet/webp/royalHall83.webp";
import Img45 from "@/assets/banquet/royal_banquet/webp/royalHall84.webp";
import Img46 from "@/assets/banquet/royal_banquet/webp/royalHall85.webp";
import Img47 from "@/assets/banquet/royal_banquet/webp/royalHall86.webp";
import Img48 from "@/assets/banquet/royal_banquet/webp/royalHall87.webp";
import Img49 from "@/assets/banquet/royal_banquet/webp/royalHall88.webp";
import Img50 from "@/assets/banquet/royal_banquet/webp/royalHall89.webp";
import Img51 from "@/assets/banquet/royal_banquet/webp/royalHall90.webp";
import Img52 from "@/assets/banquet/royal_banquet/webp/royalHall91.webp";
import Img53 from "@/assets/banquet/royal_banquet/webp/royalHall92.webp";

// Image list
const images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
    Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
    Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29, Img30,
    Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38, Img39, Img40,
    Img41, Img42, Img43, Img44, Img45, Img46, Img47, Img48, Img49, Img50,
    Img51, Img52, Img53
];

const RoyalBanquetPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">

            {/* BACK BUTTON */}
            <div className="max-w-6xl mx-auto px-4 mt-8">
                <button
                    onClick={() => navigate(-1)}
                    className="
                        flex items-center gap-2
                        text-sm tracking-widest uppercase
                        text-gray-600 hover:text-purple-700
                        transition-all duration-300
                        hover:-translate-x-1
                    "
                >
                    ← Back
                </button>
            </div>

            {/* PAGE TITLE */}
            <div className="text-center mt-10">
                <h2 className="text-[22px] tracking-widest font-marcellus text-xl md:text-3xl text-purple-700 font-medium">
                    Royal Banquet
                </h2>
            </div>

            {/* GALLERY GRID */}
            <div className="max-w-6xl mx-auto px-4 pb-20 mt-10
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                    >
                        <ImageWithLoader
                            src={src}
                            alt={`Royal Banquet ${index + 1}`}
                            loading="lazy"
                            containerClassName="w-full h-[300px] rounded shadow-sm"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoyalBanquetPage;
