import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "@/layouts/MainLayout";

// Pages
import HomePage from "@/pages/HomePage";
import WeddingsPage from "@/pages/WeddingsPage";
import AccommodationPage from "@/pages/AccomodationPage";
import GalleryPage from "@/pages/GalleryPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* ---------------- HOME PAGE ---------------- */}
            <Route
                path="/"
                element={
                    <MainLayout>
                        <HomePage />
                    </MainLayout>
                }
            />

            {/* ---------------- WEDDINGS PAGE ---------------- */}
            <Route
                path="/weddings"
                element={
                    <MainLayout>
                        <WeddingsPage />
                    </MainLayout>
                }
            />

            {/* ---------------- FUTURE PAGES ---------------- */}


      <Route
        path="/accommodation"
        element={
          <MainLayout>
            <AccommodationPage />
          </MainLayout>
        }
      />

      <Route
        path="/gallery"
        element={
          <MainLayout>
            <GalleryPage />
          </MainLayout>
        }
      />
        </Routes>
    );
};

export default AppRoutes;
