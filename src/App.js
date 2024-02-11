import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/landingPage";
import Menubar from "./components/menubar/Menubar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandPage />} />
          <Route path="menu" element={<Menubar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
