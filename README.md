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