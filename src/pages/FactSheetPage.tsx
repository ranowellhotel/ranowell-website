import React from "react";
import { useNavigate } from "react-router-dom";

const FactSheetPage: React.FC = () => {
    const navigate = useNavigate();

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
            <div className="max-w-7xl mx-auto px-4 py-10">
                <img
                    src="/images/ranowell-fact-sheet.webp"
                    alt="Ranowell Hotel & Banquets Fact Sheet"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

        </div>
    );
};

export default FactSheetPage;
