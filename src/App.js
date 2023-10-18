import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
<script src="https://kit.fontawesome.com/24c9dde649.js" crossorigin="anonymous"></script>

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
