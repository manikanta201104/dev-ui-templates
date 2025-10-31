/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { contactInfo } from "../data/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="py-10 relative">
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="flex flex-col items-start">
          <h1 className="SpaceGroteskBold text-5xl">Contact Me 📧</h1>
          <p className="SpaceGroteskRegular text-[24px]">
            Let's connect and discuss opportunities:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between my-10 gap-10">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-7">
            <h2 className="text-3xl SpaceGroteskBold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-[#188AEC] p-3 rounded-xl">
                    <img src={info.icon} alt={info.type} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="SpaceGroteskMedium text-lg">{info.type}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            {/* <div className="mt-8">
              <h3 className="text-xl SpaceGroteskMedium mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {contactInfo.filter(info => info.type === "Social").map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-100 dark:bg-[#1F2937] p-3 rounded-xl hover:bg-[#188AEC] transition-all duration-300"
                  >
                    <img src={social.icon} alt={social.platform} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-7">
            <h2 className="text-3xl SpaceGroteskBold mb-8">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block SpaceGroteskMedium text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] focus:outline-none focus:border-[#188AEC]"
                  required
                />
              </div>
              <div>
                <label className="block SpaceGroteskMedium text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] focus:outline-none focus:border-[#188AEC]"
                  required
                />
              </div>
              <div>
                <label className="block SpaceGroteskMedium text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] focus:outline-none focus:border-[#188AEC]"
                  required
                />
              </div>
              <div>
                <label className="block SpaceGroteskMedium text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] focus:outline-none focus:border-[#188AEC] resize-none"
                  required
                />
              </div>
              <div className="relative block group cursor-pointer">
                <span className="absolute inset-0 border-2 border-[#188AEC] rounded-lg"></span>
                <button
                  type="submit"
                  className="w-full transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0 group-hover:-translate-y-0 -translate-x-3 translate-y-2"
                >
                  <div className="py-3 px-10">
                    <p className="mt-1 text-xl">Send Message</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}