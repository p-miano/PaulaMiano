import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function Component for the Navigation Bar
function Navbar() {
    // Smooth scrolling function to scroll to sections by their ID
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home" style={{ fontSize: "1.75rem" }}>
                    Paula Miano | Full Stack Developer
                </a>

                {/* Responsive Toggler Button: Appears in mobile view */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links: Collapsible for mobile view */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Each button navigates to a different section using smooth scroll */}
                        <li className="nav-item">
                            <button className="nav-link active btn btn-link" onClick={() => scrollToSection('home')}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('about')}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('skills')}>Skills</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('github-stats')}>GitHub Languages</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('work-experience')}>Experience</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('education')}>Education</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('contact')}>Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
