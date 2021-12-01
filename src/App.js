import "./App.css";
import MyNavbar from "./Components/Navbar";
import Home from "./Pages/home";
import MyCarousel from "./Components/MyCarousel";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <MyCarousel />
      <Footer />
    </div>
  );
}

export default App;
