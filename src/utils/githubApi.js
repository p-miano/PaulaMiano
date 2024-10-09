const GITHUB_API_URL = 'https://api.github.com';

// Fetch GitHub repositories using the token from environment variables
export const fetchGithubRepos = async () => {
    const token = process.env.REACT_APP_STATS_API_TOKEN;
    let allRepos = [];
    let page = 1;
    const perPage = 100;

    try {
        while (true) {
            // console.log(`Fetching page ${page} with ${perPage} repos per page.`); // Commented out debug log

            // Fetch using relative URL to utilize the proxy
            const response = await fetch(`/user/repos?type=all&per_page=${perPage}&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Cache-Control': 'no-cache',
                },
            });

            // console.log('Response Status:', response.status); // Commented out debug log

            if (response.status === 401) {
                console.error('Unauthorized: Check if token has correct permissions or has expired.');
                break;
            } else if (response.status !== 200) {
                console.error(`Unexpected Error: ${response.status} ${response.statusText}`);
                break;
            }

            const repos = await response.json();
            // console.log(`Fetched ${repos.length} repositories from page ${page}.`); // Commented out debug log

            if (repos.length === 0) {
                break; // No more repositories left to fetch
            }

            allRepos = [...allRepos, ...repos];
            page += 1; // Move to the next page

            if (repos.length < perPage) {
                break; // If fewer than requested, this is the last page
            }
        }

        // console.log('Total Repositories Fetched:', allRepos.length); // Commented out debug log
        return allRepos;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return null;
    }
};

// Fetch languages for each repository
export const fetchLanguagesForRepo = async (repoUrl) => {
    try {
        const relativeRepoUrl = repoUrl.replace(GITHUB_API_URL, '');
        const response = await fetch(relativeRepoUrl, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`,
            },
        });

        if (!response.ok) {
            console.error(`Error fetching languages: ${response.status} ${response.statusText}`);
            throw new Error(`Error fetching languages: ${response.statusText}`);
        }

        const languages = await response.json();
        return languages;
    } catch (error) {
        console.error('Error fetching languages:', error);
        return null;
    }
};