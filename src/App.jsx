import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProjectList from "./pages/ProjectList";
import DPRForm from "./pages/DPRForm";

function App() {
  return (
    <Router>
      <div className="bg-[#0f1115] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/dpr" element={<DPRForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;