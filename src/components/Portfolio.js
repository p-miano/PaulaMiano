import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState('title'); // Track sort option
    const [sortOrder, setSortOrder] = useState('asc'); // Track sort order

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/p-miano/repos');
                const data = await response.json();

                const projects = data
                    .filter(repo => repo.name.toLowerCase() !== 'p-miano') // Filter out your username project
                    .map(repo => ({
                        id: repo.id,
                        title: addSpacesToTitle(repo.name), // Format title with spaces before capital letters
                        category: getCategoryFromTopics(repo.topics),
                        description: repo.description,
                        githubLink: repo.html_url,
                        deployedLink: repo.homepage || null,
                        createdAt: new Date(repo.created_at).toLocaleDateString(),
                        updatedAt: new Date(repo.updated_at).toLocaleDateString(),
                        topics: repo.topics // Include topics for display on card
                    }));

                setFilteredProjects(projects);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const addSpacesToTitle = (title) => {
        return title.replace(/([a-z])([A-Z])/g, '$1 $2');
    };

    const getCategoryFromTopics = (topics) => {
        const categories = ['API', 'Web', 'Mobile', 'Desktop'];
        for (let category of categories) {
            if (topics.includes(category.toLowerCase())) {
                return category;
            }
        }
        return 'Other';
    };

    const sortProjects = (projects) => {
        return projects.sort((a, b) => {
            if (sortOption === 'title') {
                return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            } else if (sortOption === 'createdAt') {
                return sortOrder === 'asc' 
                    ? new Date(a.createdAt) - new Date(b.createdAt) 
                    : new Date(b.createdAt) - new Date(a.createdAt);
            } else if (sortOption === 'updatedAt') {
                return sortOrder === 'asc' 
                    ? new Date(a.updatedAt) - new Date(b.updatedAt) 
                    : new Date(b.updatedAt) - new Date(a.updatedAt);
            }
            return 0;
        });
    };

    const filteredProjectsByCategory = filteredProjects.filter(project => {
        return selectedCategory === 'All' || project.category === selectedCategory;
    });

    const sortedProjects = sortProjects(filteredProjectsByCategory);

    return (
        <section id="portfolio" className="p-5 bg-light">
            <div className="container">
                <h2 className="text-left text-pink">Portfolio</h2>
                <div className="underline"></div>

                {/* Filter and Sort Container */}
                <div className="filter-sort-container">
                    {/* Main Category Filter Buttons */}
                    <div className="portfolio-filters">
                        <span>Filter by: </span>
                        <button className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('All')}>All</button>
                        <button className={`btn ${selectedCategory === 'API' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('API')}>API</button>
                        <button className={`btn ${selectedCategory === 'Desktop' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Desktop')}>Desktop</button>
                        <button className={`btn ${selectedCategory === 'Mobile' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Mobile')}>Mobile</button>
                        <button className={`btn ${selectedCategory === 'Web' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSelectedCategory('Web')}>Web</button>
                    </div>

                    {/* Divider */}
                    <div className="divider"></div>

                    {/* Sorting Options */}
                    <div className="portfolio-sorting">
                        <span>Sort by: </span>
                        <button className={`btn ${sortOption === 'title' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSortOption('title')}>Title</button>
                        <button className={`btn ${sortOption === 'createdAt' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSortOption('createdAt')}>Created Date</button>
                        <button className={`btn ${sortOption === 'updatedAt' ? 'btn-primary' : 'btn-light'}`} onClick={() => setSortOption('updatedAt')}>Updated Date</button>
                        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="btn btn-outline-primary">
                            {sortOrder === 'asc' ? '↑' : '↓'}
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="row align-items-stretch">
                        {sortedProjects.map(project => (
                            <div className="col-md-4 mb-4" key={project.id}>
                                <div className="card h-100 d-flex flex-column">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-pink">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        {/* Display topics with text-pink class */}
                                        <p><small><span className="text-pink font-weight-bold">Topics: </span>{project.topics.join(', ')}</small></p>

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
                )}
            </div>
        </section>
    );
};

export default Portfolio;
