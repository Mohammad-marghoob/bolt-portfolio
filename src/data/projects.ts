import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Weather App",
    description: "A modern Weather app with beautifull UI",
    image: "weather.png",
    tech: ["React", "TypeScript", "Shadcn", "Recharts"],
    github: "https://github.com/Mohammad-marghoob/weather-app",
    live: "#",
    details: {
      problem: "",
      solution: "",
      features: [
        "Real-Time Weather Updates",
        "Search Functionality",
        "5-Day Forecast",
        "Data Visualization",
        "Responsive Design",
      ],
      impact: "",
    },
  },
  {
    title: "Sonic Game",
    description: "A Running web game which you play as sonic",
    image: "sonic.png",
    tech: ["React", "Kaplay.JS", "JavaScript"],
    github: "https://github.com/Mohammad-marghoob/sonic_game",
    live: "https://mohammad-marghoob.github.io/sonic_game/",
    details: {
      problem: "",
      solution: "",
      features: [
        "You can play as your favorite hedgehog",
        "Enemy interactions",
      ],
      impact: "",
    },
  },
  {
    title: "Tic-Tac-Toe",
    description: "A Classic Tic-Tac-Toe game",
    image: "tic-tac-toe.png",
    tech: ["React"],
    github: "https://github.com/Mohammad-marghoob/tic_tac_toe",
    live: "https://mohammad-marghoob.github.io/tic_tac_toe/",
    details: {
      problem: "",
      solution: "",
      features: ["Two-Player Mode", "Grid Layout", "Reset Functionality"],
      impact: "",
    },
  },
];
