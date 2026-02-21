import React, { useState } from "react";

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
                                                             className,
                                                             containerClassName,
                                                             alt,
                                                             ...props
                                                         }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden bg-gray-100 ${containerClassName || ""}`}>
            {/* Loader */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-8 h-8 border-2 border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Image */}
            <img
                {...props}
                alt={alt}
                onLoad={(e) => {
                    setIsLoading(false);
                    if (props.onLoad) props.onLoad(e);
                }}
                className={`
                    transition-opacity duration-500 ease-in-out
                    ${isLoading ? "opacity-0" : "opacity-100"}
                    ${className || ""}
                `}
            />
        </div>
    );
};

export default ImageWithLoader;
