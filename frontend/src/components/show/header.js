import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/show/header.css'; // Đường dẫn chính xác đến file CSS

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Travel Explorer</h1>
                <nav>   
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li><Link to="/plan">Plan</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;