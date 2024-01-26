"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black gap-10 lg:static lg:h-auto lg:w-auto lg:bg-none pb-8 lg:pb-0">
        <Link
          href="/"
          className={clsx("hover:font-semibold", {
            "font-semibold": pathname === "/",
          })}>
          Home
        </Link>
        <Link
          href="/projects"
          className={clsx("hover:font-semibold", {
            "font-semibold": pathname === "/projects",
          })}>
          Projects
        </Link>
        <Link
          href="https://github.com/casey0808"
          className="hover:font-semibold"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/cancui1208/"
          className="hover:font-semibold"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
