import { ProjectCardProps } from "./components/ProjectCard";
import DhawaImg from "@/assets/dhawa.webp";

export const projects: Array<Omit<ProjectCardProps, "reversed">> = [
  {
    title: "Dhawa",
    desc: "A complete revamp of the official website for Dhawa, the contemporary full-service hotel & spa getaway, part of the Banyan Tree Group.",
    url: "https://www.dhawa.com/",
    imgSrc:
      // "https://violet-controlled-junglefowl-961.mypinata.cloud/ipfs/QmarX2zSHgrynmddw3L8KyoemVQKy94Vw6qnsHqSQJa4T7",
      DhawaImg,
    // blurDataUrl:
    // "https://violet-controlled-junglefowl-961.mypinata.cloud/ipfs/QmQ7D6vDpM4hryPQNmKWfphT26FJ8k862HRhXwQvrkMjPj",
  },
  {
    title: "Asteroid Mining Simulation",
    desc: "This is an animated simulation showing the movement of miners and asteroids over the years, using react, typescript and scss for the frontend, connecting to an express, node, websocket backend server.",
    url: "https://casey0808.github.io/asteroids-ts/",
    imgSrc:
      "https://gateway.pinata.cloud/ipfs/QmaehK4D41kYr65dCUehvfQRCmVgmMy5A5pmmqyEXa71HQ",
  },
  {
    title: "Wes Anderson Palette",
    desc: "A single page app built with React. It displays 8 palettes used by Wes Anderson in his 8 different movies. Hex/rgb values of those colours can be copied by simply clicking the one you need.",
    url: "https://casey0808.github.io/wes-anderson-palette/",
    imgSrc:
      "https://gateway.pinata.cloud/ipfs/QmNMwJrdhApeBdDhpiUtk1jnxAa9ns1Cmj6HW5zhPo9MSZ?_gl=1*k5rx8a*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzMyMi40OS4wLjA",
  },
];
