"use client";
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

interface GitHubStats {
  publicRepos: number;
  privateRepos: number;
  totalContributions: number;
}

const GitHubSummary = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'amcreed1999';
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
              repositories(privacy: PRIVATE) {
                totalCount
              }
              publicRepos: repositories(privacy: PUBLIC) {
                totalCount
              }
            }
          }
        `;

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        const { data } = await response.json();

        setStats({
          publicRepos: data.user.publicRepos.totalCount,
          privateRepos: data.user.repositories.totalCount,
          totalContributions: data.user.contributionsCollection.contributionCalendar.totalContributions,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const statItems = [
    { label: 'Public Repos', value: stats?.publicRepos || 0 },
    { label: 'Private Repos', value: stats?.privateRepos || 0 },
    { label: 'Contributions this year', value: stats?.totalContributions || 0 },
  ];

  return (
    <div className={`md:hidden py-12 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          GitHub Activity
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg text-center ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              } ${item.label === 'Contributions this year' ? 'col-span-2' : ''}`}
            >
              <div className={`text-2xl font-bold mb-1 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {item.value.toLocaleString()}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/amcreed1999"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 text-sm ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
            } transition-colors`}
          >
            <span>View Full Profile</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubSummary;
