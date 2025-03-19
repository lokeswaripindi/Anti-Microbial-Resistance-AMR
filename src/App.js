import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Results from "./pages/Results";
import About from "./pages/About"; // ✅ Import About Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} /> {/* ✅ Add About Route */}
      </Routes>
    </Router>
  );
}

export default App;
