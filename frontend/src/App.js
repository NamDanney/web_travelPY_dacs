import React from 'react';
import AppRouter from './router';
import Header from './components/show/header';
import Footer from './components/show/footer';

const App = () => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '80vh', padding: '1rem' }}>
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
};

export default App;