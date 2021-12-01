import "./App.css";
import MyNavbar from "./Components/Navbar";
import Home from "./Pages/home";
import MyCarousel from "./Components/MyCarousel";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <MyCarousel />
    </div>
  );
}

export default App;
