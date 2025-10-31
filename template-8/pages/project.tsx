/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { project } from "../data/project";

export default function Project() {
  
const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  useEffect(() => {
    const intervals: Record<number, any> = {};
    
    project.forEach((proj, index) => {
      if (proj.covers && proj.covers.length > 1) {
        intervals[index] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [index]: ((prev[index] || 0) + 1) % proj.covers.length
          }));
        }, 2500); // Change image every 2.5 seconds
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="py-10  relative">
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="flex flex-col items-start">
          <h1 className="SpaceGroteskBold text-5xl">Projects 💡</h1>

          <p className="SpaceGroteskRegular text-[24px]">
            Some things i've been working on in the past few years:
          </p>
        </div>
        <div className="flex flex-col items-center  my-10 ">
          {project.map((n, index) => {
            const currentImg = n.covers 
              ? n.covers[currentImageIndex[index] || 0]
              : n.cover;
            
            return (
              <div
                key={index}
                className={`flex justify-between w-full flex-col-reverse my-8 sm:my-14 sm:${n.flexrow}  flex-wrap items-start px-7`}
              >
                <div className="flex flex-col items-start max-w-2xl ">
                  <h1 className="text-5xl SpaceGroteskBold mt-6 sm:mt-0">
                    {n.title}
                  </h1>
                  <p className="SpaceGroteskRegular text-xl py-8">
                    {n.descriptionHtml}
                  </p>
                  <a href={n.external} target="_blank" rel="noreferrer">
                    <div className="relative block group  my-7 cursor-pointer ml-3">
                      <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
                      <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
                        <div className="py-3 px-10 ">
                          <p className="mt-1 text-xl">View project</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="relative w-[500px] h-[300px] overflow-hidden">
                  <img
                    src={currentImg}
                    className="rounded-lg transition-opacity duration-500 ease-in-out w-full h-full object-cover"
                  />
                  {/* Optional: Add dots indicator */}
                  {n.covers && n.covers.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {n.covers.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dotIndex === (currentImageIndex[index] || 0)
                              ? 'bg-white'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}