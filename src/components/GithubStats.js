import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const GithubStats = () => {
    const [languages, setLanguages] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLanguages = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.github.com/users/p-miano/repos', {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }

            const repos = await response.json();
            const languagesData = {};

            // Fetch languages for each repo
            for (const repo of repos) {
                const languagesResponse = await fetch(repo.languages_url, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`
                    }
                });

                if (languagesResponse.ok) {
                    const repoLanguages = await languagesResponse.json();

                    for (const [language, count] of Object.entries(repoLanguages)) {
                        languagesData[language] = (languagesData[language] || 0) + count;
                    }
                }
            }

            setLanguages(languagesData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Prepare data for the Doughnut chart
    const chartData = {
        labels: Object.keys(languages),
        datasets: [
            {
                data: Object.values(languages),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#E7E9ED',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#E7E9ED',
                ],
            },
        ],
    };

    // Chart options to make it smaller and add labels
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12,
                    padding: 15,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value} bytes`;
                    },
                },
            },
        },
        cutout: '70%', // Makes the doughnut smaller by cutting out more of the center
    };

    return (
        <section id="github-stats" className="p-5 bg-light">
            <div className="container">
                <h2 className="text-left">Most Used Languages</h2>
                <div className="underline"></div>
                <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <Doughnut data={chartData} options={chartOptions} />
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
