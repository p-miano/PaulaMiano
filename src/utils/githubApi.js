const GITHUB_API_URL = 'https://api.github.com';

// Fetch GitHub repositories using the token from environment variables
export const fetchGithubRepos = async (username) => {
    try {
        const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching GitHub repositories: ${response.statusText}`);
        }

        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return null;
    }
};

// Fetch languages for each repository
export const fetchLanguagesForRepo = async (repoUrl) => {
    try {
        const response = await fetch(repoUrl, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching languages: ${response.statusText}`);
        }

        const languages = await response.json();
        return languages;
    } catch (error) {
        console.error('Error fetching languages:', error);
        return null;
    }
};
