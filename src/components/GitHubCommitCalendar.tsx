"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubCommitCalendar() {
  return (
    <div className="github-calendar" aria-label="Adam Creed's public GitHub contribution calendar">
      <GitHubCalendar
        username="amcreed1999"
        blockSize={11}
        blockMargin={4}
        colorScheme="light"
        fontSize={12}
      />
    </div>
  );
}
