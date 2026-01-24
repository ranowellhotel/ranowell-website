import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "@/layouts/MainLayout";

// Pages
import HomePage from "@/pages/HomePage";
import WeddingsPage from "@/pages/WeddingsPage";
import AccommodationPage from "@/pages/AccomodationPage";
import GalleryPage from "@/pages/GalleryPage";
import KingsCourtPage from "@/pages/KingsCourtPage.tsx";
import RoyalBanquetPage from "@/pages/RoyalBanquetPage.tsx";
import SparkleLoungePage from "@/pages/SparkleLoungePage.tsx";
import FactSheetPage from "@/pages/FactSheetPage.tsx";

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

        <Route
            path="/kingscourt"
            element={
                <MainLayout>
                    <KingsCourtPage />
                </MainLayout>
            }
        />

        <Route
            path="/royalbanquet"
            element={
                <MainLayout>
                    <RoyalBanquetPage />
                </MainLayout>
            }
        />

        <Route
            path="/sparklelounge"
            element={
                <MainLayout>
                    <SparkleLoungePage />
                </MainLayout>
            }
        />

        <Route
            path="/fact-sheet"
            element={
                <MainLayout>
                    <FactSheetPage />
                </MainLayout>
            }
        />


        </Routes>
    );
};

export default AppRoutes;
