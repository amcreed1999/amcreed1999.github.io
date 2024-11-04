"use client";
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from "next-themes";

const GitHubCommitCalendar = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const username = 'amcreed1999'; // Replace with your GitHub username

  return (
    <div className={` justify-center items-center  ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex justify-center items-center">
        <div className={` rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
          <div className="flex pt-4 justify-center overflow-x-auto">
            <GitHubCalendar
              username={username}
              blockSize={15}
              blockMargin={3}
              colorScheme={isDarkMode ? 'dark' : 'light'}
              fontSize={20}
            />
          </div>
          <h3 className={`text-xl font-light text-center pt-4 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a calendar of my commits on GitHub since I started using it properly. Github only counts commits to the main branch of repositories. There are some gaps in the calendar, these avenues of research that beared no fruit.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GitHubCommitCalendar;