import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import IconArrow from "@/assets/arrow.svg";
import clsx from "clsx";

export type ProjectCardProps = {
  title: string;
  desc: string;
  url: string;
  imgSrc: string | StaticImageData;
  reversed: boolean;
  priority?: boolean;
};

export default function ProjectCard({
  title,
  desc,
  url,
  imgSrc,
  reversed,
  priority = false,
}: ProjectCardProps) {
  return (
    <div
      className={clsx("flex gap-10 md:gap-14", {
        "flex-col md:flex-row": !reversed,
        "flex-col md:flex-row-reverse": reversed,
      })}>
      <div className="md:max-w-[400px] flex flex-col gap-5 justify-center leading-7 animate-show">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="text-sm">{desc}</div>
        <Link
          className="font-semibold text-sm flex items-center gap-2 hover:underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          View More Details
          <Image src={IconArrow} alt="arrow" width={16} height={16} />
        </Link>
      </div>
      <div className="w-full md:h-[220px]">
        <Image
          src={imgSrc}
          alt={title}
          className={clsx(
            "object-center w-full md:w-[400px] h-auto rounded-lg hover:rotate-0 duration-300",
            { "md:-rotate-2": !reversed, "md:rotate-2": reversed }
          )}
          width={400}
          priority={priority}
          height={400}
        />
      </div>
    </div>
  );
}
