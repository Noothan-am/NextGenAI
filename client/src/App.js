import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GenerateVideo from "./pages/GenerateVideo";
import CustomVideo from "./pages/CustomVideo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/hello" element={<GenerateVideo />} />
      <Route path="/custom-video" element={<CustomVideo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
