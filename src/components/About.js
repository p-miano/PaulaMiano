import React from 'react';

function About() {
    return (
        <section id="about" className="p-5 bg-light">
            <div className="container">
                <div className="row"> {/* Aligning columns properly */}
                    <div className="col-md-12 mb-4"> {/* Heading and Subtitle */}
                        <h2 className="text-left">About</h2>
                        <div className="underline"></div> {/* For underline effect */}
                        <p className="lead text-left">I like to solve problems, line by line, crafting solutions through code.</p>
                    </div>
                </div>
                <div className="row align-items-center"> {/* Aligns image and text side by side */}
                    <div className="col-md-4"> {/* 1/3 of the width for the image */}
                        <img src={`${process.env.PUBLIC_URL}/images/about-profile-img.jpg`} alt="Profile of Paula Miano" className="img-fluid" />
                    </div>
                    <div className="col-md-8 text-left"> {/* 2/3 of the width for the text */}
                        <p>My journey into tech has been anything but traditional. I started in the world of business, navigating boardrooms and contracts, but along the way, I discovered my true passion: solving problems through technology. It all began with MS Access and VBA (if you know, you know!) and evolved into a love for coding, which I’ve been diving into with dedication.</p>
                        <p>Coming from a business background, I bring a unique perspective to development, especially when it comes to creating data-driven solutions. Now, instead of managing contracts, I’m writing the code that powers the systems behind them.</p>
                        <p>When I’m not coding, you’ll likely find me practicing French, hiking for lakes or by the sea. Moving to Canada has opened up a whole new world of stunning landscapes for me. The cold winters, though? Let’s just say I’m still figuring out how to embrace snow without turning into a popsicle!</p>
                        <p>I’ve also had my fair share of motorcycling adventures, which left me with a few extra screws—literally! But these days, I prefer a more laid-back lifestyle, enjoying a good glass of wine or a cold beer with friends. Cheers! Or as I like to say, Saúde! Maybe even Santé!</p>
                    </div>
                    {/* Download Resume Button - Centered */}
                    <div className="text-center mt-5"> 
                        <a href="/PaulaMiano/PaulaMiano.pdf" download className="btn btn-outline-primary">
                            Download My Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
