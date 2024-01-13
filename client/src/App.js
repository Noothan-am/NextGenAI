import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GenerateVideo from "./pages/GenerateVideo";
import CustomVideo from "./pages/CustomVideo";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/hello" element={<GenerateVideo />} />
      <Route path="/custom-video" element={<CustomVideo />} />
    </Routes>
  );
}

export default App;
