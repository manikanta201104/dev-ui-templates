/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-start px-5 mt-6 max-w-5xl min-h-[182vh] xs:min-h-[170vh] sm:min-h-screen ">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <h1 className="SpaceGroteskBold text-[50px] sm:text-[64px]">
        About Me 👨‍
      </h1>
      <p className="SpaceGroteskRegular text-[20px] sm:text-[24px] ">
        A brief intro to who I am and how I work:
      </p>
      <h1 className="SpaceGroteskRegular py-5 text-2xl sm:text-4xl ">
        I am{" "}
        <span className=" text-4xl sm:text-6xl SpaceGroteskBold ">
          Manikanta Mettu
        </span>
      </h1>
      <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

      <div className="SpaceGroteskRegular text-[20px] sm:text-[24px]  max-w-5xl mt-3">
        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px]  py-5">
          Full‑stack developer focused on building performant, privacy‑first web apps.
          I work primarily with React/Next.js, Node.js/Express, TypeScript, MongoDB and Tailwind CSS.
          I enjoy shipping end‑to‑end features, optimizing UX with data, and automating deployments.
        </p>

        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px]  py-5">
          Currently, I'm a Software Developer Intern at Minimalistic Technology (May 2025–September 2025),
          where I:
          • built responsive UIs for 5+ web apps with React/Next.js, improving retention by 20%,
          • integrated 15+ REST APIs with Axios, cutting data load time by 30%,
          • optimized routing/state in Next.js, boosting navigation speed by 25%, and
          • delivered mobile‑first layouts with Tailwind CSS.
        </p>

        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px]  py-5">
          Notable work: ChillBoard — an AI‑based digital wellness dashboard (200+ users, ~90% on‑device
          mood detection using face‑api.js, Spotify recommendations, leaderboards, CI/CD with Docker on
          Render + Vercel). I also built a Chrome MV3 extension (100+ installs) that tracks screen‑time with
          background sync and a JWT‑secured backend.
        </p>
      </div>
      <>
        <div className="relative block group  my-7 cursor-pointer">
          <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
          <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
            <div className="py-3 px-10 ">
              <p className="mt-1 text-xl">Say Hello</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
