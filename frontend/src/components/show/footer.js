import React from 'react';
import '../../styles/show/footer.css'; // Đường dẫn chính xác đến file CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;