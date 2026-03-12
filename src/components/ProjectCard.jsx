import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/dpr?project=${project.id}`)}
      className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.06] transition-all cursor-pointer overflow-hidden shadow-2xl"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl group-hover:bg-orange-600/20 transition-all"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            {project.status}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
          {project.name}
        </h3>

        <div className="space-y-3 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <span className="opacity-50 text-lg">📍</span> {project.location}
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-50 text-lg">📅</span> {project.date}
          </div>
        </div>

        <div className="mt-8 flex items-center text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-all">
          Generate DPR <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;