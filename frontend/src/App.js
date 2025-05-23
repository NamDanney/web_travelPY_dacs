import React, { useState, useEffect } from 'react';
import AppRouter from './router';
import Header from './components/show/header';
import Footer from './components/show/footer';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Prevent scrolling when mobile menu is open
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <AuthProvider>
            <div className="app-container">
                <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
                <main className="main-content">
                    <AppRouter />
                </main>
                <Footer />
                <ToastContainer />
            </div>
        </AuthProvider>
    );
};

export default App;