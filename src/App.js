import "./App.css";
import MyNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Policy from "./Pages/Policy";
import Cars from "./Pages/Cars";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cars/:carUrlId" element={<Cars />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
