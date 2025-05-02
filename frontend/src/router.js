import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationListPage from './pages/LocationListPage';
import LocationDetailPage from './pages/LocationDetailPage';
import PlanPage from './pages/PlanPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/auth/PrivateRoute';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationListPage />} />
            <Route path="/locations/:id" element={<LocationDetailPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={
                                <PrivateRoute>
                                    <ProfilePage />
                                </PrivateRoute>
                            } 
                        />
        </Routes>
    );
};

export default AppRouter;