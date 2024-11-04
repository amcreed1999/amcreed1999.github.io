"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  bio: string;
  name: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GitHubDashboard = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const username = 'amcreed1999'; // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          avatarUrl: userData.avatar_url,
          bio: userData.bio,
          name: userData.name
        });

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Ensure this runs only on the client
    if (typeof window !== 'undefined') {
      fetchGitHubData();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          GitHub Dashboard
        </h2>

        {/* Profile Stats */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {stats?.avatarUrl && (
              <Image
                src={stats.avatarUrl}
                alt="GitHub Avatar"
                width={120}
                height={120}
                className="rounded-full"
              />
            )}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stats?.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{stats?.bio}</p>
              <div className="flex gap-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-500">{stats?.publicRepos}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-500">{stats?.followers}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-500">{stats?.following}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {repo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {repo.description || 'No description available'}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {repo.language}
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                    </svg>
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubDashboard; 