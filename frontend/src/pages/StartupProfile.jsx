import React from "react";
import { FaGlobe, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StartupProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#eaf6ef] min-h-screen py-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 pb-2 border-b border-gray-200">
        <span className="font-semibold text-sm text-[#6a9c8a]">
          Individual startup Page
        </span>
        <span className="text-xl cursor-pointer"></span>
      </div>

      {/* Spacer to keep same space as removed navbar */}
      <div className="mt-6" />

      {/* Main Card */}
      <div className="bg-white max-w-4xl mx-auto mt-4 rounded-2xl p-10 shadow-lg">
        {/* Tag and Name */}
        <div className="flex items-center gap-8 mb-8">
          <div className="bg-[#eaf6ef] rounded-xl p-8 flex-shrink-0 border-2 border-[#b5d3bd] shadow-inner">
            {/* Image Placeholder */}
            <span
              role="img"
              aria-label="image"
              className="text-5xl text-[#b5d3bd]"
            >
              <img
                src="https://img.icons8.com/color/96/image.png"
                alt="Startup"
                className="h-16 w-16 object-contain rounded-lg"
              />
            </span>
          </div>
          <div>
            <div className="mb-3">
              <span className="bg-[#eaf6ef] text-[#38876d] text-sm font-semibold px-4 py-2 rounded-lg tracking-wide shadow">
                SUSTAINABLE TECH
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-800">
              Startup Name
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              tagline “Bringing clean water to rural home”
            </p>
          </div>
        </div>

        {/* Cover Image */}
        <div className="bg-[#eaf6ef] rounded-lg h-32 flex items-center justify-center my-8 text-[#38876d] font-bold text-2xl tracking-wide shadow-inner">
          COVER IMAGE
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h2 className="font-bold mb-1 text-lg mt-4">About the Startup</h2>
            <p className="text-sm mb-5">
              “Give a description about the startup” <br />
              A startup is a spark. A bet on the future.
            </p>
            <h2 className="font-bold mb-1 text-lg mt-6">Features/Highlights</h2>
            <ul className="list-disc list-inside text-sm mb-5">
              <li>Feature one (Purpose-Driven Mission)</li>
              <li>Feature three (Purpose-Driven Mission)</li>
            </ul>
            <h2 className="font-bold mb-1 text-lg mt-6">Team</h2>
            <ul className="list-disc list-inside text-sm mb-5">
              <li>Founder</li>
              <li>The Tech Lead</li>
              <li>The Designer</li>
              <li>The Marketing Head</li>
            </ul>
          </div>
          {/* Right Column */}
          <div>
            <h2 className="font-bold mb-1 text-lg mt-4 md:mt-0">
              Features/Highlights
            </h2>
            <ul className="list-disc list-inside text-sm mb-5">
              <li>Feature two (Innovation Hub)</li>
              <li>Feature four (Innovation Hub)</li>
            </ul>
            <h2 className="font-bold mb-1 text-lg mt-6">
              Vision &amp; Future Plans
            </h2>
            <ul className="list-disc list-inside text-sm mb-5">
              <li>Investment needed: XXXXX</li>
              <li>Looking for: Mentors/Collaborators</li>
            </ul>
            <h2 className="font-bold mb-1 text-lg mt-6">
              Funding &amp; Support
            </h2>
            <p className="text-sm mb-5">
              We seek early-stage funding and mentorship to turn bold student
              innovations into real-world impact. Support through grants,
              investors, and collaboration helps us grow, build, and thrive
              together.
            </p>
          </div>
        </div>

        {/* Footer - Contact & Links */}
        <div className="flex items-center gap-4 mt-8 mb-2">
          <span className="font-semibold text-base">Contact &amp; Links</span>
          <a href="#" className="text-2xl hover:text-[#38876d]">
            <FaGlobe />
          </a>
          <a href="#" className="text-2xl hover:text-[#38876d]">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-[#38876d]">
            <FaEnvelope />
          </a>
        </div>
        <button
          className="mt-3 bg-[#eaf6ef] text-[#38876d] px-5 py-2 rounded-md flex items-center gap-2 font-semibold hover:bg-[#d2f4e4] transition"
          onClick={() => navigate(-1)}
        >
          <span>&larr;</span>
          Back to All Projects
        </button>
      </div>
    </div>
  );
};

export default StartupProfile;