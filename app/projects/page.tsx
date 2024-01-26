import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="py-7 md:py-20 flex flex-col gap-20 md:gap-28">   
      <ProjectCard
        title="Asteroid Mining Simulation"
        desc="This is an animated simulation showing the movement of miners and
            asteroids over the years, using react, typescript and scss for the
            frontend, connecting to an express, node, websocket backend server."
        url="https://casey0808.github.io/asteroids-ts/"
        imgSrc="https://gateway.pinata.cloud/ipfs/QmaehK4D41kYr65dCUehvfQRCmVgmMy5A5pmmqyEXa71HQ"
        reversed={false}
      />
      <ProjectCard
        title="Wes Anderson Palette"
        desc="A single page app built with React. It displays 8 palettes used by
            Wes Anderson in his 8 different movies. Hex/rgb values of those
            colours can be copied by simply clicking the one you need."
        url="https://casey0808.github.io/wes-anderson-palette/"
        imgSrc="https://gateway.pinata.cloud/ipfs/QmNMwJrdhApeBdDhpiUtk1jnxAa9ns1Cmj6HW5zhPo9MSZ?_gl=1*k5rx8a*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzMyMi40OS4wLjA"
        reversed
      />
    </div>
  );
}
