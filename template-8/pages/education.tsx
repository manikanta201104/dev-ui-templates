/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { education } from "../data/education";

export default function Education() {
  return (
    <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="py-10 relative">
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="flex flex-col items-start">
          <h1 className="SpaceGroteskBold text-5xl">Education 🎓</h1>
          <p className="SpaceGroteskRegular text-[24px]">
            My academic journey and achievements:
          </p>
        </div>

        <div className="flex flex-col items-center my-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex justify-between w-full flex-col-reverse my-8 sm:my-14 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-wrap items-start px-7`}
            >
              <div className="flex flex-col items-start max-w-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#188AEC] text-white rounded-full px-4 py-2 text-sm SpaceGroteskMedium">
                    {edu.year}
                  </div>
                </div>
                <h1 className="text-4xl SpaceGroteskBold mt-2 mb-3">
                  {edu.degree}
                </h1>
                <h2 className="text-2xl SpaceGroteskMedium text-[#188AEC] mb-2">
                  {edu.institution}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {edu.location}
                </p>
                <p className="SpaceGroteskRegular text-xl py-4 leading-relaxed">
                  {edu.description}
                </p>
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4">
                    <h3 className="SpaceGroteskMedium text-lg mb-2">Key Achievements:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {edu.gpa && (
                  <div className="mt-4 bg-gray-100 dark:bg-[#1F2937] rounded-lg p-3">
                    <span className="SpaceGroteskMedium">GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>
              
              <div className="relative w-[500px] h-[300px] overflow-hidden flex items-center justify-center">
                <img
                  src={edu.image}
                  className="rounded-lg w-full h-full object-contain bg-gray-100 dark:bg-[#1F2937] p-2"
                  alt={edu.institution}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}