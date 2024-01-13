import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
