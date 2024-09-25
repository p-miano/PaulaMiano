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
        deployedLink: null // No deployed link
    },
    {
        id: 3,
        title: "Tech Books",
        category: "Web",
        description: "Web application for managing books.",
        githubLink: "https://github.com/p-miano/WebServerII-TechBooksV2.git",
        deployedLink: null // No deployed link
    },
    {
        id: 4,
        title: "ToDo App",
        category: "Mobile",
        description: "Android application for managing tasks.",
        githubLink: "https://github.com/p-miano/Android-TaskManager.git",
        deployedLink: null // No deployed link
    },
    {
        id: 5,
        title: "City Info API",
        category: "API",
        description: "Web API designed to provide detailed information about cities and their points of interest.",
        githubLink: "https://github.com/p-miano/CityInfoAPI.git",
        deployedLink: null // No deployed link
    },
    {
        id: 6,
        title: "UI Showcase App",
        category: "Mobile",
        description: "Multi-page Android app showcasing various UI components and layouts, with support for dark mode and multi-language localization.",
        githubLink: "https://github.com/p-miano/UIShowcaseApp.git",
        deployedLink: null // No deployed link
    },
];


const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); // State for the selected filter category
    const [filteredProjects, setFilteredProjects] = useState(projectsData); // Projects filtered by category

    // Filter and sort projects based on the selected category
    useEffect(() => {
        let projectsToDisplay = [...projectsData];

        if (selectedCategory !== 'All') {
            projectsToDisplay = projectsToDisplay.filter(project => project.category === selectedCategory);
        }

        // Sort by title
        projectsToDisplay.sort((a, b) => a.title.localeCompare(b.title));

        setFilteredProjects(projectsToDisplay); // Set sorted and filtered projects
    }, [selectedCategory]);

    return (
        <section id="portfolio" className="p-5 bg-light">
            <div className="container">
                {/* Portfolio Title */}
                <h2 className="text-left">Portfolio</h2>
                <div className="underline"></div>
                {/* <p className="lead text-left">Explore my projects by category below:</p>*/}

                {/* Filter Buttons */}
                <div className="portfolio-filters mb-4">
                    <button className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('All')}>All</button>
                    <button className={`btn ${selectedCategory === 'API' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('API')}>API</button>
                    <button className={`btn ${selectedCategory === 'Desktop' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Desktop')}>Desktop</button>
                    <button className={`btn ${selectedCategory === 'Mobile' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Mobile')}>Mobile</button>
                    <button className={`btn ${selectedCategory === 'Web' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Web')}>Web</button>
                </div>

                {/* Project Cards */}
                <div className="row align-items-stretch">
                    {filteredProjects.map(project => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div className="card h-100 d-flex flex-column">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>

                                    <div className="portfolio-buttons mt-auto">
                                        {/* GitHub Link Button */}
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                                            View on GitHub
                                        </a>

                                        {/* Deployed Site Button (if available) */}
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
