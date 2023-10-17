import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import NavBar from "./components/NavBar";

function App() {
  return <div className="">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>

}

export default App;
