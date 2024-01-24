import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import Signin from "./componenets/pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
