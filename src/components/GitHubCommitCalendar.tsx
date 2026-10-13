"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GitHubCommitCalendar() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="github-calendar" aria-label="Adam Creed's public GitHub contribution calendar">
      <GitHubCalendar
        username="amcreed1999"
        blockSize={11}
        blockMargin={4}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        fontSize={12}
      />
    </div>
  );
}
