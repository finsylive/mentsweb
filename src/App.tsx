import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorSection from "./app/Mentor/page";
import { Header } from "./sections/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/mentors" element={<MentorSection />} />
      </Routes>
    </Router>
  );
}

export default App;
