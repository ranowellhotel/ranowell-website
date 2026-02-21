import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-6xl md:text-8xl font-marcellus text-[#5C2D84] mb-4">404</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="bg-[#5C2D84] text-white px-8 py-3 rounded-md tracking-wider text-sm hover:bg-[#4a1f6e] transition"
            >
                GO TO HOMEPAGE
            </Link>
        </div>
    );
};

export default NotFoundPage;
