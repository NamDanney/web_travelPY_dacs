import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationListPage from './pages/LocationListPage';
import LocationDetailPage from './pages/LocationDetailPage';
import PlanPage from './pages/PlanPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationListPage />} />
            <Route path="/locations/:id" element={<LocationDetailPage />} />
            <Route path="/plan" element={<PlanPage />} />
        </Routes>
    );
};

export default AppRouter;