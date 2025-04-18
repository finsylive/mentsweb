import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Header } from "./sections/Header";
import MentorSection from "./app/Mentor/page";
import { analytics } from "./firebase"; // Import analytics instance

function App() {
  useEffect(() => {
    // Optional: Custom log event
    if (analytics) {
      logEvent(analytics, "app_loaded");
    }
  }, []);

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
