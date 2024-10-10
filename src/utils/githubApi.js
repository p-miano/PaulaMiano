// const GITHUB_API_URL = 'https://api.github.com';

// Read repo_data.json instead of using the GitHub API directly
export const fetchGithubRepos = async () => {
    try {
        // Update the URL to point to the correct path on GitHub Pages
        const response = await fetch('https://p-miano.github.io/PaulaMiano/repo_data.json');

        if (!response.ok) {
            throw new Error(`Error fetching repo data: ${response.statusText}`);
        }

        const allRepos = await response.json();
        console.log('Fetched repositories from repo_data.json:', allRepos); // Debug log
        return allRepos;
    } catch (error) {
        console.error('Error loading repository data:', error);
        return null;
    }
};

/* // Fetch languages for each repository
export const fetchLanguagesForRepo = async (repoUrl) => {
    try {
        const relativeRepoUrl = repoUrl.replace(GITHUB_API_URL, '');
        console.log('Fetching languages for:', repoUrl); // Debug log
        const response = await fetch(`${GITHUB_API_URL}${relativeRepoUrl}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            console.error(`Error fetching languages: ${response.status} ${response.statusText}`);
            throw new Error(`Error fetching languages: ${response.statusText}`);
        }

        const languages = await response.json();
        console.log('Fetched languages:', languages); // Debug log
        return languages;
    } catch (error) {
        console.error('Error fetching languages:', error);
        return null;
    }
};
 */