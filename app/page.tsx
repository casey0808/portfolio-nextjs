import Image from "next/image";
// import ProfileImg from "@/assets/profile.jpg";

export default function Home() {
  return (
    <div className="mt-7 mb-24 lg:my-28 leading-7 flex gap-14 flex-col lg:flex-row lg:items-center lg:h-[400px]">
      <div className="lg:max-w-[400px]">
        <div className="mb-10 animate-typing overflow-hidden whitespace-nowrap text-lg">Hey, this is Casey  👋</div>
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
        className="aspect-auto rounded-lg animate-show w-[400px] h-auto mx-auto"
        priority
      />
    </div>
  );
}
