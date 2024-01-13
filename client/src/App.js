import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GenerateVideo from "./pages/GenerateVideo";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/hello" element={<GenerateVideo />} />
    </Routes>
  );
}

export default App;
