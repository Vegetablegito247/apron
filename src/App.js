import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/landingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
