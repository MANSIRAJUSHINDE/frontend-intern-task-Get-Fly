import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectList() {
  const [search, setSearch] = useState("");

  const filtered = projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">
              Active <span className="text-orange-500">Projects</span>
            </h1>
            <p className="text-gray-500 font-medium">Monitoring {projects.length} sites across the region</p>
          </div>
          
          <div className="relative">
            <input 
              type="text"
              placeholder="Filter by name..."
              className="w-full md:w-80 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-orange-500/50 transition-all text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;