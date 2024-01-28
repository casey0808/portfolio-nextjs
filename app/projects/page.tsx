import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constant";

export default function Projects() {
  return (
    <div className="pt-7 pb-24 md:py-20 flex flex-col gap-20 md:gap-28">
      {projects?.map((project, i) => {
        const { title, desc, url, imgSrc } = project;
        return (
          <ProjectCard
            title={title}
            desc={desc}
            url={url}
            imgSrc={imgSrc}
            reversed={i % 2 === 1}
            key={i}
            priority={i <= 1}
          />
        );
      })}
    </div>
  );
}
