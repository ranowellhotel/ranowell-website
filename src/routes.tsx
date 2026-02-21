import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "@/layouts/MainLayout";

// Lazy Loaded Pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const WeddingsPage = lazy(() => import("@/pages/WeddingsPage"));
const AccommodationPage = lazy(() => import("@/pages/AccomodationPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const KingsCourtPage = lazy(() => import("@/pages/KingsCourtPage.tsx"));
const RoyalBanquetPage = lazy(() => import("@/pages/RoyalBanquetPage.tsx"));
const SparkleLoungePage = lazy(() => import("@/pages/SparkleLoungePage.tsx"));
const FactSheetPage = lazy(() => import("@/pages/FactSheetPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage.tsx"));

// Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>
  </div>
);

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
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

                {/* ---------------- ACCOMMODATION PAGE ---------------- */}
                <Route
                    path="/accommodation"
                    element={
                        <MainLayout>
                            <AccommodationPage />
                        </MainLayout>
                    }
                />

                {/* ---------------- GALLERY PAGE ---------------- */}
                <Route
                    path="/gallery"
                    element={
                        <MainLayout>
                            <GalleryPage />
                        </MainLayout>
                    }
                />

                {/* ---------------- BANQUET PAGES ---------------- */}
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

                {/* ---------------- FACT SHEET PAGE ---------------- */}
                <Route
                    path="/fact-sheet"
                    element={
                        <MainLayout>
                            <FactSheetPage />
                        </MainLayout>
                    }
                />

                {/* ---------------- 404 PAGE ---------------- */}
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <NotFoundPage />
                        </MainLayout>
                    }
                />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
