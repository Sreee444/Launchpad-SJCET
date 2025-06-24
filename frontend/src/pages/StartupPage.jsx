import React from "react";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const StartupPage = () => (
  <div className="bg-[#f6fbf7] min-h-screen py-8 px-4">
    {/* Header */}
    <header className="max-w-5xl mx-auto flex items-center justify-between py-4">
      <div className="font-bold text-xl">LOGO</div>
      <nav className="flex space-x-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Startups</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">Announcements</a>
        <a href="#" className="hover:underline">About Us</a>
      </nav>
      <button className="bg-green-200 text-green-900 rounded px-4 py-1 font-semibold">Join Us</button>
    </header>

    {/* Main Content */}
    <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
      <div className="flex items-center space-x-4 mb-2">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">SUSTAINABLE TECH</span>
      </div>
      <h1 className="text-3xl font-bold mb-1">Startup Name</h1>
      <p className="text-gray-600 mb-4">tagline “Bringing clean water to rural home”</p>
      {/* Cover Image */}
      <div className="w-full h-40 bg-green-100 rounded-xl flex items-center justify-center mb-8 text-green-500 font-bold text-lg">
        COVER IMAGE
      </div>
      {/* About, Features, Team, Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="font-bold mb-1">About the Startup</h2>
          <p className="text-sm text-gray-700 mb-4">
            “Give a description about the startup”<br />
            A startup is a spark. A bet on the future.
          </p>
          <h2 className="font-bold mb-1">Features/Highlights</h2>
          <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
            <li>Feature one (Purpose-Driven Mission)</li>
            <li>Feature three (Purpose-Driven Mission)</li>
            <li>feature two (Innovation Hub)</li>
            <li>feature four (Innovation Hub)</li>
          </ul>
          <h2 className="font-bold mb-1">Team</h2>
          <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
            <li>Founder</li>
            <li>The Tech Lead</li>
            <li>The Designer</li>
            <li>The Marketing Head</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-1">Vision & Future Plans</h2>
          <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
            <li>Investment needed: ₹XXXXXX</li>
            <li>Looking for: Mentors/Collaborators</li>
          </ul>
          <h2 className="font-bold mb-1">Funding & Support</h2>
          <p className="text-sm text-gray-700 mb-4">
            We seek early-stage funding and mentorship to turn bold student innovations into real-world impact. Support through grants, investors, and collaboration helps us grow, build, and thrive together.
          </p>
          <h2 className="font-bold mb-1">Contact & Links</h2>
          <div className="flex items-center space-x-3 mb-4">
            <a href="#" className="text-gray-600 hover:text-black"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FaGithub /></a>
            <a href="mailto:someone@example.com" className="text-gray-600 hover:text-black"><FaEnvelope /></a>
          </div>
          <button className="bg-green-100 text-green-700 rounded-full px-4 py-2 font-semibold text-sm flex items-center">
            <span className="mr-2">⬅️</span> Back to All Projects
          </button>
        </div>
      </div>
    </main>
  </div>
);

export default StartupPage;
