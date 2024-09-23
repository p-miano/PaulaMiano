import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <section
            id="home"        >
            {/* Container for the content of the home section */}
            <div className="home-content">
                {/* Main heading with introduction */}
                <h1>Hi, I'm Paula!</h1>
                {/* A short description */}
                <p>I'm on a journey to mastering software development.</p>
            </div>
        </section>
    );
}

export default Home;
