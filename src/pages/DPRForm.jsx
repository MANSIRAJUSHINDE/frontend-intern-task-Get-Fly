import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";

function DPRForm() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [previews, setPreviews] = useState([]);

  const [formData, setFormData] = useState({
    projectId: params.get("project") || "",
    date: new Date().toISOString().split('T')[0],
    weather: "Sunny",
    workers: "",
    desc: ""
  });

  const handleImg = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setPreviews(files.map(f => URL.createObjectURL(f)));
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Daily Progress Report</h2>
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mt-1">Submission Portal</p>
          </div>

          <form className="p-10 space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Data Transmitted Successfully"); navigate("/projects"); }}>
            
            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-orange-500 ml-1">Project Site</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 appearance-none cursor-pointer hover:bg-white/10 transition-all"
                  value={formData.projectId}
                  onChange={(e) => setFormData({...formData, projectId: e.target.value})}
                >
                  <option value="" className="bg-[#0f1115]">Select Site</option>
                  {projects.map(p => <option key={p.id} value={p.id} className="bg-[#0f1115]">{p.name}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-orange-500 ml-1">Reporting Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 [color-scheme:dark] transition-all" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            {/* Weather Selection */}
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-widest text-orange-500 ml-1">Weather Status</label>
              <div className="grid grid-cols-3 gap-4">
                {["Sunny", "Cloudy", "Rainy"].map(w => (
                  <button 
                    key={w} type="button"
                    onClick={() => setFormData({...formData, weather: w})}
                    className={`p-4 rounded-2xl border font-bold text-xs uppercase tracking-widest transition-all ${formData.weather === w ? 'bg-orange-600 border-orange-600 text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'}`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Worker Count */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-orange-500 ml-1">Log Description</label>
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 transition-all" placeholder="Activities, delays, or milestones..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-orange-500 ml-1">Worker Count</label>
              <input
                type="number"
                min="0"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-orange-500/50 transition-all"
                placeholder="0"
                onChange={(e) => setFormData({...formData, workers: e.target.value})}
              />
            </div>

            {/* Evidence Upload */}
            <div className="space-y-4">
               <label className="text-[11px] font-black uppercase tracking-widest text-orange-500 ml-1">Site Evidence (Images)</label>
               <input type="file" multiple onChange={handleImg} className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white/5 file:text-white hover:file:bg-white/10 cursor-pointer" />
               <div className="flex gap-4">
                 {previews.map((src, i) => <img key={i} src={src} className="w-20 h-20 object-cover rounded-xl border border-white/10" />)}
               </div>
            </div>

            <button type="submit" className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all uppercase tracking-[0.2em] text-sm shadow-xl shadow-white/5">
              Transmit Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DPRForm;