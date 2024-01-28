import Image from "next/image";
// import ProfileImg from "@/assets/profile.jpg";

export default function Home() {
  return (
    <div className="py-7 lg:py-28 leading-7 flex gap-14 flex-col lg:flex-row lg:items-center">
      <div className="lg:max-w-[400px]">
        <div className="mb-10">Hey, this is Casey 👋</div>
        <div>
          I am a self-taught front-end developer and luckily got my first
          developer job at the end of 2019.
        </div>
        <div>
          Through work, and also from other professionals, I have learnt to
          write clean code and build more elegant websites. Look forward to more
          fun and knowledge in this wonderful field. 😊
        </div>
      </div>
      <Image
        src={
          "https://gateway.pinata.cloud/ipfs/QmPedPPiAvERizxeJxDwJmcjAnHjdjDMKHYvYexn7bpHEz?_gl=1*13jpj8r*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzgyOS41My4wLjA."
        }
        alt="profile"
        width={400}
        height={350}
        className="aspect-auto rounded-lg animate-show h-auto w-full"
        priority
      />
      {/* <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </a> */}
    </div>
  );
}
