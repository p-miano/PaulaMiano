import React from 'react';

const Education = () => {
    return (
        <section id="education" className="p-5 bg-light">
            <div className="container">
                {/* Section Title */}
                <h2 className="text-left">Education</h2>
                <div className="underline"></div>

                {/* Education Timeline */}
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">
                            2023-2024
                        </div>
                        <div className="timeline-content">
                            <h5>AEC - Information Technology Programmer-Analyst</h5>
                            <p>LaSalle College, Montreal, Canada</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            2010-2013
                        </div>
                        <div className="timeline-content">
                            <h5>Postgraduate Certificate in Strategic Contracting Management</h5>
                            <p>Federal University of Bahia, Brazil</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            2004-2007
                        </div>
                        <div className="timeline-content">
                            <h5>Bachelors in Business Administration</h5>
                            <p>State University of São Paulo, Brazil</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;