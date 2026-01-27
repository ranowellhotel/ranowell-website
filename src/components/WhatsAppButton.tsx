import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const WhatsAppButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleConfirm = () => {
        setShowModal(false);
        // Using the first contact number found in the footer: +94 77 040 4050
        window.open("https://wa.me/94770404050", "_blank");
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 cursor-pointer"
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp size={32} />
            </button>

            {/* Redirect Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Connect on WhatsApp
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            You are being redirected to WhatsApp to chat with our team. Would you like to proceed?
                        </p>
                        <div className="flex justify-end gap-3">
                            <Button variant="outline" onClick={() => setShowModal(false)}>
                                Cancel
                            </Button>
                            <Button 
                                onClick={handleConfirm} 
                                className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
                            >
                                Continue to WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppButton;
