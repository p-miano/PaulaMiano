import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container text-center py-4">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <h5>Paula Miano</h5>
                        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
                    </div>
                    <div className="col-md-12">
                        {/* Social media and contact icons */}
                        <a href="https://www.linkedin.com/in/paula-miano" target="_blank" rel="noopener noreferrer" className="footer-icon mx-2">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/p-miano" target="_blank" rel="noopener noreferrer" className="footer-icon mx-2">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="mailto:paulamiano@gmail.com" className="footer-icon mx-2">
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <p>&copy; {new Date().getFullYear()} Paula Miano. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
