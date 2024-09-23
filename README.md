# My Portfolio Website

## Initial Setup and Deploment to GitHub Pages

* Created React project

```console
npx create-react-app .
```

`npx` is a package runner tool that comes with Node.js, used to run packages without having to globally install them.
`create-react-app` is a command that sets up a new React project with all the necessary boilerplate and configurations (Webpack, Babel, etc.).
`.` indicates the current directory, so the React project files are created in the folder you're already in.

* Installed Bootstrap.

```console
npm install bootstrap
```

* Imported Bootstrap by adding the following code to src/index.jsx.

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

* Started the React development server on <http://localhost:3000>.

```console
`npm start` 
```

* Commited and pushed changes into GitHub repository.

```console
git add .
git commit -m "Set up React project and added Bootstrap"
git push origin main
```

* Installed the gh-pages package to deploy to GitHub Pages.

```console
npm install gh-pages --save-dev
```

* Added the homepage name to package.json file.

```json
"homepage": "https://p-miano.github.io/PaulaMiano",
```

* Added predeploy and deploy scripts to the scripts section of package.json.

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

* Built and deployed app.

```console
npm run deploy
```

## Development

### Global Styles

The global styles set a foundation for the entire portfolio, ensuring consistent dimensions and styling across all pages and sections.

* **html, body, #root**
These styles make sure that the webpage takes up the full height and width of the viewport, which is essential for elements like the home section to stretch fully across the screen. Overflow is disabled horizontally to avoid unwanted scrollbars.

```css
html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
}
```

* **Section Customization**
Every section has uniform padding and center alignment. The scroll-margin-top property ensures that the navbar's height is accounted for when using internal links to scroll to sections.

```css
section {
  padding: 4rem; /* Provides spacing for sections */
  text-align: center;
  scroll-margin-top: 70px; /* Adjust according to the navbar height */
}
```

### Components

#### Navbar

* **scrollToSection(id) Function** 
The scrollToSection function is responsible for scrolling the page smoothly to the section corresponding to the provided ID. It uses JavaScript's `document.getElementById` method and calls scrollIntoView with the `{ behavior: 'smooth' }` option.
* **JSX Structure** 
The JSX structure is wrapped in a `<nav>` element with Bootstrap classes for styling and responsiveness.
* **Branding** 
The brand name is a link `(<a>)` with the navbar-brand class, set to redirect to the home section `(#home)`.
* **Responsive Toggler Button** 
The button appears on smaller screens and collapses the navbar into a hamburger icon.
* **Navigation Links** 
The navigation links have been replaced with `<button>` elements for better accessibility and use the scrollToSection function to scroll to different sections of the page.

```javascript
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home" style={{ fontSize: "1.75rem" }}>
                    Paula Miano | Full Stack Developer
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
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
```

* **Styling**
  * A fixed height is set for the navbar to maintain consistency across different screen sizes. The font-family is set to 'Poppins', a modern sans-serif font, which enhances readability and gives the navbar a clean and professional look.
  * **Branding:** The `.navbar-brand` class is used to style the brand name with increased font size and a bold weight. The color is set to a dark shade for better contrast.
  * **Media Queries for Mobile Devices:** When the viewport width is smaller (mobile devices), the font size of the brand is reduced to ensure it fits within the smaller navbar.
  * **Navbar Links:** The `.nav-link` class styles the navigation buttons. It increases the size of the text, adds spacing between the links, and sets a default color. The links behave like buttons, with borders removed and the cursor changing to a pointer on hover.
  * **Active and Hover States:** When a link is active, its color changes to pink. This is the same color applied when hovering over a link, giving users a clear visual indication.
  * **Button Link Styling:** The `.btn-link` class removes padding and underlining from buttons so that they resemble traditional navigation links.

```css
/* Navbar Styling */
/* =============================== */
.navbar {
  height: 70px; /* Fixed height for the navbar */
  font-family: 'Poppins', sans-serif; /* Modern, clean font */
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.75rem; /* Increase font size of the branding */
  color: #2c3e50; /* Darker shade for the logo */
}

/* Media query for mobile devices */
@media (max-width: 576px) {
  .navbar-brand {
    font-size: 1.25rem; /* Decrease the font size on small screens */
  }
}

.navbar-nav .nav-link {
  font-size: 1.125rem; /* Increase font size of the links */
  padding-left: 1.5rem; /* More space between links */
  padding-right: 1.5rem;
  color: #6c757d; /* Default color for links */
  cursor: pointer; /* Pointer changes to hand on hover */
  background-color: transparent; /* Ensure buttons look like links */
  border: none; /* Remove button borders */
}

.navbar-nav .nav-link.active {
  color: #e83e8c; /* Highlight active link in pink */
}

.navbar-nav .nav-link:hover {
  color: #e83e8c; /* Pink hover effect on nav links */
}

.navbar-nav .btn-link {
  padding: 0; /* Removes padding from the button to make it resemble a link */
  font-size: inherit; /* Inherit font size from parent element */
  text-decoration: none; /* Remove underline from the button */
}
```


#### Home

* The `Home` component is a functional React component that serves as the landing section of the portfolio website. It introduces the developer, Paula, and gives a brief description of her development journey. The section is styled to fill the full height of the viewport, with a background image, and uses a flexbox layout to align content at the bottom of the screen.

* **JSX Structure:** The JSX structure includes a `<section>` element with the id `"home"` which serves as the container for the home section. Inside this section is a `div` with the class `"home-content"` that holds the main heading (`<h1>`) and a paragraph (`<p>`) that gives a brief introduction.

```javascript
import React from 'react';

function Home() {
    return (
        <section id="home">
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
```

* **Styling:** The CSS ensures the content appears in the center of the screen with a fade-in animation. The background image is fully covered across the section, and an overlay adds a subtle visual effect.

```css
/* Home Section Styling */
/* =============================== */
#home {
  position: relative;
  height: 100vh; /* Full viewport height to cover the screen */
  background-image: url(/build/images/home-illustration.webp); /* Background image link */
  background-size: cover; /* Ensures the background image covers the entire section */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  display: flex; /* Enables flexbox for child alignment */ 
  justify-content: center; /* Centers the content horizontally */
  align-items: flex-end; /* Aligns the content vertically at the bottom */
  text-align: center; /* Centers the text horizontally */
  padding-bottom: 25vh; /* Adds space at the bottom of the section for aesthetic positioning */
  width: 100%; /* Ensures the section takes the full width of the viewport */
}

/* Overlay layer to add a white transparency effect over the background */
#home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3); /* Adds a semi-transparent white overlay */
  z-index: 1; /* Positions the overlay behind the content but above the background */
}

/* Container for the text content within the home section */
#home .home-content {
  z-index: 2; /* Ensures the content is above the overlay and background */
  max-width: 800px; /* Limits the width of the content to prevent it from stretching too far */
  color: white; /* Sets the text color to white */
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7); /* Adds a shadow to the text for better readability */
  padding: 2rem; /* Adds padding inside the content container */
  background-color: rgba(0, 0, 0, 0.2); /* Adds a semi-transparent black background for better contrast with text */
  border-radius: 10px; /* Rounds the corners of the content box */
}

/* Heading styles */
#home h1 {
  font-size: 4rem; /* Large heading size */
  font-family: 'Poppins', sans-serif; /* Custom font for a modern, clean look */
  margin-bottom: 1rem; /* Adds space below the heading */
  font-weight: bold; /* Makes the heading text bold */
  color: #ff6b6b; /* Sets the heading color to a light red (or coral) */
}

/* Paragraph text styling */
#home p {
  font-size: 1.5rem; /* Sets the paragraph text size */
  font-family: 'Poppins', sans-serif; /* Uses the same clean font for consistency */
  margin: 0.5rem 0; /* Adds vertical spacing for the paragraph */
  color: #f0f0f0; /* Sets the paragraph color to a light shade of white */
}

/* Animation for the home content (fade-in effect) */
@keyframes fadeIn {
  from { opacity: 0; } /* Starts with content fully transparent */
  to { opacity: 1; } /* Ends with content fully visible */
}

.home-content {
  animation: fadeIn 2s ease-in-out; /* Applies the fade-in animation over 2 seconds */
}
```

#### About

* The `About` component presents a detailed introduction about Paula Miano, her journey into the world of development, and personal interests. It also includes an image and a downloadable resume button.

* **JSX Structure:** The section is divided into two parts: a heading with an introductory text and a two-column layout featuring an image and a text description.
  * The first column contains the profile image.
  * The second column features a detailed text about Paula's background and personal interests.
  * At the bottom, a centered "Download My Resume" button is provided for users to download her resume.

```javascript
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
                        <p>My journey into tech has been anything but traditional...</p>
                        <p>Coming from...</p>
                        <p>When I’m not coding...</p>
                        <p>I’ve also had...</p>
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
```

* **Styling:** The styling is focused on achieving a clean and professional look. The background of the section is light, with appropriate spacing and alignment. The profile image and the descriptive text are aligned side by side using a responsive grid layout. The download resume button is styled with a pink border and text color, transitioning to a pink background on hover.

```css
/* About Section Styling */
/* =============================== */
#about {
  background-color: #f8f9fa; /* Light background for contrast */
  padding: 4rem 0; /* Top and bottom padding for spacing */
}

#about h2 {
  font-size: 2.5rem; /* Larger font size for the About heading */
  font-weight: bold; /* Bold for emphasis */
  text-align: left; /* Left-align the heading */
}

.underline {
  width: 50px; /* Set the underline width */
  height: 3px; /* Set the underline thickness */
  background-color: #e83e8c; /* Pink color for the underline */
  margin: 10px 0 40px 0; /* Spacing above and below the underline */
}

#about p.lead {
  font-size: 1.25rem; /* Larger font size for lead paragraph */
  color: #6c757d; /* Gray color for the text */
  text-align: left; /* Left-align the text */
  margin-bottom: 20px; /* Bottom margin for spacing */
}

#about .text-left {
  text-align: left; /* Ensure all text is left-aligned */
}

#about img {
  margin-bottom: 20px; /* Space below the image */
  object-fit: cover; /* Ensure image covers the allocated area without stretching */
}

/* Download Resume Button Styling */
/* =============================== */
.btn-outline-primary {
  font-size: 1.125rem; /* Adjust font size of the button text */
  padding: 0.75rem 2rem; /* Padding inside the button for a larger click area */
  border-radius: 50px; /* Round the button corners */
  border-color: #e83e8c !important; /* Pink border color */
  color: #e83e8c !important; /* Pink text color */
}

.btn-outline-primary:hover {
  background-color: #e83e8c !important; /* Change to pink background on hover */
  color: white !important; /* White text color on hover */
  border-color: #e83e8c !important; /* Keep the pink border on hover */
}
```

#### Skills

* The `Skills` section presents Paula's technical abilities in a card-based format. Each card focuses on a different area of expertise, from programming languages to cloud services. Icons are used to visually represent each skill category, enhancing the layout and readability.

* **Installing React Icons**

```console
npm install react-icons --save
```

* **JSX Structure:** The section is structured into a grid layout using Bootstrap's row and col-md-6 classes to display the cards in a responsive two-column format. Each card contains an icon, title, and descriptive text. The descriptive text often includes a humorous tone to make the portfolio more engaging.

```javascript
import React from 'react';
import { FaCode, FaCogs, FaDatabase, FaCloud, FaDocker, FaMobileAlt, FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id="skills" className="p-5 bg-light">
            <div className="container">
                <h2 className="text-left">Skills</h2>
                <div className="underline"></div>

                <div className="row">
                    {/* Programming Languages */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <FaCode className="icon mb-3" size={50} />
                                <h5 className="card-title">Programming Languages</h5>
                                <p className="skill-text">
                                    <strong>C#, Java</strong><br />
                                    <span className="joke-text">– My battle-hardened warriors, always by my side in the toughest coding quests.</span><br />
                                    <strong>JavaScript, HTML, CSS</strong><br />
                                    <span className="joke-text">– Reliable partners, we tackle front-end challenges like a dynamic trio.</span><br />
                                    <strong>PHP, Python</strong><br />
                                    <span className="joke-text">– We’ve had our adventures, but we're still on good terms.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <FaCogs className="icon mb-3" size={50} />
                                <h5 className="card-title">Frameworks</h5>
                                <p className="skill-text">
                                    <strong>ASP.Net Core MVC, React</strong><br />
                                    <span className="joke-text">– My ride-or-die frameworks, making me look good.</span><br />
                                    <strong>Bootstrap</strong><br />
                                    <span className="joke-text">– Fashion for websites. I keep things slick.</span><br />
                                    <strong>Razor Pages</strong><br />
                                    <span className="joke-text">– Like catching up with an old friend.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Continue with other skills... */}
                </div>
            </div>
        </section>
    );
};

export default Skills;
```

* **Styling:** The CSS for the `Skills` section uses card-based designs with hover effects. The icons are placed in the top-left corner of the cards to visually distinguish the skill categories. The text includes a main description (`skill-text`) and a humorous secondary description (`joke-text`).

```css
/* Skills Section Styling */
/* =============================== */

#skills {
  background-color: #f8f9fa; /* Light grey background */
  padding: 4rem 0; /* Vertical padding */
}

#skills h2 {
  font-size: 2.5rem; /* Large heading size */
  font-weight: bold; /* Bold heading */
  text-align: left; /* Align the heading to the left */
}

.underline {
  width: 50px; /* Width of the pink underline */
  height: 3px; /* Height of the pink underline */
  background-color: #e83e8c; /* Pink color */
  margin: 10px 0 40px 0; /* Margin for spacing */
}

.card {
  border: none; /* Remove border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
  position: relative; /* Relative positioning for icons */
}

.card:hover {
  transform: scale(1.05); /* Slight zoom-in on hover */
}

/* Icon Styling */
.icon {
  position: absolute; /* Icon placed at the top-left of the card */
  top: 15px;
  left: 15px;
  color: #6c757d; /* Grey color for icons */
}

/* Content styling for the card body */
.card-body {
  padding: 2rem; /* Padding inside the card */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  text-align: center; /* Horizontally center the content */
}

.card-title {
  font-weight: bold; /* Bold title */
  color: #e83e8c !important; /* Pink color for the title */
  margin-top: 1rem; /* Margin between icon and title */
}

/* Skill text styling */
.skill-text {
  font-size: 1.1rem; /* Slightly larger text for skills */
  font-weight: bold;
  color: #2c3e50; /* Darker shade for skill names */
}

/* Joke text styling */
.joke-text {
  font-size: 0.9rem; /* Smaller size for joke lines */
  color: #6c757d; /* Light grey color */
}

/* Ensure card takes up full height */
.card {
  height: 100%; /* Make card fill the container's height */
}

.card-body {
  height: 100%; /* Make card body fill the card's height */
}
```

#### Portfolio

* The `Portfolio` component dynamically showcases my projects categorized into different sections: Web, Desktop, Mobile, and API. It allows filtering by category and provides links to both the GitHub repository and the deployed site (if available).

* **JSX Structure:** The portfolio is rendered as a grid of cards. Each card represents a project and contains:
  * A title
  * A short description
  * Buttons linking to the GitHub repository and a live deployed site (if applicable).

```javascript
import React, { useState, useEffect } from 'react';

const projectsData = [
    {
        id: 1,
        title: "My Portfolio Website",
        category: "Web",
        description: "Responsive website built with React and Bootstrap, featuring dynamic sections and showcasing my skills and projects.",
        githubLink: "https://github.com/p-miano/PaulaMiano.git",
        deployedLink: "https://p-miano.github.io/PaulaMiano"
    },
    {
        id: 2,
        title: "Hi Tech Distribution",
        category: "Desktop",
        description: "Windows application for managing inventory and orders.",
        githubLink: "https://github.com/p-miano/MultiTier-HiTechDistributionManagementSystem.git",
        deployedLink: null
    },
    {
        id: 3,
        title: "Tech Books",
        category: "Web",
        description: "Web application for managing books.",
        githubLink: "https://github.com/p-miano/WebServerII-TechBooksV2.git",
        deployedLink: null
    },
    {
        id: 4,
        title: "ToDo App",
        category: "Mobile",
        description: "Android application for managing tasks.",
        githubLink: "https://github.com/p-miano/Android-TaskManager.git",
        deployedLink: null
    },
    {
        id: 5,
        title: "City Info API",
        category: "API",
        description: "Web API designed to provide detailed information about cities and their points of interest.",
        githubLink: "https://github.com/p-miano/CityInfoAPI.git",
        deployedLink: null
    }
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    useEffect(() => {
        let projectsToDisplay = [...projectsData];

        if (selectedCategory !== 'All') {
            projectsToDisplay = projectsToDisplay.filter(project => project.category === selectedCategory);
        }

        projectsToDisplay.sort((a, b) => a.title.localeCompare(b.title));
        setFilteredProjects(projectsToDisplay);
    }, [selectedCategory]);

    return (
        <section id="portfolio" className="p-5 bg-light">
            <div className="container">
                <h2 className="text-left">Portfolio</h2>
                <div className="underline"></div>

                <div className="portfolio-filters mb-4">
                    <button className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('All')}>All</button>
                    <button className={`btn ${selectedCategory === 'API' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('API')}>API</button>
                    <button className={`btn ${selectedCategory === 'Desktop' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Desktop')}>Desktop</button>
                    <button className={`btn ${selectedCategory === 'Mobile' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Mobile')}>Mobile</button>
                    <button className={`btn ${selectedCategory === 'Web' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Web')}>Web</button>
                </div>

                <div className="row">
                    {filteredProjects.map(project => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div className="card h-100 d-flex flex-column">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <div className="portfolio-buttons mt-auto">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                                            View on GitHub
                                        </a>
                                        {project.deployedLink && (
                                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                                                Visit Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
```

* **Styling:** The styling for the Portfolio section includes the use of Bootstrap’s grid layout for responsive design. The cards have a hover effect for interaction, and buttons are styled to match the theme of the portfolio.

```css
/* Portfolio Section Styling */
/* =============================== */
#portfolio h2 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
}

.portfolio-filters .btn {
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  border-radius: 50px; /* Rounded filter buttons */
}

.portfolio-filters .btn-primary {
  background-color: #e83e8c; /* Pink active filter */
  color: white;
  border-color: #e83e8c;
}

.portfolio-filters .btn-light {
  background-color: #f8f9fa;
  color: #6c757d;
}

.card {
  width: 100%; /* Ensure the card takes full width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px); /* Lift card on hover */
}

/* Portfolio Button Styling */
.portfolio-buttons {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  justify-content: flex-end; /* Ensure buttons stay at the bottom */
  gap: 0.5rem; /* Small space between the buttons */
  margin-top: auto; /* Push buttons to the bottom */
}

.portfolio-buttons a {
  flex: 1; /* Make both buttons take full width of the container */
  text-align: center;
  padding: 0.5rem; /* Reduced padding for smaller button height */
  font-size: 1rem;
  border-radius: 5px; /* Small rounded corners */
  background-color: transparent;
  border-color: #e83e8c;
  color: #e83e8c;
}

.portfolio-buttons a:hover {
  background-color: #e83e8c;
  color: white;
  border-color: #e83e8c;
}

/* Ensure the card takes full height */
.card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Make sure the card takes the full height */
}

/* Ensure the card body takes full height */
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between content and buttons */
}

/* Ensure the buttons are always at the bottom */
.portfolio-buttons {
  margin-top: auto; /* Push buttons to the bottom */
}
```

#### Work Experience

* The `Work Experience` section in the portfolio uses a timeline format to display job roles and achievements chronologically. Each timeline item features a job title, company information, and bullet points highlighting key responsibilities or accomplishments. In addition, each role is accompanied by skill badges representing the technologies and skills utilized during the job.

* **JSX Structure:** Each timeline item contains:
  * A date range for the job position.
  * A title for the role.
  * A list of key responsibilities.
  * Skill badges at the bottom to indicate areas of expertise.

```javascript
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
                            <p>PETROBRAS PETROLEO BRASILEIRO SA, Santos, São Paulo, Brazil</p>
                            <ul>
                                <li>Negotiated deals like a pro (and kept everyone happy!).</li>
                                <li>Managed contracts through every stage—yes, even the boring parts.</li>
                                <li>Kept an eagle eye on contract performance to make sure everything ran smoothly.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">Negotiation</span>
                                <span className="skill-badge">Conflict Resolution</span>
                                <span className="skill-badge">Teamwork</span>
                                <span className="skill-badge">Contract Negotiation</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            Oct 2017 - Sep 2021
                        </div>
                        <div className="timeline-content">
                            <h5>Business Intelligence Analyst</h5>
                            <p>PETROBRAS PETROLEO BRASILEIRO SA, Santos, São Paulo, Brazil</p>
                            <ul>
                                <li>Created dashboards that made data look cool.</li>
                                <li>Turned raw data into actionable insights, like a data wizard.</li>
                                <li>Collaborated with everyone to make the business run smoother.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">Power BI</span>
                                <span className="skill-badge">SQL</span>
                                <span className="skill-badge">ETL</span>
                                <span className="skill-badge">VBA</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            Oct 2014 - Oct 2017
                        </div>
                        <div className="timeline-content">
                            <h5>Contract Inspector</h5>
                            <p>PETROBRAS PETROLEO BRASILEIRO SA, Rio de Janeiro, Brazil</p>
                            <ul>
                                <li>Inspected projects like Sherlock, but for contracts and compliance.</li>
                                <li>Ensured all invoices and work reports were accurate and on point.</li>
                                <li>Kept contractors and internal teams communicating smoothly.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">EHS</span>
                                <span className="skill-badge">Contract Compliance</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            Apr 2008 - Oct 2014
                        </div>
                        <div className="timeline-content">
                            <h5>Business Process Analyst</h5>
                            <p>PETROBRAS PETROLEO BRASILEIRO SA, São Paulo, Brazil</p>
                            <ul>
                                <li>Streamlined processes like a productivity ninja.</li>
                                <li>Implemented data-driven improvements that made workflows sing.</li>
                                <li>Worked with teams to deploy systems that actually worked.</li>
                            </ul>
                            <div className="skills">
                                <span className="skill-badge">Process Optimization</span>
                                <span className="skill-badge">Strategic Planning</span>
                                <span className="skill-badge">Continuous Improvement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
```

* **Styling:** The styling for the Portfolio section includes the use of Bootstrap’s grid layout for responsive design. The cards have a hover effect for interaction, and buttons are styled to match the theme of the portfolio.
  * **Key CSS Features**
    * **Checkmarks and Timeline:** The checkmarks and vertical timeline line are styled using pseudo-elements and positioned between the date and job description.
    * **Responsive Layout:** Media queries ensure that the timeline adjusts properly for smaller screens, reducing space between elements.

```css
/* Work Experience Section Styling */
/* =============================== */
#work-experience {
  background-color: #f8f9fa;
  padding: 4rem 0;
}

#work-experience h2 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
}

.underline {
  width: 50px;
  height: 3px;
  background-color: #e83e8c; /* Pink underline */
  margin: 10px 0 40px 0; /* Adjust spacing */
}

/* Timeline Styling */
.timeline {
  position: relative;
  padding: 2rem 0;
  margin-top: 2rem;
}

/* The timeline vertical line */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 35%; /* Adjusted to appear between date and content */
  width: 2px;
  background: #e83e8c; /* Pink line */
  transform: translateX(-50%);
}

/* Timeline item container */
.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* Dates aligned to the left */
.timeline-date {
  width: 30%; /* Dates take up the left 30% */
  text-align: right;
  padding-right: 2rem; /* Space between date and timeline */
  font-weight: bold;
  color: #6c757d;
}

/* Timeline content */
.timeline-content {
  width: 60%; /* Content takes up the remaining space */
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-left: 1rem;
}

/* Remove bullet points from lists */
.timeline-content ul {
  list-style-type: none; /* Removes bullet points */
  padding-left: 0; /* Removes default padding */
}

/* Circle Checkmarks */
.timeline-item::before {
  content: '✔';
  position: absolute;
  left: 35%; /* Align checkmarks with the timeline */
  transform: translateX(-50%);
  font-size: 1.25rem;
  color: #e83e8c !important; /* Pink checkmark */
  background: white;
  border: 2px solid #e83e8c !important; /* Pink border */
  border-radius: 50%; /* Circle shape */
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Skills Badges */
.skills {
  margin-top: 1rem;
}

.skill-badge {
  display: inline-block;
  background-color: #e83e8c!important; /* Pink badge background */
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px; /* Rounded badges */
  font-size: 0.875rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Adjust the timeline for mobile responsiveness */
@media (max-width: 576px) {
  .timeline::before {
    left: 10%; /* Adjust timeline position for smaller screens */
  }

  .timeline-item::before {
    left: 10%; /* Adjust checkmark position for smaller screens */
  }

  .timeline-content {
    width: 85%; /* More width for content on mobile */
  }

  .timeline-date {
    width: 15%; /* Less space for dates on mobile */
  }

  .skill-badge {
    font-size: 0.75rem; /* Smaller badges on mobile */
    padding: 0.2rem 0.5rem;
  }
}
```
