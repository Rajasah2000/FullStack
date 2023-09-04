import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
