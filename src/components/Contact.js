import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="p-5 bg-light">
            <div className="container">
                {/* Contact Title */}
                <h2 className="text-left">Contact</h2>
                <div className="underline"></div>

                <div className="row">
                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <div className="contact-info">
                            <div className="mb-3">
                                <i className="bi bi-envelope-fill contact-icon"></i> {/* Email Icon */}
                                <p>Email Me</p>
                                <a href="mailto:paulamiano@gmail.com">paulamiano@gmail.com</a>
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-linkedin contact-icon"></i> {/* LinkedIn Icon */}
                                <p>LinkedIn</p>
                                <a href="https://www.linkedin.com/in/paula-miano" target="_blank" rel="noopener noreferrer">linkedin.com/in/paula-miano</a>
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-github contact-icon"></i> {/* GitHub Icon */}
                                <p>GitHub</p>
                                <a href="https://github.com/p-miano" target="_blank" rel="noopener noreferrer">github.com/p-miano</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-8">
                        <form
                            action="https://getform.io/f/bmdpldpa"  // Getform endpoint
                            method="POST"
                        >
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </div>

                            {/* Honeypot field to prevent spam */}
                            <input
                                type="hidden"
                                name="_gotcha"
                                style={{ display: 'none' }}
                            />

                            <div className="text-center">
                            <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;