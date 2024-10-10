import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider"; // Import the Slider component

// Sample data for freelancers
const freelancers = [
  { id: 1, name: "John Doe", category: "Android", score: 85, repo: "Project Repo 1" },
  { id: 2, name: "Jane Smith", category: "Web Development", score: 90, repo: "Project Repo 2" },
  { id: 3, name: "Alice Brown", category: "Graphics", score: 95, repo: "Project Repo 3" },
  // Add more freelancers as needed
];

const Home = () => {
  return (
    <div className="home-container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Freelancers</h1>

      {/* Slider for categories */}
      <Slider />

      {/* List of freelancers */}
      <h2 className="text-2xl font-semibold mb-4">Available Freelancers</h2>
      <div className="freelancer-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {freelancers.map((freelancer) => (
          <Link
            to={`/freelancer/${freelancer.id}`}
            key={freelancer.id}
            className="freelancer-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold">{freelancer.name}</h3>
            <p className="text-md">Category: {freelancer.category}</p>
            <p className="text-md">Quiz Score: {freelancer.score}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
