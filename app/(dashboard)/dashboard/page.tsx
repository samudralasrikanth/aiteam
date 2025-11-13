import ProjectCard from "../../components/ui/ProjectCard";

const projects = [
  {
    id: "1",
    title: "AI Workflow Engine",
    description: "Automating pipelines with agentic orchestration.",
    status: "active",
  },
  {
    id: "2",
    title: "Finance Insights Bot",
    description: "Intelligent financial advisor using GPT.",
    status: "paused",
  },
];

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
