import React from 'react';

const Experience = () => {
    return (
        <section id="work-experience" className="p-5 bg-light">
            <div className="container">
                {/* Section Title */}
                <h2 className="text-left">Work Experience</h2>
                <div className="underline"></div>

                {/* Experience Timeline */}
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">
                            Oct 2021 - Apr 2023
                        </div>
                        <div className="timeline-content">
                            <h5>Contract Manager</h5>
                            <p>Petrobras, Santos, Brazil</p>
                            <ul>
                                <li>Negotiated deals like a pro (and kept everyone happy!).</li>
                                <li>Managed contracts through every stage—yes, even the boring parts.</li>
                                <li>Kept an eagle eye on contract performance to make sure everything ran smoothly.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">Negotiation</span>
                                <span className="skill-badge">Conflict Resolution</span>
                                <span className="skill-badge">Teamwork</span>
                                <span className="skill-badge">Problem Solving</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            Oct 2017 - Sep 2021
                        </div>
                        <div className="timeline-content">
                            <h5>Business Intelligence Analyst</h5>
                            <p>Petrobras, Santos, Brazil</p>
                            <ul>
                                <li>Created dashboards that made data look cool.</li>
                                <li>Turned raw data into actionable insights, like a data wizard.</li>
                                <li>Collaborated with everyone to make the business run smoother.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">Power BI</span>
                                <span className="skill-badge">SQL</span>
                                <span className="skill-badge">ETL</span>
                                <span className="skill-badge">Analytical Thinking</span>
                                <span className="skill-badge">Communication and Collaboration</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            Oct 2014 - Oct 2017
                        </div>
                        <div className="timeline-content">
                            <h5>Contract Inspector</h5>
                            <p>Petrobras, Rio de Janeiro, Brazil</p>
                            <ul>
                                <li>Inspected projects like Sherlock, but for contracts and compliance.</li>
                                <li>Ensured all invoices and work reports were accurate and on point.</li>
                                <li>Kept contractors and internal teams communicating smoothly.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">EHS</span>
                                <span className="skill-badge">Compliance and Standards</span>
                                <span className="skill-badge">Attention to Detail</span>
                                <span className="skill-badge">Client/Stakeholder Management</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            Apr 2008 - Oct 2014
                        </div>
                        <div className="timeline-content">
                            <h5>Business Process Analyst</h5>
                            <p>Petrobras, São Paulo, Brazil</p>
                            <ul>
                                <li>Streamlined processes like a productivity ninja.</li>
                                <li>Implemented data-driven improvements that made workflows sing.</li>
                                <li>Worked with teams to deploy systems that actually worked.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">Process Optimization</span>
                                <span className="skill-badge">Strategic Planning</span>
                                <span className="skill-badge">Continuous Improvement</span>
                                <span className="skill-badge">Project Management</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;