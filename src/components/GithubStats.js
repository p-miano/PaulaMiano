import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartDataLabels
import { Chart } from 'chart.js';
Chart.register(ChartDataLabels);

const GithubStats = () => {
    const [languages, setLanguages] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLanguages = async () => {
        const perPage = 100;

        try {
            // console.log('Fetching with Token:', process.env.REACT_APP_STATS_API_TOKEN || 'Token is undefined'); // DEBUGGING: Check if the token is available
            setLoading(true);

            // Fetch all repositories in a single call
            const response = await fetch(`/user/repos?type=all&per_page=${perPage}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch repositories: ${response.statusText}`);
            }

            const allRepos = await response.json();
            // console.log('Total Repositories Fetched:', allRepos.length);
            const languagesData = {};

            // Fetch languages for each repo using a relative URL
            for (const repo of allRepos) {
                const relativeLanguagesUrl = repo.languages_url.replace('https://api.github.com', '');
                const languagesResponse = await fetch(relativeLanguagesUrl, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_STATS_API_TOKEN}`
                    }
                });

                if (languagesResponse.ok) {
                    const repoLanguages = await languagesResponse.json();
                    // console.log(`Languages for repo ${repo.name}:`, repoLanguages); // Log languages for each repo

                    for (const [language, count] of Object.entries(repoLanguages)) {
                        languagesData[language] = (languagesData[language] || 0) + count;
                    }
                } else {
                    console.error(`Failed to fetch languages for repo: ${repo.name}`);
                }
            }

            setLanguages(languagesData);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching languages or repositories:', err);
            setError(err.message); // Set the error message so it can be displayed in the UI
            setLoading(false);
        }
    };

    useEffect(() => {
        // console.log('Environment Token (GithubStats Component):', process.env.REACT_APP_STATS_API_TOKEN || 'Token is undefined');
    }, []); // DEBUGGING: Check if the token is available    

    useEffect(() => {
        fetchLanguages();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Calculate total for percentage calculation
    const totalBytes = Object.values(languages).reduce((acc, val) => acc + val, 0);

    // Sort languages by usage in descending order
    const sortedLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]);

    // Expanded color palette
    const colorPalette = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED',
        '#8A2BE2', '#FF7F50', '#6495ED', '#DC143C', '#00FFFF', '#00008B', '#B8860B',
        '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#556B2F', '#FF8C00', '#9932CC',
        '#8B0000', '#E9967A', '#9400D3', '#FF00FF', '#FFD700', '#ADFF2F', '#4B0082',
        '#F08080', '#20B2AA', '#87CEFA', '#32CD32', '#FFB6C1', '#00FF00', '#FF4500',
        '#DA70D6', '#EEE8AA', '#98FB98', '#AFEEEE', '#DB7093', '#FFDAB9', '#CD853F',
        '#FFC0CB', '#DDA0DD', '#B0E0E6', '#800080', '#FA8072', '#F4A460', '#2E8B57',
        '#FFF5EE', '#A0522D', '#C0C0C0', '#87CEEB', '#6A5ACD', '#708090', '#00FF7F',
        '#4682B4', '#D2B48C', '#008080', '#D8BFD8', '#FF6347', '#40E0D0', '#EE82EE',
        '#F5DEB3', '#FFFF00', '#9ACD32'
    ];

    // Prepare data for the Doughnut chart
    const chartData = {
        labels: sortedLanguages.map(([language]) => {
            const percentage = ((languages[language] / totalBytes) * 100).toFixed(2);
            return `${language} (${percentage}%)`;
        }),
        datasets: [
            {
                data: sortedLanguages.map(([, count]) => count),
                backgroundColor: sortedLanguages.map((_, index) => colorPalette[index % colorPalette.length]),
                hoverBackgroundColor: sortedLanguages.map((_, index) => colorPalette[index % colorPalette.length])
            },
        ],
    };

    // Chart options to make it smaller and add labels with percentages
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    padding: 20,
                    font: {
                        size: 14, // Make the legend label text smaller to fit
                    },
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const percentage = ((value / totalBytes) * 100).toFixed(2);
                        return `${label}: ${value} bytes (${percentage}%)`;
                    },
                },
            },
            datalabels: {
                display: true,
                color: '#474747', 
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const percentage = (value / totalBytes) * 100;
                    if (percentage > 3) {
                        return context.chart.data.labels[context.dataIndex].split(' ')[0]; // Extract only the language name if percentage > 3%
                    } else {
                        return ''; // Do not display labels for percentages <= 3%
                    }
                }
            }         
        },
        cutout: '40%', // Makes the doughnut smaller by cutting out more of the center
    };

    return (
        <section id="github-stats" className="p-5 bg-light" style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
            <div className="container">
                <h2 className="text-left" style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'left' }}>GitHub Languages</h2>
                <div className="underline" style={{ width: '50px', height: '3px', backgroundColor: '#e83e8c', margin: '10px 0 40px 0' }}></div>

                <div className="d-flex justify-content-center">
                    <div style={{ width: '500px', height: '500px' }}>
                        <Doughnut data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
                    </div>
                </div>

                <div
                    id="github-stats-legend"
                    style={{
                        maxHeight: '100px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                        overflowY: 'auto',
                        marginTop: '20px',
                    }}
                ></div>
            </div>
        </section>
    );
};

export default GithubStats;
