import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  status?: "active" | "paused" | "completed";
};

export default function ProjectCard({ project }: { project: Project }) {
  const statusColors: Record<string, string> = {
    active: "bg-green-500",
    paused: "bg-yellow-500",
    completed: "bg-gray-500",
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <span
          className={`w-3 h-3 rounded-full ${
            statusColors[project.status || "active"]
          }`}
        />
      </div>
      <p className="text-gray-400 text-sm">{project.description}</p>
    </div>
  );
}
