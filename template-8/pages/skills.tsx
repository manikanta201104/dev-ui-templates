/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="py-10 relative">
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="flex flex-col items-start">
          <h1 className="SpaceGroteskBold text-5xl">Skills 🚀</h1>
          <p className="SpaceGroteskRegular text-[24px]">
            Technologies and tools I work with:
          </p>
        </div>

        <div className="flex flex-col items-center my-10">
          {skills.map((category, index) => (
            <div key={index} className="w-full my-8 px-7">
              <h2 className="text-3xl SpaceGroteskBold mb-6 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white dark:bg-[#111827] border border-[#F3F4F6] dark:border-[#374151] rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="SpaceGroteskMedium text-sm text-center">
                      {skill.name}
                    </h3>
                    <div className="mt-2 bg-gray-200 dark:bg-[#1F2937] rounded-full h-2 w-full">
                      <div
                        className="bg-[#188AEC] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}