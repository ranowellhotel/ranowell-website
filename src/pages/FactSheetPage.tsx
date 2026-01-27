import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FactSheetPage: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full bg-white">

            {/* BACK BUTTON */}
            <div className="max-w-7xl mx-auto px-4 pt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="text-sm tracking-widest uppercase text-gray-600 hover:text-purple-700 transition"
                >
                    ← Back
                </button>
            </div>

            {/* FACT SHEET IMAGE */}
            <div className="max-w-7xl mx-auto px-4 py-10 relative min-h-[50vh] flex items-center justify-center">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>
                    </div>
                )}
                <img
                    src="/images/ranowell-fact-sheet.webp"
                    alt="Ranowell Hotel & Banquets Fact Sheet"
                    className={`w-full h-auto rounded-lg shadow-md transition-opacity duration-500 ${
                        isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsLoading(false)}
                />
            </div>

        </div>
    );
};

export default FactSheetPage;
