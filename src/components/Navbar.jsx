import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null; // Hide on login

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0f1115]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/projects")}>
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-700 rounded-lg flex items-center justify-center text-white font-black shadow-[0_0_15px_rgba(234,88,12,0.3)]">
            M
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase hidden md:block">
            Mayuri Infra
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate("/projects")}
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/projects' ? 'text-orange-500' : 'text-gray-400 hover:text-white'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => navigate("/")}
            className="text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full text-gray-400 hover:bg-white/5 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;