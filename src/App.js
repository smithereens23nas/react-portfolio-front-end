import "./styles/App.css";

// IMPORT COMPONENTS
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://nick-smith-portfolio.herokuapp.com/";

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home URL={URL} />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
