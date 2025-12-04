// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@/routes";

const App: React.FC = () => (
    <Router>
        <div className="flex flex-col min-h-screen">
            {/* Main app routes */}
            <div className="flex-1">
                <AppRoutes />
            </div>
        </div>
    </Router>
);

export default App;
