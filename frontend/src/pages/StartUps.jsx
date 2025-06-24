import React from "react";
import { Link } from "react-router-dom";

const StartUps = () => {
  // Example static list
  const startups = [
    { id: 1, name: "Startup Name" },
    // ...add more
  ];

  return (
    <div>
      <h1>All Startups</h1>
      <ul>
        {startups.map((startup) => (
          <li key={startup.id}>
            <Link to={`/startup/${startup.id}`}>{startup.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StartUps;