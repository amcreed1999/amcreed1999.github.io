"use client";
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from "next-themes";

const GitHubCommitCalendar = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const username = 'amcreed1999'; // Replace with your GitHub username

  return (
    <div className={`max-w-7xl py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex justify-center">
        <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
          <h2 className={`text-4xl font-extrabold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            GitHub Commit Calendar
          </h2>
          <h3 className={`text-xl font-light text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a calendar of my commits on GitHub. Our Research was self-taught. This shows my dedication to learning and building.
          </h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username={username}
              blockSize={15}
              blockMargin={5}
              colorScheme={isDarkMode ? 'dark' : 'light'}
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubCommitCalendar;