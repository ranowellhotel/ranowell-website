// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@/routes";
import AOSProvider from "@/context/AOSProvider.tsx";

const App: React.FC = () => (
    <Router>
        <div className="flex flex-col min-h-screen">
            {/* Main app routes */}
            <AOSProvider>
                <div className="flex-1">
                    <AppRoutes />
                </div>
            </AOSProvider>
        </div>
    </Router>
);

export default App;
