import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@test.com" && password === "123456") {
      navigate("/projects");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    /* Changed to min-h-screen to allow vertical scrolling ONLY when content exceeds height */
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#08090d] relative overflow-x-hidden font-sans">
      
      {/* HD BACKGROUND OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute right-0 top-0 w-full h-full lg:w-4/5 opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
            mixBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* LEFT SIDE: Branding - Moved more to the left using justify-start and lg:pl-24 */}
      <div className="relative z-10 flex-1 flex items-center justify-center lg:justify-start p-8 lg:pl-24 lg:pr-16">
        <div className="max-w-md w-full">
          <div className="flex items-center gap-5 mb-12">
            <div className="w-16 h-16 bg-gradient-to-tr from-orange-600 to-orange-900 rounded-2xl flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-orange-600/40 ring-1 ring-white/10">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none">Apex</span>
              <span className="text-xs font-bold tracking-[0.4em] text-orange-500 uppercase leading-none mt-1">Construction Group</span>
            </div>
          </div>
          
          <div className="space-y-2 mb-10">
            <h1 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">Design.</h1>
            <h1 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">Build.</h1>
            <h1 className="text-6xl font-black text-orange-600 tracking-tighter uppercase leading-[0.9]">Scale.</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-[2px] h-14 bg-orange-600 shadow-[0_0_20px_rgba(234,88,12,1)]"></div>
            <p className="text-gray-500 text-xs font-bold leading-relaxed max-w-[240px] uppercase tracking-[0.15em]">
              Next-generation site intelligence and infrastructure management.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Compact Glossy Login */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[400px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-tr-[5rem] rounded-bl-[5rem] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          
          <header className="mb-8">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.4em] mb-2">Security Portal</h2>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Sign In</h3>
          </header>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Personnel ID</label>
              <input
                required
                type="email"
                placeholder="test@test.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 outline-none focus:border-orange-500/50 transition-all font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">Access Key</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 outline-none focus:border-orange-500/50 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black font-black py-5 rounded-xl hover:bg-orange-600 hover:text-white transition-all transform active:scale-[0.98] uppercase tracking-[0.2em] text-xs shadow-2xl"
            >
              Enter Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <span className="text-[9px] text-gray-700 font-bold uppercase tracking-[0.3em]">
              Dev: test@test.com / 123456
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;