// src/layouts/MainLayout.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* adjust top margin if navbar is fixed; otherwise you can remove mt-16 */}
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default MainLayout;
